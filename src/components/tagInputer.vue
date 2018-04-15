<template>
  <div class="w-tag-inputer-container flex-row" :style="{ 'font-size': `${fontSize}px` }">
    <div class="tag-span-container flex-row">
      <span v-for="(tag, index) in tag_list" :key="index">#{{ tag }}</span>
    </div>
    <div class="input-container flex-auto flex-row">
      <input type="text" v-model="input_tag_str" :placeholder="tag_list.length === 0 ? placeholder : ''" @keyup.enter="newTage" @keydown.delete="removeTagInList" :maxlength="maxLength">
    </div>
  </div>
</template>

<script>
export default {
  name: 'w-tag-inputer',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: {
      type: Array
    },
    fontSize: {
      type: Number,
      default: () => 14
    },
    placeholder: {
      type: String,
      default: () => ''
    },
    max: {
      type: Number,
      default: () => 5
    },
    maxLength: {
      type: Number,
      default: () => 20
    }
  },
  data () {
    return {
      tag_list: [],
      input_tag_str: ''
    }
  },
  methods: {
    tagMaxEvent () {
      this.$emit('max-tags')
    },
    tagListChangeEvent () {
      this.$emit('change', this.tag_list)
    },
    newTage () {
      if ( this.tag_list.length === this.max && this.max !== 0) {
        this.tagMaxEvent()
        return false
      }
      if (this.input_tag_str.length === 0) return false
      let tag_str
      if (this.input_tag_str.startsWith('#')) tag_str = this.input_tag_str.slice(1, this.input_tag_str.length)
      else tag_str = this.input_tag_str
      if (this.tag_list.indexOf(tag_str) === -1) {
        this.tag_list.push(tag_str)
        this.tagListChangeEvent()
      }
      this.input_tag_str = ''
    },
    removeTagInList () {
      if (this.input_tag_str !== '') return false
      this.tag_list.pop()
      this.tagListChangeEvent()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/public.scss';
.w-tag-inputer-container{
  width: 100%;
  margin: 5px 0px;
}
.tag-span-container {
  align-items: baseline;
  span {
    color: $lastFont;
    margin: {
      left: 5px;
      right: 5px;
    }
  }
}
.input-container {
  transition: all .3s;
  input {
    width: 100%;
    border: none;
    &:focus {
      outline: none;
    }
  }
}
</style>
 