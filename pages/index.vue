<template>
  <div>
    <div class="container">
      <div class="left-side">
        <transition-image
          img-class="profile-picture"
          dark-picture="profile-dark.jpg"
          picture="profile.jpg"
        />

        <a href="http://www.codewars.com/r/sVkuzw" class="codewars-link">
          <transition name="fade">
            <img
              v-if="isDarkMode"
              src="https://www.codewars.com/users/flibustier/badges/micro"
            />
          </transition>
        </a>
      </div>

      <div>
        <h1>
          <strong>Jon</strong>athan Platteau –
          <em>Freelancer Software Engineer</em>
        </h1>
        <p>
          Engineer graduated from
          <a href="https://polytech.univ-lyon1.fr/">Polytech Lyon</a>, with
          skills in:
        </p>
        <p>
          - Web Fullstack
          <span class="tag">JS/TS (ES6+)</span>
          <span class="tag">Vue.JS</span>
          <span class="tag">Node.JS</span>
          <span class="tag high">Symfony/PHP</span>
        </p>
        <p>
          - Software & Backend
          <span class="tag mid">Go</span>
          <span class="tag low">Python</span>
          <span class="tag low">C/C++</span>
          <span class="tag unwanted">Java</span>
        </p>
        <p>
          - System & Dev/Ops
          <span class="tag">Linux</span>
          <span class="tag high">Docker</span>
          <span class="tag high">Terraform</span>
          <span class="tag high">AWS</span>
        </p>
        <p>
          - Security
          <span class="tag high">Blockchain</span>
          <span class="tag mid">Metasploit</span>
        </p>
        <!--p>
          In a good way: <span class="tag">Tensorflow</span>
          <span class="tag low">Rust</span>
        </p-->
        <p>
          Review my career in <a href="/curriculum">curriculum</a> section and
          my works in <a href="/projects">projects</a> section. Or you can
          <a href="mailto:contact@jonathan.pl">contact me</a> for a more formal
          version!
        </p>
        <p>
          You can also view my
          <a href="https://resume.github.io/?flibustier">GitHub Resume</a>
        </p>
      </div>
    </div>

    <footer></footer>
  </div>
</template>

<script>
import TransitionImage from '~/components/TransitionImage.vue'

export default {
  components: {
    TransitionImage,
  },

  computed: {
    isDarkMode() {
      return this.$colorMode.value === 'dark'
    },
  },
}
</script>

<style scoped lang="scss">
.profile-picture {
  display: inline-block;
  height: 200px;
  width: 200px;
  border-radius: 290486px;
  border: 1px solid;
}

.left-side {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 3rem;
}

.container {
  display: flex;
  align-items: center;
  max-width: 54rem;
  height: 90vh;
  margin: auto;
  padding: 0 1rem;
}

@media screen and (max-width: 600px) {
  .container {
    flex-direction: column;
    height: 100%;
    padding-top: 1rem;
  }
  .left-side {
    margin: auto;
  }
  h1 {
    text-align: center;
  }
  p {
    line-height: 1.5rem;
  }
  span {
    margin-bottom: 0.3rem;
  }
}

h1 {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

p {
  margin-bottom: 1rem;
}

.high {
  opacity: 0.85;
}

.mid {
  opacity: 0.7;
}

.low {
  opacity: 0.55;
}

.unwanted {
  opacity: 0.4;
}

.codewars-link {
  display: inline-block;
  width: 120px;
  height: 36px;
  padding-top: 1rem;
  margin-bottom: 1rem;
}
</style>
