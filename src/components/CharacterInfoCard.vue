<template>
  <div id="content-cards">
    <div
      class="card-info"
      v-for="character in charactersStore.listAllCharacters"
    >
      <div class="card-info--text">
        <p class="card-info--text__state">
          <span>{{ iconState(character.status) }}</span>
          {{ character.status }}
        </p>
        <h2 class="card-info--text__name">{{ character.name }}</h2>
        <p class="card-info--text__species">({{ character.species }})</p>
        <div class="card-info--text--origin-location origin-location">
          <span class="origin-location__subtitle">Origin location: </span>
          <span class="origin-location__description">{{
            character.origin.name
          }}</span>
        </div>
        <div class="card-info--text--current-location current-location">
          <span class="current-location__subtitle">Current location: </span>
          <span class="current-location__description">{{
            character.location.name
          }}</span>
        </div>
      </div>
      <img
        :src="character.image"
        :alt="`Imagen de ${character.name}`"
        class="card-info__img"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref, computed } from 'vue';
import { useCharactersStore } from '../store/CharactersStore.ts';
export default defineComponent({
  setup() {
    const charactersStore = useCharactersStore();
    const characters = ref(null);

    onMounted(async () => {
      characters.value = await charactersStore.getListAllCharacters();
    });

    const iconState = (characterState: string): string => {
      if (characterState.toLowerCase() === 'alive') return '🟢';
      else if (characterState.toLowerCase() === 'dead') return '🔴';
      else return '🌐';
    };
    return {
      charactersStore,
      iconState,
    };
  },
});
</script>
<style lang="scss">
$color1: #425972;
$color2: #637486;
$color3: #88929c;
$color4: #afb1b3;
$color5: #d6cfc9;

@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');

body {
  color: white;
  font-family: 'Quicksand', sans-serif;
  #content-cards {
    z-index: 20;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 100%;
    .card-info {
      width: 350px;
      // background: rgb(131, 58, 180);
      // background: linear-gradient(
      //   90deg,
      //   rgba(131, 58, 180, 1) 0%,
      //   rgba(253, 29, 29, 1) 50%,
      //   rgba(252, 176, 69, 1) 100%
      // );
      // background: rgb(93, 232, 229);
      // background: linear-gradient(
      //   85deg,
      //   rgba(93, 232, 229, 0.5691526610644257) 0%,
      //   rgba(244, 77, 155, 0.48792016806722693) 35%,
      //   rgba(233, 39, 91, 0.4767156862745098) 68%,
      //   rgba(57, 34, 112, 0.406687675070028) 99%
      // );
      border: 2px dashed grey;
      border-radius: 12px;
      box-shadow: 0px 0px 21px 0px rgba(0, 0, 0, 0.3);
      margin: 20px;
      transition: all 0.3s ease-in-out;
      .card-info--text {
        padding: 15px 20px;
        background-color: #333;
        border-top-right-radius: 12px;
        border-top-left-radius: 12px;
        margin: 7px 7px 0 7px;

        &__state {
          position: float;
          float: right;
          font-size: 12px;
          margin: 0;
        }

        &__name {
          color: #d6cfc9;
          margin: 0;
        }

        &__species {
          margin: 0 0 8px 0;
          font-size: 13px;
          font-weight: 100;
        }

        &--origin-location {
          .origin-location__subtitle {
            font-size: 15px;
            font-weight: 400;
          }

          .origin-location__description {
            font-size: 13px;
            font-weight: 300;
          }
        }

        &--current-location {
          .current-location__subtitle {
            font-size: 15px;
            font-weight: 400;
          }

          .current-location__description {
            font-size: 13px;
            font-weight: 300;
          }
        }
      }
      &__img {
        display: block;
        position: float;
        float: bottom;
        width: 336px;
        height: 350px;
        margin: 0 7px 7px 7px;
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
      }
    }

    .card-info:hover {
      cursor: pointer;
      transform: perspective(200px) rotateY(5deg) scale(0.9);
    }
  }
}
</style>
