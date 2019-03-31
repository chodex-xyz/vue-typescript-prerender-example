import Vue from 'vue'
// @ts-ignore
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'
import ru from 'vuetify/src/locale/ru'

Vue.use(Vuetify, {
  options: {
    customProperties: true
  },
  iconfont: 'fa',
  lang: {
    locales: { ru },
    current: 'ru'
  }
})
