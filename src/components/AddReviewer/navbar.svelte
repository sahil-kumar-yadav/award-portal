<script>
  import {
    Navbar,
    NavBrand,
    NavLi,
    NavUl,
    NavHamburger,
  } from "flowbite-svelte";
  import { ArrowRightToBracketSolid, HomeOutline } from "flowbite-svelte-icons";
</script>

<!-- this is the whole navbar -->
<Navbar class="bg-blue-800 flex h-14 justify-between items-center">
  <!-- this div contain the navbar menus and the home icon -->
  <div class="flex items-center">
    <!-- home icon navigation  -->
    <NavBrand href="/" class="text-white size text-7xl">
      <!-- home icon -->
      <HomeOutline />
    </NavBrand>

    <!-- this div conatain the navbar -->
    <div>
      <!-- this is nav list Unordered -->
      <NavUl class="text-white size ml-5 order-2">
        <!-- this are the all the menus in navbar -->
        <NavLi
          class=" text-white text-base hover:text-gray-500 lg:text-base"
          href="/">View All Submission</NavLi
        >
        <NavLi
          class=" text-white text-base hover:text-gray-500 lg:text-base"
          href="/addreviewer"
          active={true}>Add New Reviewer</NavLi
        >
        <NavLi
          class=" text-white text-base hover:text-gray-500 lg:text-base"
          href="/list">Reviewer List</NavLi
        >
        <NavLi
          class=" text-white text-base hover:text-gray-500 lg:text-base"
          href="/assign">Assign Reviewer</NavLi
        >
        <NavLi
          class=" text-white text-base hover:text-gray-500 lg:text-base"
          href="/sql">SQL</NavLi
        >
      </NavUl>
    </div>
  </div>

  <!-- div contains logout arrow and hanburger -->
  <div class="flex items-center text-white cursor-pointer">
    <!-- hamburger -->
    <NavHamburger />

    <!-- Logout Arrow icon -->
    <ArrowRightToBracketSolid />
  </div>
</Navbar>
