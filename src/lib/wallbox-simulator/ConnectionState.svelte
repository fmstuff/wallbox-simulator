<script lang="ts">
  import StatusPill from "../components/StatusPill.svelte";
  import { connectionState } from "./store";

  let icon = "";

  $: {
    switch ($connectionState) {
      case 'connected':
        icon = '🟢';
        break;
      case 'connecting':
        icon = '⌛️';
        break;
      case 'disconnected':
        icon = '🔴';
        break;
      case 'error':
        icon = '🚫'
    }
  }
</script>

<StatusPill>
  Connection state: {icon}
</StatusPill>

<style></style>
