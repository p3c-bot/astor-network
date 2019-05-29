<template>
  <footer class="footer">
    <ul>
      <li><a href="https://ethereumclassic.org/" target="_blank">Why Ethereum Classic?</a></li>
      <li><a href="https://discordapp.com/invite/MzGu7F" target="_blank">ETC Discord</a></li>
      <li><a href="https://discord.gg/JGEqqmS" target="_blank">0xBitcoin Discord</a></li>
      <li><a href="https://stats.astor.host/" target="_blank">Astor Stats Page</a></li>
      <li><a href="https://explore.astor.host/" target="_blank">Astor Block Explorer</a></li>
    </ul>
  </footer>
</template>

<style lang="stylus" scoped>
  @require '../styles/config'

  footer
    font-size $fsSmall
    padding 6em 0 2em 10em

    &.home
      margin-left 2em

    ul
      margin 0

      li
        display inline-block
        margin-right 2em

        &:first-child
          padding 0

        &:before
          content ''
          padding 0

        a
          color $subduedColor

          &:hover
            color $accentColor

</style>
