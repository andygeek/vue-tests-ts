<template>
  <div>
    <button v-show="loggedIn"></button>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

@Component({})
export default class AppHeader extends Vue {
  loggedIn : boolean = false
}
</script>