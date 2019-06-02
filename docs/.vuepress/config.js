module.exports = {
  title: 'astor.host',
  description: 'Astor Testnet is an Ethereum Classic (ETC) testnet that uses SHA3 as its proof of work method. SHA3 allows for a higher performance, and safer block production. Astor is based on the ongoing ECIP-1049.',
  themeConfig: {
    nav: [
      { text: 'astor.host', link: '/' },
      { text: 'Motivation', link: '/motivation/' },
      { text: 'Node', link: '/node/' },
      { text: 'Mine', link: '/mine/' },
      { text: 'Explore', link: '/explore/' },
      { text: 'Stats', link: 'https://stats.astor.host/' }
    ]
  },
  head: [
    ['script', { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=UA-141280467-3'}],
    ['script', {},
    `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
  
    gtag('config', 'UA-141280467-3');
    `],
    ['meta', {name: 'viewport', content: 'width=device-width,initial-scale=1,maximum-scale=1,maximum-scale=1'}],
    ['meta', {name: "keywords", content: "Astor,ETC Dapps,Ethereum Classic,ETC,Dapps,Immutable Dapps,Ethereum Classic,Onchain Ethereum Classic Transactions,ETC transactions,Ethereum Classic transactions,Ethereum Classic Development,Ethereum Classic Usage,ETC usage,ETC fundamentals,ETC trading,Ether Classic,Ethereum Classic Active addresses,ETC active addresses,ETC mining,Ethereum Classic mining,SHA3,Keccak256,SHA3 Ethereum Classic,SHA3 Mining,ETC Proof of Work change,ECIP-1049,ECIP 1049,Hashing algorithm,PoW,SHA3 PoW,Mine ETC,Atlantis"}],
    ['meta', {name: "twitter:card", content: "summary_large_image"}],
    ['meta', {name: "twitter:title", content: "Astor.host - The SHA3 Proof of Work testnet for Ethereum Classic."}],
    ['meta', {name: "twitter:description", content: "Resources and Information about how to begin mining SHA3 Ethereum Classic. Based on the ECIP-1049 proposal."}],
    ['meta', {name: "twitter:image", content: "https://astor.host/hero.png"}],
    ['meta', {name: "og:url", content: "Astor.host"}],
    ['meta', {name: "og:type", content: "website"}],
    ['meta', {name: "og:title", content: "Astor.host - The SHA3 Proof of Work testnet for Ethereum Classic."}],
    ['meta', {name: "og:description", content: "Resources and Information about how to begin mining SHA3 Ethereum Classic. Based on the ECIP-1049 proposal."}],
    ['meta', {name: "og:image", content: "https://astor.host/hero.png"}],
    ['link', {rel: 'icon', type: 'image/png', href: 'etc.png'}],
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
