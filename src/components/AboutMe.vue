<template>
  <section class="about-me" id="about">
    <h2 class="section__title section__title--about">Who I am</h2>
    <p class="section__subtitle section__subtitle--about">
      Web/App Developer
    </p>

    <div class="about-me__body">
      <p>
        I am a JavaScript, Dart coder with less than six months experience in software development
      </p>
      <p>
        I will like to work with an organization and team of people who will encourage me to use my knowledge and experience as a software developer to the growth and development of the oraganization. I do not mind travelling or changing location because of job
      </p>
    </div>

    <img
      src="../assets/1.jpg"
      alt="Areel is foodie"
      class="about-me__img"
    />
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
    .about-me {
    max-width: 1000px;
    margin: 0 auto;
    padding: 40px 20px
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
