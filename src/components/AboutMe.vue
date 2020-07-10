<template>
  <section class="about-me" id="about">
    <h2 class="section__title section__title--about">{{ bodyData[2].profile}}</h2>
    <p class="section__subtitle section__subtitle--about">{{ bodyData[2].profession }}</p>

    <div class="about-me__body">
      <p>{{ bodyData[2].detail[0]}}</p>
      <p>{{ bodyData[2].detail[1]}}</p>
    </div>

    <img src="../assets/cipher.jpeg" alt="Areel is foodie" class="about-me__img" />
  </section>
</template>

<script>
export default {
  props: ['bodyData'],
};
</script>

<style scoped>
.about-me {
  position: relative;
  top: 10vh;
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 20px;
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
p {
  text-align: justify;
}
</style>
