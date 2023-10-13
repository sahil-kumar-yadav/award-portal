<script>
  import "../app.css";
  import {
    Navbar,
    NavBrand,
    NavLi,
    NavUl,
    NavHamburger,
    Badge,
  } from "flowbite-svelte";
  import {
    Input,
    Label,
    Textarea,
    Button,
    Checkbox,
    Modal,
  } from "flowbite-svelte";
  import logo from "../images/bslogo.png";
  import add from "../images/add.svg";
  import emailjs from "@emailjs/browser";

  let today = new Date().toISOString().split("T")[0];

  let formModal = false;

  let committee_name = "";
  let committee_sd = "";
  let committee_ed = "";
  let committee_chair = "";
  let committee_chair_email = "";
  let committee_chair_phone = "";
  let committee_description = "";
  let newMemberEmail = "";
  let newMemberName = "";
  let members = [];

  function addMember(e) {
    e.preventDefault();
    if (newMemberName.trim() !== "" && newMemberEmail.trim() !== "") {
      members = [...members, { name: newMemberName, email: newMemberEmail }];
      newMemberName = ""; // Clear the name input
      newMemberEmail = ""; // Clear the email input
    }
    formModal = false;
    console.log(members);
  }

  const addCommittee = () => {
    console.log(committee_name);
    console.log(committee_sd);
    console.log(committee_ed);
    console.log(committee_chair);
    console.log(committee_chair_email);
    console.log(committee_chair_phone);
    console.log(committee_description);
    console.log(members);

    emailjs
      .send(
        "service_hcds1on",
        "template_eke7upg",
        {
          from_name: committee_chair,
          to_name: "Aryan Shinde",
          committeename: committee_name,
          to_email: committee_chair_email,
          message: `Hello ${committee_chair}, you've been added in "${committee_name}" committee. You are the chair for this committee, here all the committee members can contact you via your email or phone number.`,
          committeedescription: committee_description,
        },
        "sWSGeQspNkkT6Ru87"
      )
      .then(
        (res) => {
          console.log(res);
        },
        (error) => {
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );

    for (const member of members) {
      console.log(member.email);
      emailjs
        .send(
          "service_hcds1on",
          "template_eke7upg",
          {
            from_name: member.name,
            to_name: "Aryan Shinde",
            committeename: committee_name,
            to_email: member.email,
            message: `Hello ${member.name}, you've been added in "${committee_name}" committee. Your chair is: Mr./Mrs. ${committee_chair}, contact them at: Email - ${committee_chair_email} / Phone: ${committee_chair_phone}.`,
            committeedescription: committee_description,
          },
          "sWSGeQspNkkT6Ru87"
        )
        .then(
          (res) => {
            console.log(res);
          },
          (error) => {
            console.error(error);

            alert("Ahh, something went wrong. Please try again.");
          }
        );
    }
  };
</script>

<div class="relative px-8">
  <Navbar class="px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 border-b">
    <NavBrand href="/">
      <img
        src={logo}
        class="mr-3 h-[70px] sm:h-[90px]"
        alt="Bombay Section Logo"
      />
      <span
        class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
        >IEEE Bombay Section</span
      >
    </NavBrand>
    <NavHamburger />
    <NavUl>
      <NavLi href="/" active={true}>. . DEMO NAVBAR . .</NavLi>
    </NavUl>
  </Navbar>
  <div class="pt-[100px]">
    <div>
      <div id="form_heading" class="flex justify-center">
        <h1>Award Committee Form</h1>
      </div>
      <div id="form_body">
        <form>
          <div class="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <Label for="committee_name" class="mb-2">Committee Name</Label>
              <Input
                type="text"
                id="committee_name"
                placeholder="Demo Committee"
                bind:value={committee_name}
                required
              />
            </div>
            <div>
              <Label for="start_date" class="mb-2">Committee Term</Label>
              <div class="grid gap-6 mb-6 grid-cols-2">
                <Input
                  type="date"
                  id="start_date"
                  min={today}
                  bind:value={committee_sd}
                  required
                />
                <Input
                  type="date"
                  id="end_date"
                  min={today}
                  bind:value={committee_ed}
                  required
                />
              </div>
            </div>
            <div>
              <Label for="chair" class="mb-2">Chair Name</Label>
              <Input
                type="text"
                id="chair"
                placeholder="Aryan Shinde"
                bind:value={committee_chair}
                required
              />
            </div>
            <div>
              <Label for="chair_email" class="mb-2">Chair Email</Label>
              <Input
                type="text"
                id="chair_email"
                placeholder="shindearyan179@ieee.org"
                bind:value={committee_chair_email}
                required
              />
            </div>
            <div>
              <Label for="phone" class="mb-2">Chair Phone Number</Label>
              <Input
                type="tel"
                id="phone"
                placeholder="+91 8097296453"
                bind:value={committee_chair_phone}
                required
              />
            </div>
          </div>
          <div class="mb-6">
            <Label for="email" class="mb-2">Committee Members</Label>
            <!-- <Input
              type="email"
              id="email"
              placeholder="john.doe@company.com"
              required
            /> -->
            <Button on:click={() => (formModal = true)}>Add Member</Button>

            <Modal
              bind:open={formModal}
              size="xs"
              autoclose={false}
              class="w-full"
            >
              <form class="flex flex-col space-y-6" action="#">
                <h3
                  class="mb-4 text-xl font-medium text-gray-900 dark:text-white"
                >
                  Add a member to committee
                </h3>
                <Label class="space-y-2">
                  <span>Member Name</span>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Aryan"
                    required
                    bind:value={newMemberName}
                  />
                </Label>
                <Label class="space-y-2">
                  <span>Member Email</span>
                  <Input
                    type="email"
                    name="email"
                    placeholder="shindearyan179@ieee.org"
                    bind:value={newMemberEmail}
                    required
                  />
                </Label>
                <Button
                  type="submit"
                  class="w-full1"
                  on:click={(e) => addMember(e)}>Add</Button
                >
              </form>
            </Modal>
            <ul class="flex align-middle">
              {#each members as { name, email }}
                <li class="mr-2 mt-4" title={email}>
                  <Badge color="green">{name}</Badge>
                </li>
              {/each}
            </ul>
          </div>
          <div class="mb-6">
            <Label for="confirm_password" class="mb-2"
              >Committee Description</Label
            >
            <Textarea
              id="description"
              name="description"
              rows="4"
              placeholder="Add the committee description . . ."
              bind:value={committee_description}
              required
            />
          </div>
          <Checkbox class="mb-6 space-x-1" required checked disabled>
            Share the details with committee members and chair.
          </Checkbox>
          <Button type="submit" on:click={addCommittee}>Add</Button>
        </form>
      </div>
    </div>
  </div>
</div>
