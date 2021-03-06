import Vue from 'vue'
import Router from 'vue-router'
// import Hello from 'components/Hello.vue'
// import Sample from 'components/Sample.vue'
// import DashboardV1 from 'examples/Dashboard.v1.vue'
// import DashboardV2 from 'examples/Dashboard.v2.vue'
// import InfoBoxExample from 'examples/InfoBoxExample'
// import ChartExample from 'examples/ChartExample'
// import AlertExample from 'examples/AlertExample'
// import ModalExample from 'examples/ModalExample'
// import WidgetsExample from 'examples/WidgetsExample'
// import APIExample from 'examples/APIExample'

// UI Element Groups
// import General from 'pages/ui-elements/General.vue'
// import Icons from 'pages/ui-elements/Icons.vue'
// import Buttons from 'pages/ui-elements/Buttons.vue'
// import Sliders from 'pages/ui-elements/Sliders.vue'
// import Timeline from 'pages/ui-elements/Timeline.vue'
// import Modals from 'pages/ui-elements/Modals.vue'

// forms
import GeneralElements from 'pages/forms/GeneralElements.vue'
import AdvancedElements from 'pages/forms/AdvancedElements.vue'
import AdvancedElements1 from 'pages/forms/AdvancedElements1.vue'
import AdvancedElements2 from 'pages/forms/AdvancedElements2.vue'
import AdvancedElements3 from 'pages/forms/AdvancedElements3.vue'
import AdvancedElements4 from 'pages/forms/AdvancedElements4.vue'
import AdvancedElements5 from 'pages/forms/AdvancedElements5.vue'
import AdvancedElements6 from 'pages/forms/AdvancedElements6.vue'
import AdvancedElements7 from 'pages/forms/AdvancedElements7.vue'
import AdvancedElements8 from 'pages/forms/AdvancedElements8.vue'
import AdvancedElements9 from 'pages/forms/AdvancedElements9.vue'
import AdvancedElements10 from 'pages/forms/AdvancedElements10.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/forms/general-elements',
      name: 'GeneralElements',
      component: GeneralElements
    },
    {
      path: '/forms/advanced-elements',
      name: 'AdvancedElements',
      component: AdvancedElements
    },
    {
      path: '/forms/advanced-elements1',
      name: 'AdvancedElements1',
      component: AdvancedElements1
    },
    {
      path: '/forms/advanced-elements2',
      name: 'AdvancedElements2',
      component: AdvancedElements2
    },
    {
      path: '/forms/advanced-elements3',
      name: 'AdvancedElements3',
      component: AdvancedElements3
    },
    {
      path: '/forms/advanced-elements4',
      name: 'AdvancedElements4',
      component: AdvancedElements4
    },
    {
      path: '/forms/advanced-elements5',
      name: 'AdvancedElements5',
      component: AdvancedElements5
    },{
      path: '/forms/advanced-elements6',
      name: 'AdvancedElements6',
      component: AdvancedElements6
    },{
      path: '/forms/advanced-elements7',
      name: 'AdvancedElements7',
      component: AdvancedElements7
    },{
      path: '/forms/advanced-elements8',
      name: 'AdvancedElements8',
      component: AdvancedElements8
    },{
      path: '/forms/advanced-elements9',
      name: 'AdvancedElements9',
      component: AdvancedElements9
    },{
      path: '/forms/advanced-elements10',
      name: 'AdvancedElements10',
      component: AdvancedElements10
    }
  ],
  linkActiveClass: 'active'
})
