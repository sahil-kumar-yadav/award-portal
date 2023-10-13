<script>
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte'
  import {base} from "$app/paths";
</script>
<Navbar let:hidden let:toggle>
  <NavBrand href="/">
    <img
      src="{base}/logo.png"
      class="mr-3 h-6 sm:h-9"
      alt="IEEE Logo"
    />
    <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      IEEE Bombay Section
    </span>
  </NavBrand>
  <NavHamburger on:click={toggle} />
  <NavUl {hidden}>
    <NavLi href="/" active={true}>Home</NavLi>
    <NavLi href="/">Apply for Award</NavLi>
    <NavLi href="/">Your Applications</NavLi>
    <NavLi href="/">Welcome</NavLi>
    <NavLi href="/">Logout</NavLi>
  </NavUl>
</Navbar>
<slot />
