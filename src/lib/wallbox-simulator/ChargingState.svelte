<script lang="ts">
  import StatusPill from "../components/StatusPill.svelte";
  import { chargingState } from "./store";
</script>

<StatusPill>
  Charging state: {$chargingState ?? 'no session'}
</StatusPill>

<style></style>
