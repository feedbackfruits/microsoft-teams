addEventListener('fetch', function(event) {
  event.respondWith(handleRequest(event.request))
});

async function handleRequest(request) {
  const usCountries = [
    'as',
    'ai',
    'ar',
    'am',
    'aw',
    'bs',
    'bb',
    'bz',
    'bm',
    'bo',
    'br',
    'ca',
    'ky',
    'cl',
    'co',
    'cr',
    'cu',
    'dm',
    'do',
    'ec',
    'sv',
    'fk',
    'gf',
    'gd',
    'gp',
    'gu',
    'gt',
    'gy',
    'ht',
    'hn',
    'jm',
    'mq',
    'mx',
    'ms',
    'mp',
    'pa',
    'py',
    'pe',
    'bl',
    'sr',
    'tt',
    'us',
    'uy',
    've',
    'vg'
  ];

  const auCountries = [
    'aq',
    'au',
    'bd',
    'bt',
    'io',
    'bn',
    'kh',
    'cn',
    'cx',
    'cc',
    'ck',
    'fj',
    'gf',
    'hm',
    'hk',
    'in',
    'id',
    'jp',
    'ki',
    'kp',
    'kr',
    'kg',
    'la',
    'mo',
    'my',
    'mv',
    'mh',
    'fm',
    'mn',
    'mm',
    'np',
    'nc',
    'nz',
    'nu',
    'nf',
    'pk',
    'pw',
    'pg',
    'ph',
    'ws',
    'sg',
    'sb',
    'lk',
    'tw',
    'tj',
    'th',
    'tl',
    'tk',
    'to',
    'tv',
    'uz',
    'vu',
    'vn',
    'wf'
  ];

  const url = new URL(request.url);
  const country = request.headers.get('CF-IPCountry').toLowerCase();
  let region = 'eu';

  if (usCountries.includes(country)) {
    region = 'us';
  } else if (auCountries.includes(country)) {
    region = 'au';
  }

  return Response.redirect(`https://${region}.feedbackfruits.com${url.pathname}${url.search}`);
}
