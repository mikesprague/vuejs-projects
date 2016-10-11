Vue.component( "loading", {
  template: '<p class="lead text-center" v-once>... loading data ...</p>'
});

Vue.component( "footer-content", {
  template: '<div class="container" v-once> \
      <p class="text-muted text-center"> \
        Built by <a href="https://mikesprague.me" target="_blank">Mike Sprague</a>. \
        <br> \
        Source <i class="fa fa-code"></i> available on <a href="https://github.com/mikesprague/vuejs-projects/" target="_blank"><i class="fa fa-github"></i> GitHub</a>. \
      </p> \
    </div>'
});
