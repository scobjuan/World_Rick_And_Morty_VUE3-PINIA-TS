<template>
  <div class="content-pagination">
    <ul class="content-pagination--list list-pagination">
      <div
        class="list-pagination--set-pagination"
        v-for="(iteration, index) in pagination.totalPages / 5"
        :key="index"
      >
        <li
          class="list-pagination--item"
          v-for="(iteration2, index2) in 5"
          :key="iteration2"
        >
          <a class="list-pagination--item__link" href="#">
            {{ (count += 1) }}
          </a>
        </li>
      </div>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onBeforeUpdate } from 'vue';
import { useCharactersStore } from '../store/CharactersStore.ts';
export default defineComponent({
  setup() {
    const pagination = useCharactersStore().pagination;
    let count = 0;
    let numberSetPages = ref(0);

    onBeforeUpdate(() => {
      count.value = 0;
    });

    const nextSetPages = () => {
      numberSetPages.value += 1;

      const contentPages = document.querySelector('.content-pagination');
      const setPages = document.querySelectorAll(
        '.list-pagination--set-pagination'
      );

      if (setPages.length < numberSetPages.value + 1) return;
      const offSetChild = setPages[numberSetPages.value].offsetTop;
      const scrollTopMain = contentPages.scrollTop;

      contentPages.scrollTop += offSetChild - scrollTopMain;
    };

    return {
      pagination,
      count,
      nextSetPages,
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
  height: 110px;
  overflow: hidden;

  .list-pagination {
    justify-content: center;
    align-items: center;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 20px;

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
