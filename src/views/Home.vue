<template>
  <div class="home">
    <HelloWorld/>
    <ModalCreateRoom/>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import ModalCreateRoom from "@/components/ModalCreateRoom.vue";

export default {
  name: "home",
  components: {
    HelloWorld,
    ModalCreateRoom
  }
};
</script>

<style>
</style>
