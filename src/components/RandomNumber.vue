<template>
  <div>
    <span>{{ randomNumber }}</span>
    <button @click="getRandomNumber">Generate random number</button>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({})
export default class RandomNumber extends Vue {
  @Prop({ type: Number, default: 1}) min !: number
  @Prop({ type: Number, default: 10}) max !: number

  randomNumber : number = 0

  getRandomNumber() {
    this.randomNumber = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min 
  }

}
</script>