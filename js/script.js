var app = new Vue({
el: '#app',
data: {
  headerLinks: [
    {
      name: 'home',
      link: ''
    },
    {
      name: 'about',
      link: ''
    },
    {
      name: 'services',
      link: ''
    },
    {
      name: 'showcase',
      link: ''
    },
    {
      name: 'blog',
      link: ''
    },
    {
      name: 'contact',
      link: ''
    }
  ],
  footerLinks: [
    {
      name: 'Careers',
      link: ''
    },
    {
      name: 'News',
      link: ''
    },
    {
      name: 'Terms of use',
      link: ''
    },
    {
      name: 'Privacy Projects',
      link: ''
    },
    {
      name: 'About',
      link: ''
    },
    {
      name: 'Contact',
      link: ''
    }
  ],
  defaultText: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. Separated they live in Bookmarksgrove.',
  defaultShortText: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated...'
  }
});
Vue.config.devtools = true;
