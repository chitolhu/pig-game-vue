<template>
    <div class="column">
        <div :class="{ active: data.isActive, card: true }">
            <header class="card-header">
                <p class="card-header-title title">
                {{ data.playerName }}
                </p>
            </header>
            <div class="card-content">
                <div class="content">
                    <h1>{{ data.globalScore }}</h1>
                    <p>Global Score</p>
                </div>
                <div class="content">
                    <h1>{{ data.roundScore }}</h1>
                    <p>Round Score</p>
                </div>
            </div>
            <div v-if="data.isWinner" class="card-footer">
                <h1 class="card-footer-item winner-label">🎊Winner🎊</h1>
            </div>
        </div>
    </div>       
</template>

<script>
export default {
  name: 'app',
    props: {
    data: {
      type: Object,
      required: true
    } 
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      number: 1
    }
  }
}
</script>

<style lang="scss">

.title {
    justify-content: center;
}

.winner {
    &-label {
        color: red;
        font-size: 40px;    
    }
}

.card {
    &.active {
        border: 2px solid hsl(171, 100%, 41%);
        box-shadow: 0 5px 5px hsl(171, 100%, 41%);
    }
}

</style>
