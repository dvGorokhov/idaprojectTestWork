<template>
  <div class="textarea-item">
    <label>{{ label }}</label>
    <textarea
      :value="value"
      :placeholder="placeholder"
      @input="(e) => $emit('input', e.target.value)"
    ></textarea>
  </div>
</template>

<script>
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
    }
  }
}
</script>

<style lang="scss" scoped>
.textarea-item {
  position: relative;
  width: 100%;
  max-width: 100%;
  display: flex;
  display: flex;
  flex-direction: column;
  gap: 4px;
  background: transparent;

  textarea {
    width: 100%;
    height: 108px;
    padding: 10px 16px;
    color: $grey;
    background: $white;
    border: 1px solid transparent;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    outline: none;
    box-sizing: border-box;
		transition: all 0.3s;
		resize: none;
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
}
</style>
