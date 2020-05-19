(function() {
    WebFontConfig = {
      active: function() {
        sessionStorage.fonts = true;
      },
      custom: {
        families: [
            'Adobe Caslon Pro',
            'Optima'
        ]  ,
        urls: [
            '@/fonts/optima/stylesheet.css',
            '@/fonts/adobe-caslon-pro/stylesheet.css'
        ]
      },
      timeout: 2000
    };

    (function(d) {
      var wf = d.createElement('script'), s = d.scripts[0];
      wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
      wf.async = true;
      s.parentNode.insertBefore(wf, s);
    })(document);
})();
