<template>
  <header>
    <nav class="nav-bar">
      <div class="nav-block nav-left">
        <a href="/">home</a>
        <a href="/curriculum">Curriculum</a>
        <a href="/projects">Projects</a>
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

<style scoped>
header {
  position: relative;
  left: 0;
  right: 0;
  border-bottom: 1px solid;
  background-color: white;
  transition: background 0.7s;
}

.dark-mode header {
  background-color: #222428;
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

.nav-bar a {
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
  color: inherit;
  text-decoration: none;
  text-transform: uppercase;

  transition: border 0.4s;
  border-bottom: 1px solid transparent;
}

.nav-left a:hover {
  border-bottom-color: black;
}

.dark-mode .nav-left a:hover {
  border-bottom-color: #fbfcfc;
}

.icon {
  margin-right: 1.3rem;
  width: 1.3rem;
  height: 1.3rem;
  background: black;
  transition: background 0.3s ease;
}

.dark-mode .icon {
  background: #ccc;
  fill: #ccc;
}

.icon:hover {
  background-color: #c67b47;
}

.icon-gh {
  mask: url(~assets/icons/github-brands.svg) center no-repeat;
}

.icon-li {
  mask: url(~assets/icons/linkedin-in-brands.svg) center no-repeat;
}

.icon-mail {
  mask: url(~assets/icons/envelope-open-text-light.svg) center no-repeat;
}

.dark-mode .icon-mail {
  mask: url(~assets/icons/envelope-solid.svg) center no-repeat;
}
</style>
