<template>
  <h1 class="title">
    WORLD OF RICK<br />
    <span>AND MORTY 🛸</span>
  </h1>
  <CharacterInfoCard />
  <Pagination />
</template>

<script lang="ts">
import CharacterInfoCard from '../components/CharacterInfoCard.vue';
import Pagination from '../components/Pagination.vue';
import { defineComponent, ref, onMounted } from 'vue';
export default defineComponent({
  components: { CharacterInfoCard, Pagination },
  setup() {
    // onMounted(async () => {});

    return {
      // prueba,
    };
  },
});
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Exo:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Quicksand:wght@300;400;500;600;700&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Archivo+Black&family=Exo:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Quicksand:wght@300;400;500;600;700&display=swap');
h1 {
  text-align: center;
  position: relative;
  z-index: 20;
  font-family: 'Archivo Black', sans-serif;
  span {
    font-family: 'Archivo Black', sans-serif;
    color: transparent;
    -webkit-text-stroke: 0.5px white;
  }
}
.content-cards {
  display: flex;
  width: 100%;
  height: 100vh;
  border: 1px solid red;
}
</style>
