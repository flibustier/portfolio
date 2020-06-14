<template>
  <header>
    <nav class="nav-bar">
      <div class="nav-block nav-left">
        <n-link to="/">home</n-link>
        <n-link to="/curriculum">Curriculum</n-link>
        <n-link to="/projects">Projects</n-link>
      </div>
      <div class="nav-block nav-right">
        <a class="icon icon-gh" href="https://github.com/flibustier" />
        <a class="icon icon-li" href="https://linkedin.com/in/jplatteau/" />
        <a href="https://www.malt.fr/profile/jonathanplatteau">
          <malt-logo class="icon" />
        </a>
        <a class="icon icon-mail" href="mailto:contact@jonathan.pl" />
        <switch-mode style="margin-right: 1.3rem" />
      </div>
    </nav>
  </header>
</template>

<script>
import MaltLogo from './MaltLogo'
import SwitchMode from './Switch'

export default {
  components: {
    MaltLogo,
    SwitchMode
  }
}
</script>

<style scoped lang="scss">
header {
  position: relative;
  left: 0;
  right: 0;
  border-bottom: 1px solid;
  background-color: white;
  transition: background $transition-speed;
}

.nav-bar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 61rem;
  margin: 0 auto;
  padding: 0 1rem;
  line-height: 3rem;

  a {
    display: flex;
    align-items: center;
    padding: 0 0.5rem;
    color: inherit;
    text-decoration: none;
    text-transform: uppercase;

    transition: border 0.4s;
    border-bottom: 1px solid transparent;
  }
}

@media screen and (max-width: 600px) {
  .nav-bar {
    flex-direction: column-reverse;
    line-height: 2rem;
  }
  .nav-right {
    margin: 1rem 0;
  }
}

.nav-block {
  display: flex;
  flex-direction: row;
}

.nav-left {
  .nuxt-link-exact-active,
  a:hover {
    border-bottom-color: black;
  }
}

.icon {
  margin-right: 1.3rem;
}

.dark-mode {
  header {
    background-color: $dark-background;
  }

  .nav-left {
    a:hover {
      border-bottom-color: #fbfcfc;
    }
  }
}
</style>
