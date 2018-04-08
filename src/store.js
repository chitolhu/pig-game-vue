import Vue from 'vue'
import Vuex from 'vuex'
// Player conf hava an array with two players initial configuration. 
import { playerConf } from './playerConf'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    safelyStoredNumber: 0,
    diceValue: 1,
    players : playerConf,
    hasWinner: false,
    TOP_POINTS: 100,
  },
  getters: {
    // Main getters that return dice value, 
    // players array and hasWinner label
    diceValue: state => state.diceValue,
    getPlayers: state => state.players,
    hasWinner: state => state.hasWinner
  },

  mutations: {
    // On Throw dice button clicked
    throwDiceMutation: state => {
      state.diceValue = Math.floor(Math.random() * 6) + 1
      if (state.diceValue !== 1) {
        state.players = state.players.map(player => {
          if (player.isActive) {
            return {
              ...player,
              roundScore: player.roundScore + state.diceValue
            }
          }
          return player
        });
  
      } else {
        store.commit('nextPlayer')
      }
    },
    // On hold button clicked
    onHold: state => {
      
      state.players = state.players.map(player => {
        if (player.isActive) {
          return {
            ...player,
            globalScore: player.globalScore + player.roundScore,
            roundScore: 0,
            isWinner: (player.globalScore + player.roundScore >= state.TOP_POINTS)
          }
        }
        return player
      })
      state.hasWinner = state.players.find(player => player.globalScore >= state.TOP_POINTS);
      if (!state.hasWinner) store.commit('nextPlayer')
    },
    // On new game button clicked
    newGame: state => { 
      state.players = playerConf
      state.diceValue = 1
    },
    // Change player active status 
    nextPlayer: state => {
      state.players = state.players.map(player => {
        if (player.isActive) {
          return {
            ...player,
            roundScore: 0,
            isActive: !player.isActive
          }
        }else{
          return {
            ...player,
            roundScore: 0,
            isActive: !player.isActive
          }
        }
      });
    }
  }

});
