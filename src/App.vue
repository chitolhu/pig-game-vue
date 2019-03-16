<template>
  <div id="app">
    <div class="container">
      <div class="columns">
        <player :data="getPlayers[0]"></player>
        <div class="dice column content">
           <p>
            <button @click="newGame()" class="button is-info is-medium">New Game</button>
          </p> 
          <p>
            <!-- Dice img change with diceValue number -->
            <img :src="require(`./assets/ou-dice-${diceValue}.png`)">
          </p>
          <p>
            <button :disabled="hasWinner" @click="throwDiceMutation()" class="button is-primary is-outlined is-medium">Throw dice</button>
            <button :disabled="hasWinner" @click="onHold()" class="button is-warning is-medium">Hold</button>
          </p>          
        </div>
        <player :data="getPlayers[1]"></player>
      </div>
    </div>
  </div>
</template>


<script>

import Player from './components/Player'
import { mapMutations } from 'vuex'
import { mapGetters } from 'vuex'

export default {
  name: 'app',
  components: {Player},
  data () {
    return {
      msg: 'Pig Game'
    }
  }, 
  methods: {
    ...mapMutations([
      'throwDiceMutation',
      'newGame',
      'onHold'
    ])
  },
  computed: {
    ...mapGetters([
      'diceValue',
      'getPlayers',
      'hasWinner'
    ])
  }
}
</script>

<style lang="scss">

@import './sass/main';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

.dice {
    img {
      max-width: 200px;
    }
  }
}

</style>