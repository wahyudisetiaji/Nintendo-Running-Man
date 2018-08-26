<template>
  <div class="about">
    <audio id=“audio”  autoplay>
        <source src="http://66.90.93.122/ost/super-mario-bros-2/amokcrqa/03%20-%20Super%20Mario%20Bros%202%20Main%20Theme.mp3"/>
    </audio>
    <div class="players">
      <div class="player1">
        .
        <img src="../assets/kisspng-sonic-the-hedgehog-2-mario-tails-metal-sonic-pixel-5ac493b33cdba2.7782679115228323072493 (1).png" alt="" v-bind:style="{ marginLeft: position1 + '%' }">
      </div>
      
      <div class="player2">
        .
        <img src="../assets/kisspng-super-mario-advance-4-super-mario-bros-3-super-m-mario-5abb95e6e038c3.9712500315222430469184 (1).png" alt="" v-bind:style="{ marginLeft: position2 + '%' }">
      </div>
    </div>
  </div>
</template>

<script>
const soundMarioWin =
  "https://themushroomkingdom.net/sounds/wav/mparty8/mparty8_mario_10.wav";
const soundMarioStart =
  "https://themushroomkingdom.net/sounds/wav/sm3dl/sm3dl_mario_here_we_go.wav";

const soundSonicWin =
  "https://wingless-seraph.net/sound/voice/31_jakigan_win.wav";
const soundSonicStart =
  "https://wingless-seraph.net/sound/voice/03_jakigan_before.wav";

const runAudio =
  "https://themushroomkingdom.net/sounds/wav/smb3/smb3_stomp.wav";

import { mapState, mapActions } from "vuex";
import database from '@/firebase/firebase.js'
import router from '../router.js'
export default {
  data: function() {
    return {
      position1: 0,
      position2: 0
    };
  },
  created(){
    this.getPositionFB()
  },
  computed: {
    ...mapState(["statusPlayer1","rooms","roomName","player1","player2"], 'roomLength')
  },
  methods: {
    ...mapActions([
      'getlistRoom', 'getRoomLength'
    ]),
    playGame(){
      this.getlistRoom()
      this.playerOnRoom = this.rooms
    },
    getPositionFB(){
      let self = this
      database.ref(`rooms/${self.roomName}`).on('value', function (snapshot) {
        var players = snapshot.val()
        self.position1 = players.player1.position
        self.position2 = players.player2.position
      })
    }
  },
  mounted() {
    let that = this;
    let that2 = this;
    window.addEventListener("keypress", function(e) {
      //Sonic
      if (that.statusPlayer1) {
        if(that.position2 < 90) {
          if (e.keyCode == 32) {
              console.log("position player 1",that.position1);
              if(that.position1<90){

                database.ref('rooms/'+that.roomName+'/player1').set({
                  username: that.player1,
                  position: that.position1 + 2
                },function(err){
                  if(err){
                    console.log(err);
                  }
                  else{
                    var run = new Audio(runAudio);
                    run.play();
                  }
                })
                
              }
              if (that.position1 == 90) {
                var audio = new Audio(soundSonicWin);
                audio.play();
                swal({
                  title: "Player 1 win!",
                  text: "Lets play again!",
                  icon: "success",
                  button: "Yeay!",
                })
                .then(val => {
                  if(val){
                    window.location="/"
                  }
                })
              }
              if (that.position1 == 2) {
                var audio = new Audio(soundSonicStart);
                audio.play();
              }
            }
        }else {
          swal({
            title: "You Lose!",
            text: "Lets play again!",
            icon: "warning",
            button: "Yeay!",
          })
          .then(val => {
            if(val){
              window.location="/"
            }
          })
        }
      //Mario
      } else if (!that2.statusPlayer1) {
        if(that2.position1 < 90) {
          if (e.keyCode == 32) {
            if(that.position2<90){
              database.ref('rooms/'+that.roomName+'/player2').set({
                username: that.player2,
                position: that.position2 + 2
              },function(err){
                if(err){
                  console.log(err)
                }
                else{
                  var run = new Audio(runAudio);
                  run.play();
                }
              })
            }        

            if (that2.position2 == 90) {
              var audio = new Audio(soundMarioWin);
              audio.play();
              swal({
                title: "Player 2 win!",
                text: "Lets play again!",
                icon: "success",
                button: "Yeay!",
              })
              .then(val => {
                if(val){
                  window.location="/"
                }
              })
            }
            if (that2.position2 == 2) {
              var audio = new Audio(soundMarioStart);
              audio.play()
            }
          }
        }else {
           swal({
            title: "You Lose!",
            text: "Lets play again!",
            icon: "warning",
            button: "Yeay!",
          })
          .then(val => {
            if(val){
              window.location="/"
            }
          })
        }
      } 
    });
  }
};
</script>


<style>
.about {
  background-image: url("https://i.imgur.com/cGtTiIx.png");
  border: solid;
  height: 800px;
}

img {
  position: absolute;
  z-index: -1;
}

.players {
  margin-top: 440px;
}

.player1 {
  position: relative;
  animation: MoveUpDown 0.1s linear infinite;
  margin-bottom: 10px;
  z-index: 998;
}

.player2 {
  position: relative;
  animation: MoveUpDown 0.1s linear infinite;
  margin-top: 160px;
  z-index: 900;
}
@keyframes MoveUpDown {
  0%,
  100% {
    bottom: 0;
  }
  50% {
    bottom: 5px;
  }
}
</style>
