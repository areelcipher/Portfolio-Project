<template>
  <div id="weather">
    <Arrow />
    <section class="intro">
      <h1 class="section__title section__title--intro">
        <strong>Weather</strong>
      </h1>
      <p class="section__subtitle section__subtitle--intro">App</p>
      <img src="../assets/weather.jpg" alt class="intro__img" />
    </section>

    <div class="portfolio-item-individual">
      <p>
        This project seek to test my indept knowledge of concurrency in
        JavaScript and how to work with Application Programming Interface by using JavaScript promise and modern HTTP request.
      </p>
      <p>
        I used HTML5, CSS3 and vanilla JavaScript for the User Interface (UI).
        Also, I used (API) from
        <a
          href="https://openweathermap.org"
        >www.openweathermap.org</a> to get
        data for the weather forecast in your current location.
      </p>
      <p>
        You can get more details about the project from
        <a
          class="repo"
          href="https://github.com/areelcipher"
          target="_blank"
        >Weather App</a>
      </p>
    </div>
  </div>
</template>

<script>
import Arrow from "./Arrow";
export default {
  components: {
    Arrow
  }
};
</script>

<style scoped>
.portfolio {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.portfolio__item {
  background: var(--clr-accent);
  overflow: hidden;
}

.portfolio__img {
  transition: transform 750ms cubic-bezier(0.5, 0, 0.5, 1), opacity 250ms linear;
}

.portfolio__item:focus {
  position: relative;
  z-index: 2;
}

.portfolio__img:hover,
.portfolio__item:focus .portfolio__img {
  transform: scale(1.2);
  opacity: 0.5;
}

.portfolio-item-individual {
  padding: 0 1em 1em;
  max-width: 1000px;
  margin: 0 auto 30px auto;
  border: 1px solid #dfdfdf;
  box-shadow: 0px 0px 3px #dfdfdf;
}

.portfolio-item-individual p {
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 20px;
  margin-bottom: 0;
  text-align: justify;
}
.intro {
  position: relative;
  padding-top: 30px;
  padding-bottom: 30px;
}

.intro__img {
  box-shadow: var(--bs);
}

.section__subtitle--intro {
  display: inline-block;
}

.repo {
  color: var(--clr-accent);
}

@media (min-width: 600px) {
  .intro {
    display: grid;
    width: min-content;
    margin: 0 auto;
    grid-column-gap: 1em;
    grid-template-areas:
      "img title"
      "img subtitle";
    grid-template-columns: min-content max-content;
  }

  .intro__img {
    grid-area: img;
    min-width: 250px;
    position: relative;
    z-index: 2;
  }

  .section__subtitle--intro {
    align-self: start;
    grid-column: -1 / 1;
    grid-row: 2;
    text-align: right;
    position: relative;
    left: -1.5em;
    width: calc(100% + 1.5em);
  }
}
</style>
