<script>
  import { 
    Navbar, 
    NavBrand,
    NavLi, 
    NavUl, 
    NavHamburger } from 'flowbite-svelte';

  import HomeOutline from 'flowbite-svelte-icons/HomeOutline.svelte';

  import SunOutline from 'flowbite-svelte-icons/SunOutline.svelte';
  import MoonOutline from 'flowbite-svelte-icons/MoonOutline.svelte';
  import {
    ActionIcon,
    Tooltip,
    colorScheme,
  } from '@svelteuidev/core';

  function toggleTheme() {
    colorScheme.update((v) => (v === 'light' ? 'dark' : 'dark'));
    localStorage.setItem('colorScheme', $colorScheme);
  }
</script>

<Navbar>
  <NavBrand href="/">
    <HomeOutline
      class="me-3 h-6 sm:h-9"
    />
    <span
      class="self-center whitepsace-nowrap text-xl font-semibold dark:text-white">
    Home
    </span>
  </NavBrand>
  <NavHamburger />
  <NavUl>
    <NavLi href="/" class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Home</NavLi>
    <NavLi>
        <ActionIcon size="lg" variant="outline" on:click={toggleTheme} radius="md">
          {#if $colorScheme === 'light'}
            <MoonOutline />
          {:else}
            <SunOutline />
          {/if}
        </ActionIcon>
    </NavLi>
  </NavUl>
</Navbar>