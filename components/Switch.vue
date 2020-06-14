<template>
  <label class="switch">
    <input v-model="isDark" type="checkbox" />
    <span class="switch__slider"></span>
  </label>
</template>

<script>
export default {
  computed: {
    isDark: {
      get() {
        return this.$colorMode.value === 'dark'
      },
      set(value) {
        this.$colorMode.preference = value ? 'dark' : 'light'
      }
    }
  }
}
</script>

<style scoped lang="scss">
.switch {
  position: relative;
  display: inline-block;
  width: 42px;
  height: 23px;
  font-size: 0.87rem;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
}

.switch__slider {
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: 0.4s;
  border-radius: 12px;

  &:before {
    content: '';
    position: absolute;
    height: 19px;
    width: 19px;
    left: 2px;
    bottom: 1px;
    background-color: black;
    transition: 0.4s;
    border-radius: 50%;
  }
}

.light-mode {
  .switch__slider {
    border: 1px solid;
    &:hover {
      border-color: $primary;
      &:before {
        background-color: $primary;
      }
    }
    &:before {
      mask: url(~assets/icons/sun-solid.svg) center no-repeat;
    }
  }
}

.dark-mode {
  .switch__slider {
    background-color: $dark-color;

    &:before {
      background-color: $dark-color;
      mask: url(~assets/icons/moon-solid.svg) center no-repeat;
    }
  }
}

input:checked {
  + .switch__slider {
    background-color: $secondary;
    &:before {
      -webkit-transform: translateX(18px);
      -ms-transform: translateX(18px);
      transform: translateX(18px);
    }
  }
}
</style>
