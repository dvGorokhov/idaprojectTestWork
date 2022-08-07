<template>
  <!-- <div class="card-list">
    <h1 v-if="!items.length" class="card-list__empty">
      Необходимо добавить товар...
    </h1>

    <BaseCard
      v-for="item in items"
      v-else
      :key="item.id"
      v-bind="item"
      @delete="$emit('delete', item)"
    />
  </div> -->
  <h1 v-if="!items.length" class="card-list__empty">
    Необходимо добавить товар...
  </h1>

  <transition-group v-else name="list" tag="div" class="card-list">
    <BaseCard
      v-for="item in items"
      :key="item.id"
      v-bind="item"
      @delete="$emit('delete', item)"
    />
  </transition-group>
</template>

<script>
import BaseCard from '@/components/BaseCard.vue'
export default {
  components: {
    BaseCard
  },

  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.list-move {
  transition: all 0.8s;
}
.card-list {
  height: calc(100vh - 119px);
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: start;
  flex-wrap: wrap;
  gap: 16px;
  padding-top: 16px;
  flex-grow: 1;
  overflow-y: scroll;

  &__empty {
    color: $grey;
    @include h2;
  }

  @media (max-width: 767px) {
    height: 100%;
    justify-content: center;
    flex-direction: column;
    overflow-y: clip;
  }
}
</style>
