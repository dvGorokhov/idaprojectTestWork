<template>
  <div class="selectbox" :tabindex="tabindex" @blur="open = false">
    <div
      class="selectbox__selected"
      :class="{ 'selectbox__selected--open': open }"
      @click="open = !open"
    >
      <span>{{ selected }}</span>
      <span class="selectbox__arrow"></span>
    </div>
    <div class="selectbox__items" :class="{ 'selectbox__items--hide': !open }">
      <div
        v-for="option of options"
        :key="option.id"
        class="selectbox__items-item"
        @click="onChange(option)"
      >
        {{ option.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true
    },
    default: {
      type: String,
      required: false,
      default: null
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0
    }
  },
  data() {
    return {
      selected: this.default
        ? this.default
        : this.options.length > 0
        ? this.options[0].name
        : null,
      open: false
    }
  },
  methods: {
    onChange(option) {
      this.selected = option.name
      this.open = false
      this.$emit('input', option.id)
    }
  }
}
</script>

<style lang="scss" scoped>
.selectbox {
  position: relative;
  height: 36px;
  width: 142px;
  color: $grey;
  @include t2;

  &__selected {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    padding: 10px 16px;
    background: $white;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    box-sizing: border-box;
    cursor: pointer;

    &--open {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;

      .selectbox__arrow {
        transform: rotate(-135deg);
        -webkit-transform: rotate(-135deg);
      }
    }
  }

  &__arrow {
    border: solid $grey;
    border-width: 0 1px 1px 0;
    display: inline-block;
    padding: 3px;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    transition: all 0.3s;
  }

  &__items {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    z-index: 999;
    padding: 10px 16px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    background: $white;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    transition: all 0.3s;

    &--hide {
      display: none;
    }

    &-item {
      cursor: pointer;
    }
  }
}
</style>
