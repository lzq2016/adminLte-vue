<template>
  <div id="app">
    <div class="wrapper">
      <va-navibar></va-navibar>
      <va-slider :slideMenuItems="slideMenuItems"></va-slider>
      <va-content-wrap></va-content-wrap>
      <Modal></Modal>
      <!-- <input v-validate="'required|email'" name="email" type="text" placeholder="Email">
        <button @click="check">dianji</button>
        <span v-show="errors.has('email')">{{ errors.first('email') }}</span> -->
  </div>
    </div>
  </div>
</template>

<script>
import VANaviBar from 'NaviBar.vue'
import VASlider from 'Slider.vue'
import VAContentWrap from 'ContentWrap.vue'
import Modal from './components/Modal.vue'
import store from './vuex/store.js'
import slideMenuItems from './lib/slideMenuItems.js'

// const dict = {
//   en: {
//     custom: {
//       email: {
//         required: 'Your email is empty11111' // messages can be strings as well.
//       },
//       name: {
//         required: () => 'Your name is empty22222'
//       }
//     }
//   }
// };

export default {
  name: 'app',
  data () {
    return {
      slideMenuItems: slideMenuItems
    }
  },
  created () {
  },
  // beforeMount() {
  //   this.$validator.updateDictionary(dict);
  // },
  components: {
    'va-navibar': VANaviBar,
    'va-slider': VASlider,
    'va-content-wrap': VAContentWrap,
    Modal
  },
  // methods:{
  //   check:function(){
  //     console.log(this.errors.all())
  //   }
  // },
  store
}
</script>

<style>

</style>
