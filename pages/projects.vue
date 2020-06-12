<template>
  <div>
    <hero v-if="false" title="projects" picture="calatrava-2.jpg" />

    <div class="container">
      <nav>
        <a
          v-for="(section, index) in [
            'All',
            'Open Source',
            'Contributions',
            'Hackathon',
            'Commercial'
          ]"
          :key="index"
          :class="{ 'is-active': display[index] }"
          @click="set(index)"
          >{{ section }}</a
        >
      </nav>

      <transition-group name="sections" tag="div">
        <section v-if="display[1] || display[0]" key="1">
          <h3>Open Source</h3>

          <div class="cards">
            <card title="Collector (2020)" img="collector.svg">
              <template v-slot:text>
                <p>
                  Manage your 2€ commemoratives coins collections<br />
                  Easy, free and open source<br />
                  Built with <strong>Vue.JS</strong>, no backend, serverless<br />
                  Data are exclussively client side
                </p>
              </template>
              <template v-slot:footer>
                <a href="/collector" class="icon icon-play" />
                <a
                  href="https://github.com/flibustier/collector"
                  class="icon icon-gh"
                />
              </template>
            </card>

            <card title="E-Coin (2018)" img="ecoin-dark.png">
              <template v-slot:text>
                <p>
                  E-Coin is a corporate currency, using private blockchain
                  (<strong>Multichain</strong>), Go backend and Vue.JS
                  frontend.<br />
                  It serves as a demo of a blockchain application and can be
                  used to create a digital asset rewarding system for your
                  employees.
                </p>
              </template>
              <template v-slot:footer>
                <a href="/e-coin" class="icon icon-el" disabled />

                <a
                  class="icon icon-gh"
                  href="https://github.com/flibustier/e-coin"
                />
              </template>
            </card>
            <card title="jonathan.pl (2020 upgrade)">
              <template v-slot:text>
                <p>
                  Homemade SCSS, built using
                  <a href="https://nuxtjs.org/">Nuxt.JS</a> and Vue.JS<br />
                </p>
              </template>
              <template v-slot:footer>
                <a
                  class="icon icon-gh"
                  href="https://github.com/flibustier/flibustier.github.io/"
                />
              </template>
            </card>
          </div>
        </section>

        <section v-if="display[2] || display[0]" key="2">
          <h3>Contributions</h3>

          <div class="cards">
            <card title="Metasploit Framework (2017)" img="metasploit.png">
              <template v-slot:text>
                <p>
                  3 pull requests on
                  <a href="https://www.metasploit.com/">Metasploit Framework</a
                  >, the world’s most used penetration testing framework, which
                  is in Ruby:
                </p>
                <a
                  href="https://github.com/rapid7/metasploit-framework/pull/8100/"
                  >- Improvement and bug fixes of the web crawler module
                  (Msfcrawler)</a
                >
                <a
                  href="https://github.com/rapid7/metasploit-framework/pull/8104/"
                  >- Improvement of the web module for testing website, with a
                  reproduction of tree function from Linux</a
                >
                <a
                  href="https://github.com/rapid7/metasploit-framework/pull/8774/"
                  >- Creation of a new module for gathering docker
                  credentials</a
                >
              </template>
            </card>

            <card title="ZeroNet + ZAP (2017)" img="alpine.png">
              <template v-slot:text>
                <p>
                  <a href="https://github.com/HelloZeroNet/ZeroNet/pull/1028"
                    >Revamped Dockerfile of ZeroNet</a
                  >, reducing its size from 421 MB to 77 MB (using
                  <a href="https://alpinelinux.org/">Alpine Linux</a>). ZeroNet
                  is a decentralized internet using Bitcoin crypto and
                  BitTorrent network
                </p>
                <p style="margin-top: 1rem">
                  <a href="https://github.com/zaproxy/zaproxy/pull/3770"
                    >Cleared dockerfiles of OWASP Zed Attack Proxy (ZAP)</a
                  >, which is one of the world’s most popular free security
                  tools and is actively maintained by hundreds of international
                  volunteers.
                </p>
              </template>
            </card>

            <card title="Chaos the bot (2017)">
              <template v-slot:text>
                <p>
                  I participated in
                  <a href="https://github.com/Chaosthebot/">Chaos the bot</a>,
                  which is a social coding experiment that updates its own code
                  democratically, in Python.<br />
                  I have
                  <a
                    href="https://github.com/Chaosthebot/Chaos/commits?author=flibustier"
                    >several pull requests</a
                  >
                  <br />
                  The main one is
                  <a href="https://github.com/Chaosthebot/Chaos/pull/309"
                    >the creation of dynamic voting window</a
                  >
                </p>
              </template>
            </card>
          </div>
        </section>

        <section v-if="display[3] || display[0]" key="3">
          <h3>Hackathon</h3>

          <div class="cards">
            <card title="EU Blockathon EUIPO (2018)">
              <template v-slot:text>
                <p>
                  <strong>Runner-up prize</strong> for the customs authority
                  challenge.<br />
                  TrustTrack project is designed to support customs and applies,
                  at manufacturer level, a unique QR code of a near-field
                  communication (NFC) chip and a temper-evident seal.<br />
                  When the seal is intact, the product can be easily handled and
                  fast tracked by customs in order to improve efficiency and
                  effectiveness of the resources.<br />
                  The system can be integrated with various existing
                  infrastructures and blockchains.
                </p>
              </template>
            </card>

            <card title="Solutec Hackathon (2016)" img="dreamhacker.png">
              <template v-slot:text>
                <p>
                  <strong>First place</strong> at the Solutec's Hackathon<br />
                </p>
                <p>Unity - Graph Database - PHP - Network</p>
              </template>
              <template v-slot:footer>
                <button href="https://dreamhacker.jonathan.pl">
                  View Presentation
                </button>
              </template>
            </card>
          </div>
        </section>

        <section v-if="display[4] || display[0]" key="4">
          <h3>Commercial</h3>

          <div class="cards">
            <card title="SkillMatrix (since 2016)" img="skillmatrix-alt.png">
              <template v-slot:text>
                <p>
                  HR application for managing consultants
                </p>
                <p>Vue.JS - Symfony 4 - PHP 7.2 - Linux - Git</p>
              </template>
            </card>
            <card title="VeMaSys (2015)" img="vemasys.png">
              <template v-slot:text>
                <p>
                  My participation in this project was about Symfony, backend
                  services, Python and Linux server (system administration).
                </p>
                <p>Symfony 2 - Linux - Python - Team Work</p>
              </template>
            </card>
          </div>
        </section>
      </transition-group>
    </div>
  </div>
</template>

<script>
import Card from '~/components/Card'
import Hero from '~/components/Hero'

export default {
  components: {
    Card,
    Hero
  },

  data() {
    return {
      display: [true, false, false, false, false]
    }
  },

  methods: {
    set(index) {
      this.display = this.display.map(() => false)
      this.display[index] = true
    }
  }
}
</script>

<style scoped lang="sass">
.container
  width: 100%
  padding: 3rem 1rem

nav
  margin-bottom: 3rem
  text-align: right
  a
    text-transform: uppercase
    margin: 0.5rem
    border-bottom: 1px solid transparent
    transition: border 0.3s
  a.is-active, a:hover
    border-color: inherit

@media screen and (min-width: 80rem)
  .container
    padding-left: 12rem
  nav
    display: flex;
    align-items: flex-start
    flex-direction: column
    position: fixed
    left: 0rem
    z-index: 10
    color: rgb(168, 178, 209)
    a
      margin: 1rem

@media screen and (max-width: 40rem)
  nav
    display: none;

h3
  text-transform: uppercase
  font-weight: normal
  font-size: 1.2rem
  margin-bottom: 1.2em

section
  margin-bottom: 3rem
  transition: opacity 1s, transform 1s

.cards
  display: flex
  flex-wrap: wrap

.sections-enter
  opacity: 0
  transform: translateY(100vh)

.sections-leave-to
  opacity: 0
  transform: translateX(100vw)

.sections-leave-active
  position: absolute
</style>
