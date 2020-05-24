<template>
  <transition name="fade" mode="out-in" :duration="350">
    <img
      v-if="$colorMode.value === 'dark'"
      key="picture-dark"
      :class="imgClass"
      :src="srcDark"
      alt="Profile Picture"
    />
    <img
      v-else
      key="picture"
      :class="imgClass"
      :src="src"
      alt="Profile Picture"
    />
  </transition>
</template>

<script>
export default {
  props: {
    picture: String,
    darkPicture: String,
    imgClass: {
      type: String,
      default: () => ''
    }
  },

  computed: {
    srcDark() {
      return require(`~/assets/images/${this.darkPicture}`)
    },
    src() {
      return require(`~/assets/images/${this.picture}`)
    }
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.7s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
