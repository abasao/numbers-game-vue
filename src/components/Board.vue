<template>
  <div :style="setStyle()"> 
    <div v-for="(cardCol, index) in board.cards" :key="index">
      <div v-for="card in cardCol" :key="card.id">
        <Card :card='card' @selected='logger'/>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "./Card";
import {Board} from '../board'
export default {
  name: 'Board',
  props: {
  },
  components: {
    Card
  },
  mounted: function(){
  this.board = new Board(5);
  console.log('#created success')
  },
  data () {
    return {
      board: Object,
    }
  },
  methods: {
    logger(payload){
        this.board.select(payload)
    },
    setStyle(){

      return `gridTemplate: repeat(${5}, ${50}px) / repeat(${5}, ${50}px)`
    },
  },
  created () {
    // elements have been created, so the `ref` will return an element.
    // but the elements have not necessarily been inserted into the DOM yet.
    // you can use $nextTick() to wait for that to have happened.
    // this is espeically necessary if you want to to get dimensions or position of that element.
  }
}
</script>

