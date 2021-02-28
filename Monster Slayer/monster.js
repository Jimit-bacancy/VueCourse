function randomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
    data() {
        return {
            monsterHealth: 100,
            playerHealth: 100,
            currentRound: 0,
            winner: null,
            logMessage: []
        }
    },
    methods: {
        attackMonster() {
            this.currentRound++;
            const attackValue = randomValue(5, 12);
            this.monsterHealth -= attackValue;
            this.addLogMessage('player','attack',attackValue);
            this.attackPlayer();
        },
        attackPlayer() {
            const attackValue = randomValue(8, 15);
            this.playerHealth -= attackValue;
            this.addLogMessage('monster','attack',attackValue);
        },
        specialAttackMonster() {
            this.currentRound++;
            const attackValue = randomValue(10, 25);
            this.monsterHealth -= attackValue;
            this.addLogMessage('player','special attack',attackValue);
            this.attackPlayer();
        },
        healPlayer() {
            this.currentRound++;
            const health = randomValue(10, 20);
            if (this.playerHealth + health > 100) {
                this.playerHealth = 100;
            } else {
                this.playerHealth += health;
            }
            this.addLogMessage('player','heal',health);
            this.attackPlayer();
        },
        surrender() {
            this.winner = 'Monster';
        },
        startGame() {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.currentRound = 0;
            this.winner = null;
            this.logMessage = [];
        },
        addLogMessage(who, what, value) {
            this.logMessage.unshift({ 
                actionBy: who,
                actionType: what,
                actionValue: value
            });
        }
    },
    computed: {
        monsterHealthStyle() {
            if (this.monsterHealth <= 0) {
                return { width: '0%' };
            }
            return { width: this.monsterHealth + '%' };
        },
        playerHealthStyle() {
            if (this.playerHealth <= 0) {
                return { width: '0%' }
            }
            return { width: this.playerHealth + '%' };
        },
        specialAttack() {
            return this.currentRound % 3 !== 0;
        },
        healTime() {
            return this.currentRound % 2 !== 0;
        }
    },
    watch: {
        monsterHealth(value) {
            if (value <= 0 && this.playerHealth <= 0) {
                //Draw
                this.winner = 'Draw';
            } else if (value <= 0) {
                //Player Win
                this.winner = 'Player';
            }
        },
        playerHealth(value) {
            if (value <= 0 && this.monsterHealth <= 0) {
                //Draw
                this.winner = 'Draw';
            } else if (value <= 0) {
                this.winner = 'Monster';
            }
        }
    },
});

app.mount('#game');