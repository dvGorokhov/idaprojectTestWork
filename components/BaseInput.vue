<template>
  <div
    class="input-item"
    :class="{ 'input-item--error': isEmptyValue && requiredField }"
  >
    <label
      :class="{
        'input-item__required': requiredField
      }"
      :title="label"
      >{{ label }}</label
    >
    <input
      type="text"
      :value="value"
      :placeholder="placeholder"
      @input="(e) => $emit('input', e.target.value)"
      @blur="handleBlur"
      @keypress="isNumber ? formatNumber($event) : false"
    />
    <p v-if="isEmptyValue && requiredField" class="input-item__error-message">
      Поле является обязательным
    </p>
  </div>
</template>

<script>
import { formatNumber } from '@/helpers/formatNumber.helper'
export default {
  props: {
    value: { type: [String, Number], default: '' },
    placeholder: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    requiredField: {
      type: Boolean,
      default: false
    },
    isNumber: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      isEmptyValue: false
    }
  },

  methods: {
    formatNumber,
    handleBlur(e) {
      if (!e.target.value) {
        this.isEmptyValue = true
      } else {
        this.isEmptyValue = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.input-item {
  position: relative;
  width: 100%;
  max-width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 4px;
  background: transparent;

  input {
    width: 100%;
    height: 36px;
    padding: 10px 16px;
    color: $grey;
    background: $white;
    border: 1px solid transparent;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    outline: none;
    transition: all 0.3s;
    box-sizing: border-box;
    @include t2;

    &::placeholder {
      color: $grey-light;
    }

    &:hover {
      border: 1px solid $grey;
    }
  }

  label {
    position: relative;
    width: fit-content;
    color: $grey-dark;
    @include t3;
  }

  &--error {
    input {
      border: 1px solid $red;

      &:hover {
        border: 1px solid $red;
      }
    }
  }

  &__error-message {
    position: absolute;
    bottom: -12px;
    left: 0;
    color: $red;
    animation: error 0s 300ms forwards;
    visibility: hidden;
    @keyframes error {
      to {
        visibility: visible;
      }
    }
    @include t4;
  }

  &__required {
    &::before {
      content: '';
      position: absolute;
      top: 0;
      right: -4px;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background-color: $red;
    }
  }
}
</style>
