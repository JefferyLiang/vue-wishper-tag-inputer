import TagInputer from '../components/tagInputer'

const tagInputer = {
  install (Vue, options) {
    Vue.component(TagInputer.name, TagInputer)
  }
}

export default tagInputer