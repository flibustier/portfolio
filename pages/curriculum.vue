<template>
  <div>
    <hero
      title="curriculum"
      picture="curriculum.jpg"
      dark-picture="curriculum-dark.jpg"
    />

    <ul class="timeline">
      <li class="timeline-event">
        <label class="timeline-event-icon"></label>
        <div class="timeline-event-copy">
          <p class="timeline-event-thumbnail">May 2019 - Now (1 year+)</p>
          <h3>Fullstack JS</h3>
          <h4>Bedrock Streaming (ex M6 Group) [Freelancer]</h4>
          <transition-image
            img-class="logo"
            dark-picture="Bedrock-Blanc.png"
            picture="Bedrock-Black.png"
          />
          <p>
            Video Team 🎞<br />
            Backend API Development with <strong>Node.JS</strong><br />
            Frontend supervision UI with <strong>Vue.JS</strong><br />
            <strong>AWS cloud</strong> environment with Terraform<br />
            Agile management
          </p>
          <p>
            Remote + Lyon (France)
          </p>
        </div>
      </li>
      <li class="timeline-event">
        <label class="timeline-event-icon"></label>
        <div class="timeline-event-copy">
          <p class="timeline-event-thumbnail">
            September 2018 - May 2019 (9 months)
          </p>
          <h3>Fullstack PHP/Vue</h3>
          <h4>Brayton Global [Freelancer]</h4>
          <transition-image
            img-class="logo logo-small"
            picture="brayton_logo.png"
          />
          <p>
            Web development for HR management<br />
            Mainly <strong>Vue.JS</strong> frontend<br />
            Along with <strong>Symfony 4</strong> (PHP) API backend<br />
            CI/CD & Linux servers
          </p>
          <p>
            Remote + Brussels (Belgium)
          </p>
        </div>
      </li>
      <li class="timeline-event">
        <label class="timeline-event-icon"></label>
        <div class="timeline-event-copy">
          <p class="timeline-event-thumbnail">
            March 2018 - September 2018 (7 months)
          </p>
          <h3>Blockchain & Security Engineer</h3>
          <h4>Amaris</h4>
          <transition-image
            img-class="logo"
            picture="logo-amaris.png"
            dark-picture="amaris-white.jpg"
          />
          <p>
            Study DLT solutions & PoC<br />
            Working on <strong>Multichain</strong>, Hyperledger, Ethereum,
            Nimiq<br />
            Also <strong>Go</strong> & Vue.JS<br />
          </p>
          <p>
            Lyon (France)
          </p>
        </div>
      </li>
      <li class="timeline-event">
        <label class="timeline-event-icon"></label>
        <div class="timeline-event-copy">
          <p class="timeline-event-thumbnail">
            October 2017 - February 2018 (5 months)
          </p>
          <h4>VDS Consulting</h4>
          <p>Improving existing software using <strong>Symfony 2</strong></p>
          <p>
            Remote
          </p>
        </div>
      </li>

      <li class="timeline-event">
        <label class="timeline-event-icon"></label>
        <div class="timeline-event-copy">
          <p class="timeline-event-thumbnail">
            March 2017 - August 2017 (6 months)
          </p>
          <h3>Security Internship</h3>
          <h4>Zenika</h4>
          <transition-image img-class="logo" picture="zenika.png" />
          <p></p>
          <p>
            Creation of an internal <strong>crypto-currency</strong> connected
            to a web application<br />
            Multichain, Vue.JS frontend, Spring backend
          </p>

          <p>
            Contributing to some security tools like
            <a href="http://github.com/rapid7/metasploit-framework"
              >Metasploit Framework</a
            >
            and
            <a href="https://github.com/zaproxy/zaproxy">ZAP</a>
          </p>

          <p>
            Setting up Honeypots and an audit platform with Elastic Stack (ELK)
          </p>

          <p class="list">
            Writing and co-writing blog posts (french, sorry!):
            <a href="https://zen-sec.github.io/fr/java-heapdump-extraction/"
              >How to extract credentials from Java Heap Dump</a
            >
            <a
              href="https://blog.zenika.com/2017/09/07/retour-sur-la-nuit-du-hack-2017/"
              >Back on NDH 2017</a
            >
            <a
              href="https://blog.zenika.com/2017/09/12/plongeon-dans-les-profondeurs-de-linternet-entre-darknets-et-cybercriminalite-2/"
              >Diving in the depths of the internet, between Darknets and Cyber
              Crimes</a
            >
            <a
              href="https://blog.zenika.com/2017/09/25/metasploit-en-2017-ca-donne-quoi/"
              >Metasploit in 2017</a
            >
            <a
              href="https://blog.zenika.com/2017/11/23/metasploit-plongeon-dans-le-framework"
              >Hands on Metasploit</a
            >
          </p>
          <p>
            Lyon + Paris (France)
          </p>
        </div>
      </li>
      <li class="timeline-event">
        <label class="timeline-event-icon"></label>
        <div class="timeline-event-copy">
          <p class="timeline-event-thumbnail">
            February 2016 - August 2016 (~ 3 months cumulative time)
          </p>
          <h3>Free time developer</h3>
          <h4>Brayton Global</h4>
          <transition-image img-class="logo" picture="skillmatrix.png" />
          <p>
            Development of the human resources management application
            SkillMatrix<br />
            <strong>Symfony 2.8</strong> - Continuous Delivery - Git - Team Work
          </p>
          <p>
            Development of a real estate crowdfunding website for Dubai (during
            summer 2016)<br />
            <strong>Symfony 3</strong> - Continuous Delivery - Git - Team Work
          </p>
          <p>
            Remote + Lyon (France)
          </p>
        </div>
      </li>
      <li class="timeline-event">
        <label class="timeline-event-icon"></label>
        <div class="timeline-event-copy">
          <p class="timeline-event-thumbnail">
            July 2015 - February 2016 (8 months)
          </p>
          <h3>Internship</h3>
          <h4>Brayton Global</h4>
          <transition-image img-class="logo" picture="vemasys.png" />
          <p>
            Development of a management application (SaaS) for the inland
            navigation sector in an international context
          </p>
          <p><strong>Symfony 2</strong> - Linux - Python - Team Work</p>
          <p>
            Brussels + Anvers (Belgium)
          </p>
        </div>
      </li>
      <li class="timeline-event">
        <label class="timeline-event-icon"></label>
        <div class="timeline-event-copy">
          <p class="timeline-event-thumbnail">September 2012 - 2017</p>
          <h3>Master in Computer Science</h3>
          <h4>Polytech Lyon</h4>
          <transition-image img-class="logo" picture="polytech.png" />
          <p>
            <strong>2012 - 2014</strong> : Integrated preparatory program of the
            University Polytechnic of Lyon.<br />
            Theoretical training based on mathematics and computer science from
            the Claude Bernard University.
          </p>
          <p>
            <strong>2014 - 2017</strong> : Engineering program of Polytech Lyon
            in computer science specialty.
          </p>
          <p class="list">
            Topics:<br />
            <span>Networks</span>
            <span>DataBases, BI, Big Data</span>
            <span>Web/Mobile Technologies</span>
            <span>Embebed Software</span>
            <span>Modeling and problem solving by computer</span>
            <span>Distributed computing</span>
            <span>AI</span>
          </p>
          <p class="list">
            I was also a volunteer :
            <span
              >Member of <a href="http://insecurity-insa.fr/">Insecurity</a>,
              the security association of INSA Lyon</span
            >
            <span
              >President and Vice-Président of the junior enterprise association
              <a href="https://junior-polyenco.fr/">Polyenco</a></span
            >
            <span>Photographer for the Arts Office</span>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Hero from '~/components/Hero'
import TransitionImage from '~/components/TransitionImage'

export default {
  components: {
    Hero,
    TransitionImage
  }
}
</script>

<style scoped>
.timeline {
  margin: 4rem auto;
  position: relative;
  max-width: 52em;
}

.timeline:before {
  background-color: black;
  content: '';
  margin-left: -1px;
  position: absolute;
  top: 0;
  left: 2em;
  width: 1px;
  height: 100%;
}

.dark-mode .timeline:before {
  background-color: #ccc;
}

.timeline-event {
  position: relative;
}

.timeline-event:hover .timeline-event-icon {
  transform: rotate(-45deg);
  background-color: #c67b47;
}

.timeline-event:hover .timeline-event-thumbnail {
  box-shadow: inset 40em 0 0 0 #c67b47;
}

.timeline-event-copy {
  padding: 2em;
  position: relative;
  top: -1.875em;
  left: 4em;
  width: 80%;
}

h3 {
  text-transform: uppercase;
  font-size: 1.75em;
  margin-bottom: 0.2em;
}

h4 {
  font-size: 1.2em;
  margin-bottom: 1.2em;
}

.timeline-event-copy p:not(.timeline-event-thumbnail) {
  padding-bottom: 1.2em;
}

.timeline-event-icon {
  transition: transform 0.2s ease-in;
  transform: rotate(45deg);

  background-color: black;
  outline: 10px solid white;
  transition: outline 0.7s;
  display: block;
  margin: 0.5em 0.5em 0.5em -0.5em;
  position: absolute;
  top: 0;
  left: 2em;
  width: 1em;
  height: 1em;
}

.dark-mode .timeline-event-icon {
  background-color: #ccc;
  outline-color: #222428;
}

.timeline-event-thumbnail {
  transition: box-shadow 0.5s ease-in 0.1s;
  color: white;
  font-size: 0.9em;

  background-color: black;
  box-shadow: inset 0 0 0 0em #b4927a;
  display: inline-block;
  margin-bottom: 1.2em;
  padding: 0.25em 1em 0.2em 1em;
  text-transform: uppercase;
}

.dark-mode .timeline-event-thumbnail {
  background: none;
}

.logo {
  width: 100px;
  float: right;
  margin: 0.5rem;
}

.logo-small {
  width: 66px;
}

.list {
  display: inline-grid;
}

@media screen and (max-width: 600px) {
  .logo {
    float: none;
  }

  .timeline-event-copy h4 {
    margin-bottom: 0.3rem;
  }
}
</style>
