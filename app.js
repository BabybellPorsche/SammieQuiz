const { createApp } = Vue;

// Audio context globaal aanmaken maar niet starten
let audioCtx = null;

function initAudio() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
}

function playSound(type) {
    if (!audioCtx) initAudio();
    try {
        if (audioCtx.state === 'suspended') audioCtx.resume();
        
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        const now = audioCtx.currentTime;
        osc.connect(gain);
        gain.connect(audioCtx.destination);

        if (type === 'correct') {
            osc.type = 'sine';
            osc.frequency.setValueAtTime(500, now);
            osc.frequency.exponentialRampToValueAtTime(1000, now + 0.1);
            gain.gain.setValueAtTime(0.2, now);
            gain.gain.linearRampToValueAtTime(0, now + 0.5);
            osc.start(now);
            osc.stop(now + 0.5);
        } else if (type === 'wrong') {
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(150, now);
            osc.frequency.linearRampToValueAtTime(100, now + 0.3);
            gain.gain.setValueAtTime(0.2, now);
            gain.gain.linearRampToValueAtTime(0, now + 0.3);
            osc.start(now);
            osc.stop(now + 0.3);
        } else if (type === 'tick') {
            osc.type = 'square';
            osc.frequency.setValueAtTime(800, now);
            gain.gain.setValueAtTime(0.02, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
            osc.start(now);
            osc.stop(now + 0.05);
        }
    } catch(e) {
        console.log("Audio play failed", e);
    }
}

createApp({
    data() {
        return {
            gameState: 'lobby',
            showSettings: false,
            showAdmin: false,
            winningScore: 30,
            
            settings: {
                soundEnabled: true,
                timerEnabled: true,
                timerDuration: 30,
                allowSteal: false
            },

            players: [],
            newPlayerName: '',
            currentPlayerIndex: 0,
            currentStreak: 0,
            winner: null,

            questions: [],
            usedQuestionIds: [],
            currentQuestion: null,
            isFlipped: false,
            isShaking: false,
            timerVal: 0,
            timerInterval: null,

            selectedCategory: 'Alles',
            
            adminSearch: '',
            editingQuestion: null,
            altAnswersStr: '',

            historyStack: [] 
        }
    },
    computed: {
        uniqueCategories() {
            if (!this.questions || !Array.isArray(this.questions)) return [];
            const cats = new Set(
                this.questions
                    .filter(q => q && q.category)
                    .map(q => q.category)
            );
            return Array.from(cats).sort();
        },
        filteredAdminQuestions() {
            if (!this.adminSearch) return this.questions;
            const s = this.adminSearch.toLowerCase();
            return this.questions.filter(q => 
                (q.question && q.question.toLowerCase().includes(s)) || 
                (q.answer && q.answer.toLowerCase().includes(s))
            );
        }
    },
    mounted() {
        // Veilig laden van vragen
        if (typeof QUIZ_DATA !== 'undefined' && Array.isArray(QUIZ_DATA.questions)) {
            this.questions = QUIZ_DATA.questions;
        } else {
            console.error("QUIZ_DATA niet gevonden. Is vragen.js geladen?");
            this.questions = []; 
        }

        window.addEventListener('keydown', (e) => {
            if (!this.currentQuestion) return;
            if (e.code === 'Space' && !this.isFlipped) {
                e.preventDefault();
                this.revealAnswer();
            }
            if (this.isFlipped) {
                if (e.code === 'ArrowLeft') this.handleResult(false);
                if (e.code === 'ArrowRight') this.handleResult(true);
            }
        });
    },
    methods: {
        addPlayer() {
            if (this.newPlayerName.trim()) {
                this.players.push({ name: this.newPlayerName, score: 0 });
                this.newPlayerName = '';
            }
        },
        editScore(index) {
            const newVal = prompt(`Nieuwe score voor ${this.players[index].name}:`, this.players[index].score);
            if (newVal !== null && !isNaN(newVal)) {
                this.saveState();
                this.players[index].score = parseInt(newVal);
            }
        },
        forceTurn(index) {
            if (this.gameState === 'lobby') return;
            if (confirm(`Beurt forceren naar ${this.players[index].name}?`)) {
                this.saveState();
                this.currentQuestion = null;
                this.currentPlayerIndex = index;
                this.currentStreak = 0;
                this.gameState = 'playing';
            }
        },
        startGame() {
            if (this.players.length > 0) {
                this.gameState = 'playing';
                // Init audio bij eerste gebruikersinteractie
                if(this.settings.soundEnabled) initAudio();
            }
        },
        resetGame() {
            if (confirm("Reset spel en terug naar lobby?")) {
                this.gameState = 'lobby';
                this.players = [];
                this.currentQuestion = null;
                this.currentPlayerIndex = 0;
                this.usedQuestionIds = [];
                clearInterval(this.timerInterval);
            }
        },
        resetUsedQuestions() {
            this.usedQuestionIds = [];
            alert("Geheugen gewist.");
        },

        selectQuestion(difficulty) {
            this.saveState();
            let pool = this.questions.filter(q => q.difficulty === difficulty);
            
            if (this.selectedCategory !== 'Alles') {
                pool = pool.filter(q => q.category === this.selectedCategory);
            }

            const freshPool = pool.filter(q => !this.usedQuestionIds.includes(q.id));

            if (freshPool.length === 0) {
                if (pool.length === 0) {
                    alert(`Geen vragen van Niveau ${difficulty} in '${this.selectedCategory}'.`);
                } else {
                    if(confirm("Alle vragen van dit type zijn al geweest. Resetten?")) {
                        this.usedQuestionIds = [];
                        this.selectQuestion(difficulty);
                    }
                }
                return;
            }

            const randomIndex = Math.floor(Math.random() * freshPool.length);
            this.currentQuestion = freshPool[randomIndex];
            this.usedQuestionIds.push(this.currentQuestion.id);
            
            this.isFlipped = false;
            if (this.settings.timerEnabled) this.startTimer();
        },

        startTimer() {
            this.timerVal = this.settings.timerDuration;
            if (this.timerInterval) clearInterval(this.timerInterval);
            this.timerInterval = setInterval(() => {
                this.timerVal--;
                if (this.timerVal <= 5 && this.timerVal > 0 && this.settings.soundEnabled) playSound('tick');
                if (this.timerVal <= 0) clearInterval(this.timerInterval);
            }, 1000);
        },

        revealAnswer() {
            this.isFlipped = true;
            clearInterval(this.timerInterval);
        },

        handleResult(isCorrect) {
            if (this.settings.soundEnabled) playSound(isCorrect ? 'correct' : 'wrong');

            if (!isCorrect) {
                this.isShaking = true;
                setTimeout(() => this.isShaking = false, 500);
            }

            setTimeout(() => {
                if (this.gameState === 'playing') {
                    if (isCorrect) {
                        const points = this.currentQuestion.difficulty;
                        this.players[this.currentPlayerIndex].score += points;
                        this.currentStreak++;

                        if (this.checkWinner()) return;

                        if (this.currentStreak >= 3) {
                            alert(`🔥 STREAK! Volgende speler.`);
                            this.nextTurn();
                        } else {
                            this.currentQuestion = null;
                        }
                    } else {
                        if (this.settings.allowSteal && this.players.length > 1) {
                            this.gameState = 'steal';
                            this.currentPlayerIndex = (this.currentPlayerIndex + 1) % this.players.length;
                        } else {
                            this.nextTurn();
                        }
                    }
                } else if (this.gameState === 'steal') {
                    if (isCorrect) {
                        const points = Math.ceil(this.currentQuestion.difficulty / 2);
                        this.players[this.currentPlayerIndex].score += points;
                        if (this.checkWinner()) return;
                    }
                    this.gameState = 'playing';
                    this.currentStreak = 0;
                    this.currentQuestion = null;
                }
            }, 400);
        },

        nextTurn() {
            this.currentQuestion = null;
            this.currentStreak = 0;
            this.gameState = 'playing';
            this.currentPlayerIndex = (this.currentPlayerIndex + 1) % this.players.length;
        },

        checkWinner() {
            if (this.players[this.currentPlayerIndex].score >= this.winningScore) {
                this.winner = this.players[this.currentPlayerIndex];
                this.gameState = 'winner';
                this.currentQuestion = null;
                confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
                return true;
            }
            return false;
        },

        // ADMIN
        openAdmin() {
            this.showAdmin = true;
            this.editingQuestion = null;
        },
        openEditCurrentQuestion() {
            if(!this.currentQuestion) return;
            this.startEdit(this.currentQuestion);
            this.showAdmin = true;
        },
        startEdit(q) {
            this.editingQuestion = JSON.parse(JSON.stringify(q));
            this.altAnswersStr = q.answers ? q.answers.join(', ') : '';
        },
        startNewQuestion() {
            this.editingQuestion = {
                id: null, question: '', answer: '', category: 'Algemeen', difficulty: 1, answers: []
            };
            this.altAnswersStr = '';
        },
        cancelEdit() { this.editingQuestion = null; },
        saveEdit() {
            const alts = this.altAnswersStr.split(',').map(s => s.trim()).filter(s => s);
            this.editingQuestion.answers = alts;

            if (this.editingQuestion.id) {
                const idx = this.questions.findIndex(q => q.id === this.editingQuestion.id);
                if (idx !== -1) {
                    this.questions[idx] = this.editingQuestion;
                    if (this.currentQuestion && this.currentQuestion.id === this.editingQuestion.id) {
                        this.currentQuestion = this.questions[idx];
                    }
                }
            } else {
                this.editingQuestion.id = 'custom_' + Date.now();
                this.questions.push(this.editingQuestion);
            }
            this.editingQuestion = null;
        },
        deleteQuestion(id) {
            if (confirm("Verwijderen?")) {
                this.questions = this.questions.filter(q => q.id !== id);
                if (this.currentQuestion && this.currentQuestion.id === id) this.currentQuestion = null;
            }
        },
        exportData() {
            const dataStr = "const QUIZ_DATA = " + JSON.stringify({
                version: 1, meta: { source: "export" }, questions: this.questions
            }, null, 2);
            navigator.clipboard.writeText(dataStr).then(() => alert("Gekopieerd!"));
        },

        saveState() {
            const state = {
                players: JSON.parse(JSON.stringify(this.players)),
                currentPlayerIndex: this.currentPlayerIndex,
                currentStreak: this.currentStreak,
                gameState: this.gameState,
                currentQuestion: this.currentQuestion ? JSON.parse(JSON.stringify(this.currentQuestion)) : null,
                isFlipped: this.isFlipped
            };
            this.historyStack.push(state);
            if (this.historyStack.length > 10) this.historyStack.shift();
        },
        undoLastAction() {
            if (this.historyStack.length === 0) return;
            const prevState = this.historyStack.pop();
            this.players = prevState.players;
            this.currentPlayerIndex = prevState.currentPlayerIndex;
            this.currentStreak = prevState.currentStreak;
            this.gameState = prevState.gameState;
            this.currentQuestion = prevState.currentQuestion;
            this.isFlipped = prevState.isFlipped;
            clearInterval(this.timerInterval);
        }
    }
}).mount('#app');
