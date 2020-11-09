<template>
  <transition name="fade" mode="out-in" :duration="350">
    <img
      v-if="$colorMode.value === 'dark'"
      key="picture-dark"
      :class="imgClass"
      :src="srcDark"
      alt=""
    />
    <img v-else key="picture" :src="src" alt="" :class="imgClass" />
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
      return this.getSrc(this.darkPicture || this.picture)
    },
    src() {
      return this.getSrc(this.picture)
    }
  },

  methods: {
    getSrc(filename) {
      return require(`~/assets/images/${filename}`)
    }
  }
}
</script>
