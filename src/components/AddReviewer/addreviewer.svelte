<script>
  import { Card, Label, Input, Button } from "flowbite-svelte";
  import { EnvelopeSolid, UserCircleOutline } from "flowbite-svelte-icons";
</script>

<!-- this is the name of the website -->
<h2
  class="tracking-widest text-4xl font-medium dark:text-white mt-3 mb-5 text-center"
>
  Award Management System
</h2>

<!-- card container to which consist of the form(use for shadow border) -->
<Card class="mx-auto my-auto w-auto">
heading of the form
  <h2 class="text-4xl font-light dark:text-white text-center">
    Add New Reviewer
  </h2>

 <!-- this div consist lable(name) icon and input -->
  <div class="mb-6">
    <Label for="input-group-1" class="block mb-2 mt-6 text-lg">Name *</Label>
    <Input id="email" type="email" placeholder="Full Name">
      <UserCircleOutline
        slot="left"
        class="w-5 h-5 text-gray-500 dark:text-gray-400"
      />
    </Input>
  </div>

  <!-- this div consist lable(email) icon and input -->
  <div class="mb-6">
    <Label for="input-group-1" class="block mb-2 text-lg">Your Email *</Label>
    <Input id="email" type="email" placeholder="name@gmail.com">
      <EnvelopeSolid
        slot="left"
        class="w-5 h-5 text-gray-500 dark:text-gray-400"
      />
    </Input>
  </div>

  <!-- this div consist lable(Institute) icon and input -->
  <div class="mb-6">
    <Label for="input-group-1" class="block mb-2 text-lg"
      >Affiliation (Institute or Organization Name / Section Name) *</Label
    >
    <Input id="email" type="email" placeholder="Institute/University name">
      <!-- <HomeSolid
        slot="left"
        class="w-5 h-5 text-gray-500 dark:text-gray-400"
      /> -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        fill="#808080"
        version="1.1"
        id="Capa_1"
        width="20px"
        height="20px"
        viewBox="0 0 31.535 31.535"
        xml:space="preserve"
        slot="left"
      >
        <g>
          <path
            d="M31.535,13.503V11.1h-3.154V9.441L15.767,0.679L3.154,9.441V11.1H0v2.404h4.224V25.04H0.986L0,30.856h31.535l-0.986-5.816   h-3.238V13.503H31.535z M15.768,4.246c1.113,0,2.015,0.903,2.015,2.017c0,1.113-0.902,2.016-2.015,2.016   c-1.114,0-2.018-0.903-2.018-2.016C13.75,5.148,14.654,4.246,15.768,4.246z M10.688,25.04H7.916V13.503h2.772V25.04z M17.153,25.04   h-2.771V13.503h2.771V25.04z M23.619,25.04h-2.771V13.503h2.771V25.04z"
          />
        </g>
      </svg>
    </Input>
  </div>

  <!-- this div has the button -->
  <div class="flex justify-center">
    <Button color="blue" class="w-52 mx-auto">Add Reviewer</Button>
  </div>
</Card>
