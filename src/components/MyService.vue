<template>
  <section class="my-services" id="services">
    <h2 class="section__title section__title--services">{{ bodyData[1].service }}</h2>
    <div class="services">
      <div class="service">
        <h3>{{ bodyData[1].categories[0].category }}</h3>
        <p>{{ bodyData[1].categories[0].detail }}</p>
      </div>
      <!-- / service -->

      <div class="service">
        <h3>{{ bodyData[1].categories[1].category }}</h3>
        <p>{{ bodyData[1].categories[1].detail }}</p>
      </div>
      <!-- / service -->

      <div class="service">
        <h3>{{ bodyData[1].categories[2].category }}</h3>
        <p>{{ bodyData[1].categories[2].detail }}</p>
      </div>
      <!-- / service -->
    </div>
    <!-- / services -->

    <a href="#project" class="btn">Projects</a>
  </section>
</template>

<script>
export default {
  props: ['bodyData'],
};
</script>

<style scoped>
.my-services {
  position: relative;
  top: 10vh;
  background-color: var(--clr-dark);
  background-image: url(../assets/services-bg.jpg);
  background-size: cover;
  color: var(--clr-light);
  text-align: center;
}

.section__title--services {
  color: var(--clr-accent);
  position: relative;
}

.section__title--services::after {
  content: "";
  display: block;
  width: 2em;
  height: 2px;
  margin: 0.5em auto 1em;
  background: var(--clr-light);
}

.services {
  margin-bottom: 4em;
}

.service {
  max-width: 500px;
  margin: 10px auto;
}

@media (min-width: 800px) {
  .services {
    display: flex;
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
  }

  .service + .service {
    margin-left: 2em;
  }
}

.btn {
  display: inline-block;
  padding: 0.5em 2.5em;
  background: var(--clr-accent);
  color: var(--clr-dark);
  text-decoration: none;
  cursor: pointer;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: var(--fw-bold);
  transition: transform 200ms ease-in-out;
}

.btn:hover {
  transform: scale(1.1);
}
</style>
