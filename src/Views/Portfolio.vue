<template>
  <div id="portfolio">
    <Header :links='links' :slide='slide'  />
    <Body :links='links' :slide='slide' :isMobileMenuSlideOut='isMobileMenuSlideOut' :mobileMenuClose='mobileMenuClose' :bodyData='bodyData' />
    <Footer :footer='footer' />
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
import Body from "../components/Body";
export default {
  components: {
    Header,
    Footer,
    Body
  },
  data() {
    return {
      links: [
        { menu: "Home", path: "/#" },
        { menu: "Services", path: "/#services" },
        { menu: "About", path: "/#about" },
        { menu: "Project", path: "/#project" },
        // { menu: "Blog", path: "/blog" }
      ],
      footer: {
        email: 'morenikejicodexiphaar@gmail.com',
        address: [
          '22, Ebun-Olorun Street, Maternity Bus Stop, Bariga, Lagos.',
          '(+234) 802 8943 665'
        ],
        socials: [
          { url: 'https://app.slack.com/client/T65KHPCL9/DRKTHE397/user_profile/UPZ2NE83G', icon: 'fab fa-slack'},
          { url: 'https://www.instagram.com/areel007/', icon: 'fab fa-instagram'},
          { url: 'https://twitter.com/Batmonroe24', icon: 'fab fa-twitter'},
          { url: 'https://github.com/areelcipher?tab=repositories', icon: 'fab fa-github'},
        ]
      },
      isMobileMenuSlideOut: false,
      slide: () => {
        this.isMobileMenuSlideOut = !this.isMobileMenuSlideOut;
      },
      mobileMenuClose: () => {
        this.isMobileMenuSlideOut = false;
      },
      bodyData: [
        {
          name: 'Sunday Morenikeji',
          profession: 'frontend dev',
          imgSrc: '../assets/3.jpg',
          imgAlt: 'intro__img'
        },
        {
          service: 'What I do',
          categories: [
            {
              category: 'Frontend Dev',
              detail: 'I use modern JS libraries/frameworks like ReactJS, VueJs, and Material Ui design for my frontend designs.'
            },
            {
              category: 'iOS + Android Dev',
              detail: 'I use Dart and Flutter for cross platform mobile application development (iOS and Android).'
            },
            {
              category: 'Graphics Designing',
              detail: 'I use Adobe Photoshop, Adobe Ilustrator and Corel Draw for my visual/graphics designs.'
            },
          ]
        },
        {
          profile: 'Who I am',
          profession: 'Web/App Developer',
          detail: [
            'A top notch Lagos based full stack website and web application developer who is specialised in frontend development of website, web applications and mobile application development. My stack entails JavaScript, Dart, Git, Sql and NoSql database management systems. I am a pro with modern JavaScript frontend development frameworks and libraries like ReactJs, VueJs, Material design. Also, I use flutter for mobile application development'
          ]
        },
        {
          project: 'My Projects',
          detail: 'A selection of my range of work',
          projectsCategories: [
            {
              imgSrc: 'https://ae01.alicdn.com/kf/HTB1shhyXAfb_uJkSnaVq6xFmVXa9.jpg',
              path: '/calculator',
            },
            {
              imgSrc: '../assets/whatsapp.png',
              path: '/whatsapp',
            },
            {
              imgSrc: '../assets/weather.jpg',
              path: '/weather',
            },
            {
              imgSrc: '../assets/todo1.png',
              path: '/todo',
            },
            {
              imgSrc: '../assets/quiz.png',
              path: '/quiz',
            },
          ]
        }
      ],
    };
  }
};
</script>

<style scoped>
.about-me {
  max-width: 1000px;
  margin: 0 auto;
}

.about-me__img {
  box-shadow: var(--bs);
}

@media (min-width: 600px) {
  .about-me {
    display: grid;
    grid-template-columns: 1fr 200px;
    grid-template-areas:
      "title img"
      "subtitle img"
      "text img";
    grid-column-gap: 2em;
  }

  .section__title--about {
    grid-area: title;
  }

  .section__subtitle--about {
    grid-column: 1 / -1;
    grid-row: 2;
    position: relative;
    left: -1em;
    width: calc(100% + 2em);
    padding-left: 1em;
    padding-right: calc(200px + 4em);
  }

  .about-me__img {
    grid-area: img;
    position: relative;
    z-index: 2;
  }
}
</style>
