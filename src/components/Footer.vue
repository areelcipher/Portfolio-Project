<template>
  <footer class="footer">
    <!-- email address -->
    <a href="mailto:hola@areel.dev" class="footer__link">hola@areeldev.com</a>
    <p>
      22, Ebun-Olorun Street,
      Maternity Bus Stop,
      Bariga, Lagos.<br/>
      (+234) 802 8943 665
    </p>
    <ul class="social-list">
      <li class="social-list__item">
        <a class="social-list__link" href="https://app.slack.com/client/T65KHPCL9/DRKTHE397/user_profile/UPZ2NE83G" target="_blank">
          <i class="fab fa-slack"></i>
        </a>
      </li>
      <li class="social-list__item">
        <a class="social-list__link" href="https://www.instagram.com/areel007/" target="_blank">
          <i class="fab fa-instagram"></i>
        </a>
      </li>
      <li class="social-list__item">
        <a class="social-list__link" href="https://twitter.com/Batmonroe24" target="_blank">
          <i class="fab fa-twitter"></i>
        </a>
      </li>
      <li class="social-list__item">
        <a class="social-list__link" href="https://github.com/areelcipher?tab=repositories" target="_blank">
          <i class="fab fa-github"></i>
        </a>
      </li>
    </ul>
    <p>Copyright &copy; 2020 | Powered By AreelDev</p>
  </footer>
</template>

<script>
export default {

};
</script>
    
<style scoped>
    .footer {
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
}

.footer__link:hover,
.social-list__link:hover {
    opacity: .7;
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
    margin: 0 .5em;
}

.social-list__link {
    padding: .5em;
}

.footer p {
    font-size: .8rem;
}

</style>
