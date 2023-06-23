<template>
  <div class="content-pagination">
    <ul class="content-pagination--list list-pagination">
      <!-- <li class="list-pagination--item current-page">
        <a class="list-pagination--item__link" href="#">1</a>
      </li> -->
      <li
        class="list-pagination--item"
        v-if="page === pagination.totalPages / 5"
      >
        <a class="list-pagination--item__link" href="#" @click="reducePage()"
          >...</a
        >
      </li>
      <div v-for="(iteration, index) in pagination.totalPages / 5" :key="index">
        <li
          class="list-pagination--item"
          v-for="(iteration2, index2) in 5"
          :key="iteration2"
          v-show="index === page"
        >
          <a class="list-pagination--item__link" href="#">
            {{ (count += 1) }}
          </a>
        </li>
        <li
          v-if="index === page && page !== pagination.totalPages / 5"
          class="list-pagination--item"
        >
          <a
            class="list-pagination--item__link"
            href="#"
            @click="incrementPage()"
            >...</a
          >
        </li>
      </div>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useCharactersStore } from '../store/CharactersStore.ts';
export default defineComponent({
  setup() {
    const pagination = useCharactersStore().pagination;
    const count = 0;
    let page = ref(1);

    const incrementPage = () => {
      page.value += 1;
    };

    const reducePage = () => {
      page.value -= 1;
    };
    return {
      pagination,
      count,
      incrementPage,
      reducePage,
      page,
    };
  },
});
</script>

<style lang="scss">
.content-pagination {
  position: fixed;
  left: 0;
  top: 37%;
  margin: 0 20px;
  z-index: 20;
  background: #ffffff17;
  border-radius: 12px;
  padding: 5px 0;

  .list-pagination {
    justify-content: center;
    align-items: center;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;

    &--item {
      padding: 0px 10px;

      &__link {
        text-decoration: none !important;
        color: white;
        font-weight: bold;
      }

      &:hover {
        cursor: pointer;
        background: rgba(51, 51, 51, 6);
        border-radius: 10px;
      }
    }
  }

  .current-page {
    border-radius: 10px;
    background: #333;

    a {
      color: white;
    }
  }
}
</style>
