module.exports = {
  title: 'astor.host',
  description: 'Astor Testnet is an Ethereum Classic (ETC) testnet that uses SHA3 as its proof of work method. SHA3 allows for a higher performance, and safer block production. Astor is based on the ongoing ECIP-1049.',
  themeConfig: {
    nav: [
      { text: 'astor.host', link: '/' },
      { text: 'Motivation', link: '/motivation/' },
      { text: 'Node', link: '/node/' },
      { text: 'Mine', link: '/mine/' },
      { text: 'Explore', link: '/explore/' }
    ]
  },
  head: [
    ['meta', {name: 'viewport', content: 'width=device-width,initial-scale=1,maximum-scale=1,maximum-scale=1'}],
    ['link', {rel: 'icon', type: 'image/png', href: 'etc.png'}],
    ['script', { async: true, defer: true, src: 'https://www.googletagmanager.com/gtag/js?id=UA-133170751-8' },
    `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
  
    gtag('config', 'UA-133170751-8');
    `],
    ['script', { async: true, defer: true, src: 'https://cdn.jsdelivr.net/npm/@widgetbot/crate@3' },
    `
      new Crate({
        server: '570676740976803860',
        channel: '570677561944965121',
        shard: 'https://disweb.deploys.io'
      })
    `]
  ],
  markdown: {
    anchor: { permalinkSymbol: '↳' }
  }
}
