import 'element-plus/packages/theme-chalk/src/base.scss'
import lang from 'element-plus/lib/locale/lang/zh-cn'
import 'dayjs/locale/zh-cn'
import {
  locale,
  ElContainer,
  ElMain,
  ElHeader,
  ElFooter,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElSubmenu,
  ElButton,
  ElInput,
  ElTable,
  ElTableColumn,
  ElLoading,
  ElDialog,
  ElForm,
  ElFormItem,
  ElSelect,
  ElOption,
  ElPagination,
  ElLink,
  ElImage,
  ElSwitch,
  ElRadioGroup,
  ElRadio,
  ElUpload,
  ElSpace,
  ElPopconfirm,
  ElPopper,
  ElDatePicker,
  ElRadioButton,
  ElRow,
  ElCol,
} from 'element-plus'

const components = [
  ElContainer,
  ElMain,
  ElHeader,
  ElFooter,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElSubmenu,
  ElButton,
  ElInput,
  ElTable,
  ElTableColumn,
  ElDialog,
  ElForm,
  ElFormItem,
  ElSelect,
  ElOption,
  ElPagination,
  ElLink,
  ElImage,
  ElSwitch,
  ElRadioGroup,
  ElRadio,
  ElUpload,
  ElSpace,
  ElPopconfirm,
  ElPopper,
  ElDatePicker,
  ElRadioButton,
  ElRow,
  ElCol,
]

const plugins = [
  ElLoading
]

import.meta.env.DEV ? locale(lang) : locale.use(lang)

export default {
  install(app) {
    components.forEach(c => app.component(c.name, c))
    plugins.forEach(p => app.use(p))
    app.config.globalProperties.$ELEMENT = { size: 'small' }
  }
}