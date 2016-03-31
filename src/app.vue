
<template>

  <div class="boxy" v-click-outside="hasClickedOutsideBoxy">
    <h2>{{ clickedOutsideBoxy ? "You've Just Clicked Outside Me" : "Boxy" }}</h2>
  </div>

  <div class="delayed" v-if="showingDelayedComponent" v-click-outside:delay="hasClickedOutsideDelayedComponent">
    <h2>{{ clickedOutsideDelayedComponent ? "You've Just Clicked Outside Me" : "I'm Delayed" }}</h2>
  </div>

  <br/>

  <button @click="showDelayedComponent">Show Delayed Component</button>
  <button @click="refresh">Refresh</button>

</template>

<script>

  export default {

    replace: false,

    data(){
      return{
        showingDelayedComponent: false,
        clickedOutsideBoxy: false,
        clickedOutsideDelayedComponent: false,
      }
    },

    methods: {
      hasClickedOutsideBoxy(){
        this.clickedOutsideBoxy = true
      },

      hasClickedOutsideDelayedComponent(){
        this.clickedOutsideDelayedComponent = true
      },

      showDelayedComponent(){
        this.showingDelayedComponent = true
      },

      refresh(){
        window.location.reload()
      }
    }

  };

</script>
