# Vue Click Outside
[Vue](http://vuejs.org) Directive to make a click outside event, inspired by [vue-clickaway](https://github.com/simplesmiler/vue-clickaway)

[DEMO](https://rawgit.com/BosNaufal/vue-click-outside/master/index.html)

## Install
Include the [vue-click-outside.js](./src/vue-click-outside.js) to your HTML or web page file after [Vue.Js](http://vuejs.org). or import it to your Javscript / Vue File.


## Usage
```html
<template>
  <div v-click-outside="clickedOutside"></div>

  <!-- You Need Delay, if you're using it together with v-if directive -->
  <div v-if="something" v-click-outside:delay="clickedOutside"></div>
</template>

<script>

  export default {

    methods: {
      hasClickedOutside(){
        alert('Clicked OutSide!')
      },
    }

  };

</script>
```

## Thank You for Making this useful~
Hopefully this can be useful for your next projects.


## Let's talk about some projects with me
Just Contact Me At:
- Email: [bosnaufalemail@gmail.com](mailto:bosnaufalemail@gmail.com)
- Skype Id: bosnaufal254
- twitter: [@BosNaufal](https://twitter.com/BosNaufal)

## License
[MIT](http://opensource.org/licenses/MIT)
Copyright (c) 2016 - forever Naufal Rabbani
