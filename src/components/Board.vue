<template>
  <div> 
    <div v-for="(cardCol, index) in board.cards" :key="index">
      <div v-for="card in cardCol" :key="card.id">
        <Card :card='card' @select='selectHandler'/>
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
    selectHandler(payload){
        this.board.select(payload)
    },
  },
}
</script>

