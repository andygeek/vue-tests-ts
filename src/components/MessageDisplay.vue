<template>
  <p v-if="error" data-testid="message-error">{{ error }}</p>
  <p v-else data-testid="message">{{ message && message.text }}</p>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { getMessage } from '@/services/axios'

@Component({})
export default class MessageDisplay extends Vue {
  message: object = {}
  error: string | null = null

  async created() {
    try {
      this.message = await getMessage()
    } catch(err) {
      this.error = 'Un error!!'
    }
  }
}
</script>