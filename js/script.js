var app = new Vue({
el: '#app',
data: {
  currSliderIndex: 0,
  sliderImgs: [
    'img/Group-36-2x.png',
    'img/Group-35-2x.png',
    'img/Group-40-2x.png'
  ],
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
},
mounted() {
  setInterval(() => {
    if (this.currSliderIndex < this.sliderImgs.length - 1) {
      this.currSliderIndex += 1;
    } else {
      this.currSliderIndex = 0;
    }
  }, 5000)

  // controllo che gli elementi rientrino della viewport

  // button.animate-btn
  for (var x = 0; x < 5; x++) {
    this.isInViewport('animate-btn', x);
  }
  // box sect-1
  for (var x = 0; x < 4; x++) {
    this.isInViewport('box', x);
  }
  // animate-title
  for (var x = 0; x < 4; x++) {
    this.isInViewport('animate-title', x);
  }
  this.isInViewport('sect-title', 0);
  this.isInViewport('sect-2-images', 0);
  this.isInViewport('sect-title', 1);

},
methods: {
  changeImg: function(index) {
    return this.currSliderIndex = index;
  },
  isInViewport: function(className, index) {
    window.addEventListener('scroll', function() {
      const el = document.getElementsByClassName(className)[index];
      const elRect = el.getBoundingClientRect();
      if (elRect.top >= 0 && elRect.left >= 0 && elRect.right <= window.innerWidth && elRect.bottom <= window.innerHeight) {
        el.classList.add('animated');
      }
    })
  }
}
});
Vue.config.devtools = true;
