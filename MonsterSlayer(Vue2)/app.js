new Vue({
    el: '#app',
    data:{
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        logs: [],
    },
    methods: {
        startGame(){
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.logs = [];
        },
        attack(){
            var damage = this.calculateDamage(3,10);
            this.monsterHealth -= damage;
            this.logs.unshift({
                isPlayer: true,
                text: 'Player hits Monster for ' + damage,
            });
            if(this.checkWin()){
                return;
            }
            this.monsterDamage();
        },
        calculateDamage(min, max){
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        monsterDamage(){
            var damage = this.calculateDamage(5,12);
            this.playerHealth -= damage;
            this.checkWin();
            this.logs.unshift({
                isPlayer: false,
                text: 'Monster damage player for ' + damage,
            });
        },  
        specialAttack(){
            var damage = this.calculateDamage(10,20);
            this.monsterHealth -= damage;
            this.logs.unshift({
                isPlayer: true,
                text: 'Player hits hard Monster for ' + damage,
            });
            if(this.checkWin()){
                return;
            }
            this.monsterDamage();
        },
        heal(){
            if(this.playerHealth <= 90){
                this.playerHealth += 10;
            }else{
                this.playerHealth = 100;    
            }
            this.logs.unshift({
                isPlayer: true,
                text: 'Player heals for 10. '  
            });
            this.monsterDamage();
        },
        checkWin(){
            if(this.monsterHealth <= 0){
                if(confirm('You won!! New Game?')){
                    this.startGame();
                }else{
                    this.gameIsRunning = false;
                }
                return true;
            }
            else if(this.playerHealth <= 0){
                if(confirm('You Lost!! New Game?')){
                    this.startGame();
                }else{
                    this.gameIsRunning = false;
                }
                return true;
            }
            return false;
        },
        giveUp(){
            this.gameIsRunning = false; 
            alert("You Lost!!");
            this.logs = [];
        }
    },
});