<template>
  <transition name="fade" mode="out-in" :duration="350">
    <img
      v-if="$colorMode.value === 'dark'"
      key="picture-dark"
      :class="imgClass"
      :src="srcDark"
      alt=""
    />
    <img v-else key="picture" :class="imgClass" :src="src" alt="" />
  </transition>
</template>

<script>
export default {
  props: {
    picture: {
      type: String,
      required: true
    },
    darkPicture: {
      type: String,
      default: () => ''
    },
    imgClass: {
      type: String,
      default: () => ''
    }
  },

  computed: {
    srcDark() {
      return require(`~/assets/images/${this.darkPicture || this.picture}`)
    },
    src() {
      return require(`~/assets/images/${this.picture}`)
    }
  }
}
</script>
