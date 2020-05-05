<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BaseButton',
  props: {
    text: {
      type: String,
      default: ''
    }
  }
})
</script>

<template>
  <button>{{ text }}</button>
</template>
