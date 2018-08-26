<template>
  <div class="container">
        <audio id='audio' autoplay>
        <source src='http://66.90.93.122/ost/super-mario-bros/qqrfebix/08%20-%20Water%20World.mp3' />
       </audio>
<a href="https://fontmeme.com/pixel-fonts/"><img src="https://fontmeme.com/permalink/180824/195eed1acf73392ca82b3ee07ff7fd9e.png" alt="pixel-fonts" border="0"></a>
    <div class="row">
      <div class="main-image">
  <img src="https://i.imgur.com/JByW1Ci.jpg?1" alt="" width="100%">
  
</div>
      <div class="col-sm-6">
        <button type="button" class="btn btn-info" data-toggle="modal" data-target="#exampleModal"><img src="https://fontmeme.com/permalink/180824/7fd37ca8ab5e99101bdcfcc87703a445.png" alt="pixel-fonts" border="0"></button>
      </div>
      <div class="col-sm-6">
        <button type="button" class="btn btn-info" @click="toList"><img src="https://fontmeme.com/permalink/180824/9b8671d6e6edce239391a1c81824ffd0.png" alt="pixel-fonts" border="0"></button>
      </div>
    </div>
  </div>
</template>

<script>
import router from '../router'
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  methods:{
    toList(){
      router.push('/listRoom')
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  text-align: center;
  height: 800px;
}

.main-image {
  margin-top: 80px;
  margin-bottom: 80px;
}

.btn {
  background-color: black;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
