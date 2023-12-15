(() => {
  var e = {};
  e.g = (function () {
    if ('object' == typeof globalThis) return globalThis;
    try {
      return this || new Function('return this')();
    } catch (e) {
      if ('object' == typeof window) return window;
    }
  })();
  var i;
  ((i =
    'undefined' != typeof window
      ? window
      : void 0 !== e.g
      ? e.g
      : 'undefined' != typeof self
      ? self
      : {}).SENTRY_RELEASE = { id: 'EasterHeist (game: v1.0.46_v14.6.4, utils: v14.6.4)' }),
    (i.SENTRY_RELEASES = i.SENTRY_RELEASES || {}),
    (i.SENTRY_RELEASES['games-front-end@sentry'] = { id: 'EasterHeist (game: v1.0.46_v14.6.4, utils: v14.6.4)' }),
    (() => {
      var e;
      try {
        e = window.localStorage;
      } catch (r) {
        console.log('LocalStorage is unavailable!');
      }
      var i = window.SKIN_DIRS || {},
        t = window.__OPTIONS__.rules_url,
        o = t.slice(t.indexOf(`/${window.__OPTIONS__.locale}/`) + 1);
      function n(i) {
        var t = (i.ui.skin || 'basic').toLocaleLowerCase(),
          o = window.location.search.match(new RegExp('[?&]skin=([^&]*)(&?)', 'i')),
          n = o ? o[1] : null;
        if (!e) return n || t;
        var r = `lastApiSkin_${i.cache_id}`,
          s = `userSkin_${i.cache_id}`;
        return (
          n ? e.setItem(s, n) : (n = e.getItem(s)), e.getItem(r) === t && n ? n : (e.removeItem(s), e.setItem(r, t), t)
        );
      }
      (window.__OPTIONS__.rules_url = 'https://rules.bgaming-network.com/' + o),
        (window.initializeCasinoOptions = (e) => {
          var t = n(e),
            { root: o, res: r = 'v1.0.46_v14.6.4' } = i[t] || i.basic || {};
          (e.ui.applied_skin = o),
            (e.resources_root_path = e.resources_path + (o ? `/${o}` : '')),
            (e.resources_path += `/${r}`),
            (e.game_bundle_source = e.resources_path + '/bundle.js'),
            (window.__OPTIONS__ = e);
        }),
        window.initializeCasinoOptions(window.__OPTIONS__);
    })();
})();
//# sourceMappingURL=./loader.js.map
