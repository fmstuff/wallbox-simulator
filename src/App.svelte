<script lang="ts">
  import WallboxConfig from './lib/WallboxConfig.svelte'
  import WallboxSimulator from './lib/wallbox-simulator/WallboxSimulator.svelte'
  import Heading1 from './lib/components/Heading1.svelte';

  let webSocketUrl: string;
</script>

<main class="container mx-auto text-center p-4">
  <Heading1>Wallbox Simulator</Heading1>    

  <p class="p-4">
    <WallboxConfig bind:connectionUrl={webSocketUrl} />
  </p>

  <p class="p-4">
    <WallboxSimulator bind:webSocketUrl={webSocketUrl} />
  </p>

</main>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
