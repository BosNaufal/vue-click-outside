/*! Copyright (c) 2016 Naufal Rabbani (http://github.com/BosNaufal)
* Licensed Under MIT (http://opensource.org/licenses/MIT)
*
* Vue Click Outside - Version@1.0.0
*
*/

(function(){

  // Directive for outside click detections
  var VueClickOutSide = {

    time: 0, // need a delay when it come together with 'v-if'

    bind(){
      var me = this

      // make a event handler for click event
      this.evt = (e) => {

        // Is the target child of the component?
        var itsChildren = me.el.contains(e.target)

        // Delay to let Vue evaluate v-if directive
        if(me.arg == 'delay'){
          me.time++
          if(me.time > 1){ // if 'v-if' has been evaulated

            // then check the current click target element
            // if same with directive element,
            // call function from vm which is has a same name with the directive expression
            if(e.target != me.el && !itsChildren) me.vm.$eval(me.expression)()

          }
        }
        // When there is no delay, usually not followed by v-if, v-show, v-cloak directive
        else{
          if(e.target != me.el && !itsChildren) me.vm.$eval(me.expression)();
        }
      }
      // Attach Event Listener to body
      document.body.addEventListener('click',this.evt, false);
    },

    unbind(){
      // Remove Event Listener from body
      document.body.removeEventListener('click',this.evt, false);
    }
  };

  // If support node / ES6 module
  if( typeof module === 'object' && module.exports ){
    module.exports = VueClickOutSide;
  }
   // if using require js
  else if (typeof define === 'function' && define.amd) {
    define( function () { return VueClickOutSide });
  }
  // if script loaded by script tag in HTML file
  else if (typeof window !== undefined) {
    return Vue.directive('click-outside', VueClickOutSide);
  }

})();
