# vue-wishper-tag-inputer

> A vue.js tag inputer components

This is a tags inputer components in vue.js

If you want to use this componets in your project and meet some problem, you can go to the project github and wirte a issues.

## Installtion

use npm to install this package

```bash
$ npm i vue-wishper-tag-inputer -S
```

download in github

```bash
$ git clone https://github.com/JefferyLiang/vue-wishper-tag-inputer.git vue-wishper-tag-inputer
```

## Usage

require the package in your vue project

```javascript
// base
const Vue = require('vue')
const TagInputer = require('vue-wishper-tag-inputer')

// es6
import Vue from 'vue'
import TagInputer from 'vue-wishper-tag-inputer'

Vue.use(TagInputer)
```

use in vue component

```html
<template>
  ...
    <w-tag-inputer v-model="tag_list"></w-tag-inputer>
  ...
</template>

<script>
export default {
  data () {
    return {
      tag_list: []
    }
  }
}
</script>
```

## Configuration

Set the tag string max length

```html
<w-tag-inputer :max-length="10"></w-tag-inputer>
<!-- now the single inputer str max length is 10, default: 20 -->
```

Set the list max length
```html
<w-tag-inputer :max="3"><w-tag-inputer>
<!-- now the tag list max length is 3, default: 5 -->
```

Set the font size
```html
<w-tag-inputer :font-size="20"></w-tag-inputer>
<!-- now the inputer font size is 20px, default: 14px -->
```

Set the inputer placeholder
```html
<w-tag-inputer :placeholder="'#标签'"></w-tag-inputer>
<!-- now the input placeholder is '#标签' -->
```

## Event

Get the tag list lengt is max event
```html
<w-tag-inputer @max-tags="..."></w-tag-inputer>
```