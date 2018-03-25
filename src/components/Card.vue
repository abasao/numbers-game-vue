<template>
  <div class="card" :class='cardClass' @click="triggerEvent" v-bind:id='cardId'>
      <div class="number">
          {{card.value}}
      </div>
  </div>
</template>

<script>
export default {
    props:{
    card: {
        type:Object,
        required:true
    },
    },
    data(){
        return {
            value() {
                return this.card.value
                },
            id() {
                return this.card.id
            },
            isVisible() {
                return this.card.isVisible
            },
            isEliminated() {
                return this.card.isEliminated
            },
        }
    },
    methods:{
        cardState(){
            return this.isVisible() ? 'shown' : 'hidden'
        },
        triggerEvent(){
            this.$emit('select', this.card)
        },
    },
    computed: {
        cardClass (){
            if (this.isEliminated()){ return 'eliminated'}
            return this.cardState()
        },
        cardId (){
            return 'card-'+this.id()
        }
    }
}
</script>