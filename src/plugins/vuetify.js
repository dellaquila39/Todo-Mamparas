import Vue from 'vue'
import Vuetify from 'vuetify/lib' 


import {
  VApp,
  VAppBar,
  VAvatar,
  VBtn,
  VCard,
  VCardText,
  VCardTitle,
  VCol,
  VContainer,
  VDialog,
  VDivider,
  VFadeTransition,
  VFooter,
  VForm,
  VHover,
  VIcon,
  VImg,
  VList,
  VListItem,
  VListItemContent,
  VListItemIcon,
  VListItemSubtitle,
  VListItemTitle,
  VMain,
  VMenu,
  VRow,
  VSpacer,
  VTextarea,
  VTextField,
  VToolbar,
  VToolbarItems,
  VToolbarTitle,
  VTooltip,
} from 'vuetify/lib'


import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify, {
  components: {
    VApp,
    VAppBar,
    VAvatar,
    VBtn,
    VCard,
    VCardText,
    VCardTitle,
    VCol,
    VContainer,
    VDialog,
    VDivider,
    VFadeTransition,
    VFooter,
    VForm,
    VHover,
    VIcon,
    VImg,
    VList,
    VListItem,
    VListItemContent,
    VListItemIcon,
    VListItemSubtitle,
    VListItemTitle,
    VMain,
    VMenu,
    VRow,
    VSpacer,
    VTextarea,
    VTextField,
    VToolbar,
    VToolbarItems,
    VToolbarTitle,
    VTooltip,
  },
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    themes: {
      light: {
        primary: '#1976D2',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
      },
    },
  },
})

export default new Vuetify({})