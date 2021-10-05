<script lang="ts">
  import WallboxConfig from './lib/WallboxConfig.svelte'
  import ConnectButton from './lib/ConnectButton.svelte'

  let webSocketUrl: string;
</script>

<main>
  <h1>Wallbox Simulator</h1>
  <p>
    <WallboxConfig bind:connectionUrl={webSocketUrl} />
  </p>
  <p>
    <ConnectButton bind:connectionUrl={webSocketUrl}/>
  </p>
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  h1 {
    color: #6633cc;
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 100;
    line-height: 1.1;
    margin: 2rem auto;
    max-width: 14rem;
  }

  p {
    max-width: 14rem;
    margin: 1rem auto;
    line-height: 1.35;
  }

  @media (min-width: 480px) {
    h1 {
      max-width: none;
    }

    p {
      max-width: none;
    }
  }
</style>
