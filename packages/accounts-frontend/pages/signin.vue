<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import AButton from '@/components/button/AButton.vue'

export default defineComponent({
  components: {
    AButton
  }
})
</script>

<template>
  <div>
    Sign In Page
    <a-button>Hello</a-button>
  </div>
</template>