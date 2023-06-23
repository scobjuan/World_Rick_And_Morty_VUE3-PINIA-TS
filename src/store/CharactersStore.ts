import { defineStore } from 'pinia';
import ICharacter from '../models/ICharacterModel';
import { ref, Ref } from 'vue';
import axios from 'axios';

export const useCharactersStore = defineStore('characterStore', () => {
  const listAllCharacters: Ref<ICharacter[] | null> = ref(null);
  const pagination: Ref<{ currentPage: number; totalPages: number }> = ref({
    currentPage: 1,
    totalPages: 10,
  });

  const getListAllCharacters = async (): Promise<ICharacter[]> => {
    const response = await axios.get(
      'https://rickandmortyapi.com/api/character/?page=19'
    );
    listAllCharacters.value = response.data.results;
    pagination.value = {
      currentPage: pagination.value.currentPage + 1,
      totalPages: response.data.info.pages,
    };
    return response.data.results;
  };

  return {
    listAllCharacters,
    pagination,
    getListAllCharacters,
  };
});
