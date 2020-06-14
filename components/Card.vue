<template>
  <div class="card">
    <div class="card__content">
      <h4 class="card__title">{{ title }}</h4>
      <transition-image v-if="img" class="card__logo" :picture="img" />
      <slot name="text" class="card__text"></slot>
      <footer>
        <slot name="footer" />
      </footer>
    </div>
  </div>
</template>

<script>
import TransitionImage from './TransitionImage'

export default {
  components: {
    TransitionImage
  },
  props: {
    title: {
      type: String,
      required: true
    },
    img: {
      type: String,
      default: () => ''
    }
  }
}
</script>

<style scoped lang="scss">
.card {
  max-width: 100%;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  border-radius: 20px;
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
  flex: none;
  width: 45%;
  margin: 0.75rem;
  border: 1px solid transparent;
  transition: border $transition-speed;
}

.dark-mode .card {
  border-color: $dark-color;
}

@media screen and (max-width: 40rem) {
  .card {
    width: 95%;
  }
}

.card__title {
  text-transform: uppercase;
  font-weight: normal;
  text-align: center;
  margin-bottom: 1rem;
}

.card__content {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex: 1;
}

.card__logo {
  width: 10rem;
  margin-bottom: 2rem;
  border-radius: 50%;
}

p {
  text-align: justify;
  font-size: 0.9rem;
  line-height: 1.3rem;
}

footer {
  display: flex;
  margin-top: 1rem;
  width: 100%;
  justify-content: space-evenly;
}
</style>
