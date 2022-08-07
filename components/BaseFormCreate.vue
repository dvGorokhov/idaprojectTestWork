<template>
  <div class="form-create">
    <BaseInput
      v-model="formData.name"
      required-field
      placeholder="Введите наименование товара"
      label="Наименование товара"
    />

    <BaseTextarea
      v-model="formData.description"
      label="Описание товара"
      placeholder="Введите описание товара"
    />

    <BaseInput
      v-model="formData.imageUrl"
      placeholder="Введите ссылку"
      label="Ссылка на изображение товара"
      required-field
    />

    <BaseInput
      v-model="formData.price"
      placeholder="Введите цену"
      label="Цена товара"
      required-field
      is-number
    />

    <BaseButton
      class="form-create__button"
      :is-disabled="validForm"
      @click="sendForm"
      >Добавить товар</BaseButton
    >
  </div>
</template>

<script>
import BaseInput from '~/components/BaseInput.vue'
import BaseTextarea from '~/components/BaseTextarea.vue'
import BaseButton from '~/components/BaseButton.vue'
export default {
  components: {
    BaseInput,
    BaseTextarea,
    BaseButton
  },

  data() {
    return {
      formData: {
        id: null,
        name: '',
        description: '',
        imageUrl: '',
        price: ''
      }
    }
  },

  computed: {
    validForm() {
      const { name, imageUrl, price } = this.formData
      return [name, imageUrl, price].includes('')
    }
  },

  methods: {
    sendForm() {
      this.$emit('send', { ...this.formData, id: Date.now() })
      this.formData = {
        ...this.formData,
        id: null,
        name: '',
        description: '',
        imageUrl: '',
        price: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.form-create {
  width: 332px;
  min-width: 332px;
  height: 440px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  background: $white;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
    0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  box-sizing: border-box;

  &__button {
    margin-top: auto;
  }
}
</style>
