<template>
  <footer class="footer">
    <!-- email address -->
    <!-- <a :href="footer.email" class="footer__link">{{ footer.email }}</a> -->
    <p>
      {{ footer.address[0] }}
      <br />{{ footer.address[1] }}
    </p>
    <ul class="social-list">
      
      <li class="social-list__item" v-for="social in footer.socials" :key="social.url">
        <a
          class="social-list__link"
          :href="social.url"
          target="_blank"
        >
          <i :class="social.icon"></i>
        </a>
      </li>
    </ul>
    <p>Copyright &copy; 2020 | Powered By AreelDev</p>
  </footer>
</template>

<script>
export default {
  name: 'main-footer',
  props: ['footer'],
};
</script>
    
<style scoped>
.footer {
  position: relative;
  top: 10vh;
  background: #111;
  color: var(--clr-accent);
  text-align: center;
  padding: 2.5em 0 1em 0;
  font-size: var(--fs-h3);
}

.footer a {
  color: inherit;
  text-decoration: none;
}

.footer__link {
  font-weight: var(--fw-bold);
  max-width: 50%;
}

.footer__link:hover,
.social-list__link:hover {
  opacity: 0.7;
}

.footer__link:hover {
  text-decoration: underline;
}

.social-list {
  list-style: none;
  display: flex;
  justify-content: center;
  margin: 2em 0;
  padding: 0;
}

.social-list__item {
  margin: 0 0.5em;
}

.social-list__link {
  padding: 0.5em;
}

.footer p {
  font-size: 0.8rem;
}

@media screen and (max-width: 375px) {
  .footer__link {
    width: 80vw;
    border: 1px solid red;
  }
}

</style>
