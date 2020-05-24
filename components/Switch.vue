<template>
  <label class="switch">
    <input v-model="isDark" type="checkbox" />
    <span class="slider round"></span>
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

<style scoped>
.switch {
  position: relative;
  display: inline-block;
  width: 42px;
  height: 23px;
  font-size: 0.87rem;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 12px;
}

.light-mode .slider:hover {
  border-color: #c67b47;
}

.light-mode .slider {
  background-color: unset;
  border: 1px solid;
}

.slider:before {
  position: absolute;
  content: '';
  height: 19px;
  width: 19px;
  left: 2px;
  bottom: 1px;
  background-color: black;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 50%;
}

.light-mode .slider:hover:before {
  background-color: #c67b47;
}

.light-mode .slider:before {
  mask: url(~assets/icons/sun-solid.svg) center no-repeat;
}

.dark-mode .slider:before {
  background-color: #ccc;
  mask: url(~assets/icons/moon-solid.svg) center no-repeat;
}

input:checked + .slider {
  background-color: #8b9856;
}

input:checked + .slider:before {
  -webkit-transform: translateX(18px);
  -ms-transform: translateX(18px);
  transform: translateX(18px);
}
</style>
