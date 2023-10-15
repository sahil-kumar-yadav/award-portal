<script>
  import { base } from "$app/paths";
  import { Button } from 'flowbite-svelte';
</script>

<div class="box">
  <h1 class="title">Create Account</h1>
  <main>
    <form>
      <div>
      <label for="name">Your Name as appearing in IEEE Account*</label>
        <input type="text" id="email" name="email" value="" />
      </div>
      <div>
      <label for="name">IEEE Membership No.</label>
        <input type="password" id="password" name="password" value="" />
      </div>
      <div>
      <label for="name">IEEE Membership Grade</label>
        <input type="text" id="email" name="email" value="" />
      </div>
      <div>
      <label for="name">IEEE Section</label>
        <input type="text" id="email" name="email" value="" />
      </div>
      <div>
      <label for="name">Affiliation (Institute or Organization Name)</label>
        <input type="text" id="email" name="email" value="" />
      </div>
      <div>
      <label for="name">Email</label>
        <input type="text" id="email" name="email" value="" />
      </div>

      <div>
      <label for="name">Password</label>
        <input type="password" id="password" name="password" value="" />
      </div>
      <div>
      <label for="name">Confirm Password</label>
        <input type="password" id="password" name="password" value="" />
      </div>

      <div>
      <label for="name">Phone</label>
        <input type="number" id="phone" name="phone" value="" />
      </div>
      <Button class="mt-4" color=blue type="submit">Submit</Button>
    </form>
  </main>
</div>

<style>
  .box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .title {
    font-size: 40px;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 300px;
  }

  form > div {
    justify-content: space-between;
    margin-top: 10px;
  }

  form > div > input {
    width: 100%;
  }
</style>
