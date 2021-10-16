<script lang="ts">
  import WallboxConfig from './lib/WallboxConfig.svelte'
  import WallboxSimulator from './lib/wallbox-simulator/WallboxSimulator.svelte'
  import Heading1 from './lib/components/Heading1.svelte';

  let webSocketUrl: string;
</script>

<main class="container mx-auto max-w-screen-sm p-4 text-center">
  <Heading1>Wallbox Simulator</Heading1>

  <div class="py-4">
    <WallboxConfig bind:connectionUrl={webSocketUrl} />
  </div>

  <WallboxSimulator bind:webSocketUrl={webSocketUrl} />
</main>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
