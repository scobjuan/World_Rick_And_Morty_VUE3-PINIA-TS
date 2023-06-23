<template>
  <div class="background-noise">
    <img class="background-noise__img" src="square.png" alt="" />
  </div>
  <ListCharacters />
</template>

<script lang="ts">
import ListCharacters from './layouts/ListCharacters.vue';

import { defineComponent } from 'vue';

export default defineComponent({
  components: { ListCharacters },
});
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');
* {
  margin: 0;
  padding: 0px;
  box-sizing: border-box;
  font-family: 'Quicksand', sans-serif;
}

.background-noise {
  position: fixed;
  z-index: 10;
  width: 100%;
  height: 100vh;
  padding: 20px;
  filter: contrast(170%) brightness(1000%);
  background: radial-gradient(
      circle at 50% 50%,
      rgba(0, 0, 0, 0.65),
      rgba(0, 0, 0, 1)
    ),
    url(public/backgroundNoise.svg);

  .background-noise__img {
    opacity: 0.1;
  }
}
</style>
