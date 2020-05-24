<template>
  <div :style="heroStyle">
    <div class="title-wrapper">
      <h1>{{ title }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: () => ''
    },
    picture: {
      type: String,
      default: () => undefined
    },
    pictureCoordonates: {
      type: String,
      default: () => '50% 50%'
    },
    darkPicture: {
      type: String,
      default: () => undefined
    },
    darkCoordonates: {
      type: String,
      default: () => '50% 50%'
    }
  },
  computed: {
    isDarkMode() {
      return this.$colorMode.value === 'dark'
    },
    backgroundURL() {
      if (this.isDarkMode) {
        return this.darkPicture
          ? require(`@/assets/images/${this.darkPicture}`)
          : ''
      }
      return this.picture ? require(`@/assets/images/${this.picture}`) : ''
    },

    coordonates() {
      return this.isDarkMode ? this.darkCoordonates : this.pictureCoordonates
    },

    heroStyle() {
      return `background: rgb(17, 17, 17) ${
        this.backgroundURL ? `url(${this.backgroundURL})` : ''
      } no-repeat scroll ${this.coordonates} / cover`
    }
  }
}
</script>

<style scoped>
.title-wrapper {
  padding: 23vh 0;
  text-align: center;
  background: linear-gradient(
    180deg,
    rgba(147, 105, 17, 0.1),
    rgba(208, 166, 72, 0.1)
  );
}
</style>
