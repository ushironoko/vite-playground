<script lang="ts">
import { defineComponent } from 'vue'
import BaseButton from '@vite-playground/components/components/BaseButton.vue'

export default defineComponent({
  components: {
    BaseButton
  },
  setup() {
    return {
      count: 0
    }
  },
})
</script>

<template>
  <div>
    <h1>Hello Vite + Vue 3!</h1>
    <p>Edit ./App.vue to test hot module replacement (HMR).</p>
    <p>
      <span>Count is: {{ count }}</span>
      <BaseButton
        text="increment"
        @click="count++"
      />
    </p>
  </div>
</template>
