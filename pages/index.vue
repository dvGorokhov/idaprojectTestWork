<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="page">
    <div class="page__header">
      <h1 class="page__title">Добавление товара</h1>
      <BaseSelect v-model="selectedOption" :options="sortOptions" />
    </div>
    <div class="page__main">
      <BaseFormCreate @send="addCard" />
      <CardList :items="sortedCardList" @delete="deleteCard" />
    </div>
  </div>
</template>

<script>
import BaseFormCreate from '../components/BaseFormCreate.vue'
import BaseSelect from '../components/BaseSelect.vue'
import CardList from '~/components/CardList.vue'
export default {
  components: {
    BaseFormCreate,
    BaseSelect,
    CardList
  },

  data() {
    return {
      selectedOption: 1,
      sortOptions: [
        { id: 1, name: 'По умолчанию' },
        { id: 2, name: 'По цене min' },
        { id: 3, name: 'По цене max' },
        { id: 4, name: 'По наименованию' }
      ],
      cardList: []
    }
  },

  computed: {
    sortedCardList() {
      let sortedList = [...this.cardList]

      switch (this.selectedOption) {
        case 1:
          sortedList = this.cardList
          break
        case 2:
          sortedList = sortedList.sort((a, b) => a.price - b.price)
          break
        case 3:
          sortedList = sortedList.sort((a, b) => b.price - a.price)
          break
        case 4:
          sortedList = sortedList.sort((a, b) => {
            if (a.name.toLowerCase() < b.name.toLowerCase()) {
              return -1
            }
            if (a.name.toLowerCase() > b.name.toLowerCase()) {
              return 1
            }
            return 0
          })
          break
        default:
          break
      }

      return sortedList
    }
  },

  beforeMount() {
    const localListItems = JSON.parse(localStorage.getItem('cardList'))
    if (localListItems) {
      this.cardList = localListItems
    }
  },

  methods: {
    addCard(card) {
      this.cardList.unshift(card)
      this.setCardList(this.cardList)
    },
    deleteCard(card) {
      this.cardList = this.cardList.filter((item) => item.id !== card.id)
      this.setCardList(this.cardList)
    },

    setCardList(list) {
      localStorage.setItem('cardList', JSON.stringify(list))
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 32px;
  background: $white;
  overflow: hidden;
  box-sizing: border-box;

  &__header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: 16px;
  }

  &__main {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 16px;
  }

  &__title {
    color: $grey;
    @include h1;
  }

  // media start 375px
  @media (max-width: 767px) {
    height: 100%;
    padding: 20px;
    overflow: visible;

    &__main {
      flex-direction: column;
      align-items: center;
    }

    &__header {
      flex-direction: column;
      align-items: baseline;
      gap: 16px;
    }
  }
}
</style>
