<template>
  <button
    class="btn"
    :class="{ 'btn--disabled': isDisabled }"
    :disabled="isDisabled"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    isDisabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.btn {
  height: 36px;
  width: 100%;
  padding: 10px;
  text-align: center;
  color: $fullWhite;
  border-radius: 10px;
  border: none;
  background: $green;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  cursor: pointer;
  @include t2;

  &--disabled {
    color: $grey-light;
    background: $disabled;
    box-shadow: none;
  }
}
</style>
