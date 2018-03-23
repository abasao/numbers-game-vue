<template>
  <div class="card" :class='cardClass' @click="toggleShow" v-bind:id='cardId'>
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
            cardState: 'hidden',
            value: this.card.value,
            id: this.card.id,
            //isEliminated: this.card.isEliminated
            //cardId: 'card-' + this.card.id
        }
    },
    methods:{
        toggleShow(){
            // console.log('this value: ' + this.value);
            // console.log('this id: ' + this.id);
            console.log('inside the Card toggleShow');
            console.log(this.card);
            if(this.card.isGone()){
                this.cardState = 'hidden'//'gone'
            }else if (this.cardState === 'hidden'){
                this.cardState = 'shown'
            }else{
                this.cardState = 'hidden'
            }
            this.$emit('selected', this.card)
        },
    },
    computed: {
        cardClass (){
            return this.cardState
        },
        cardId (){
            return 'card-'+this.id
        }
    }
}
</script>