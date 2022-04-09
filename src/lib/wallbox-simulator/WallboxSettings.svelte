<script lang="ts">
  import Button from "../components/Button.svelte";
  import Heading3 from "../components/Heading3.svelte";
  import Cog from "../icons/cog.svelte";
  
  import { wallboxAuthMode } from "./store";

  const showSettingsModal = () => {
    window.location.href = window.location.href.replace(/#[A-Za-z0-9_]*$/,'') + "#settings"
  }
</script>

<Button on:click={showSettingsModal}>
  <Cog /> Settings
</Button>

<div id="settings" class="modal">
  <div class="modal-box">
    <Heading3>Authorization Mode</Heading3>
    <div class="form-control flex items-start">
      <label class="cursor-pointer label">
        <input type="radio" bind:group={$wallboxAuthMode} name="authMode" value={'instant'} class="radio radio-primary" >
        <div 
          class="tooltip tooltip-right"
          data-tip="Charging starts immediately when the cable is plugged in."
        >
          <span class="label-text pl-2">Instant Charging</span> 
        </div>
      </label>
      
      <label class="cursor-pointer label">
        <input type="radio" bind:group={$wallboxAuthMode} name="authMode" value={'private'} class="radio radio-primary">
        <div 
          class="tooltip tooltip-right"
          data-tip="Authorization via RFID card or remote start via app required to start charging."
        >
          <span class="label-text pl-2">Private Charging</span> 
        </div>
      </label>
    </div>

    <div class="modal-action">
      <a href="./#" class="btn btn-primary">Close</a> 
    </div>
  </div>
</div>
  
<style></style>
