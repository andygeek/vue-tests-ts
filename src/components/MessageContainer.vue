<template>
  <MessageDisplay />
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import MessageDisplay from '@/components/MessageDisplay.vue'

@Component({
  components: {
    MessageDisplay
  }
})
export default class MessageContainer extends Vue {
  
}
</script>