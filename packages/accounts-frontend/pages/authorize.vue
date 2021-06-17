<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    return {
      msg: 'Authorize Page 1'
    }
  }
})
</script>

<template>
  <div>{{ msg }}</div>
</template>