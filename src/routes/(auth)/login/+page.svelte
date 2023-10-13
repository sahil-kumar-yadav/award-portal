<script>
  import {base} from "$app/paths";

  // Component logic and state
  let username = "";
  let password = "";

  // form submission
  function handleSubmit(event) {
    event.preventDefault();
    // authentication logic here
    console.log("Username:", username);
    console.log("Password:", password);
  }
</script>

<div class="div">
  <img class="img rounded-lg" src="{base}/bg.png" alt="" />
  <div class="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
    <div class="flexstyle2">
      <h6
        class="mb-4 text-left text-1xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
      >
        Welcome, Back!
      </h6>
      <h1
        class="color text-blue-700 mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
      >
        Sign In to your <br /> account
      </h1>
      <img class="awaimg" src="{base}/award.png" alt="" />
    </div>
    <div class="divfields" >
      <form class="flexstyle" on:submit={handleSubmit}>
        <div class="logodiv">
          <img class="logo" src="{base}/logo.jpeg" alt="" />
        </div>
        <input
          style="width: 60%;"
          class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="text"
          placeholder="Username"
          bind:value={username}
          required
        />
        <input
          style="width: 60%;margin-top:3%;"
          class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="password"
          placeholder="Password"
          bind:value={password}
          required
        />
        <button
          type="button"
          style="border-radius: 50px;margin-top:3%; width:60%"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >Login</button
        >
        <div class="logodiv">
          <p
            style="font-size: 12px; margin-top: 3%; cursor: pointer; text-align: center; width:'60%"
          >
            If you don’t an account you can <strong
              style="color: #4461F2; text-decoration-line: underline"
              >SignUp here!</strong
            >
          </p>
        </div>
      </form>
    </div>
  </div>
</div>

<style>
  .img {
    height: 100vh;
    width: auto;
    position: absolute;
    z-index: -1;
  }
  .div {
    height: 95vh;
    position: relative;
    overflow: hidden;
  }
  .awaimg {
    height: 40vh;
  }
  .flexstyle {
    width: 100%;
    height: 100vh;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    margin-right: 20%;
    align-items: flex-end;
  }
  .flexstyle2 {
    width: 60%;
    height: 100vh;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .divfields{
    margin-right: 20%;
  }
  @media screen and (max-width: 992px) {
    .flexstyle2 {
      display: none;
    }
    .flexstyle {
      margin-right: 0px;
      z-index: 1000;
      align-items: center;
      width: 100%;
    }
    .divfields{
    margin-right: 0;
  }
  }

  .color {
    line-height: 1.3;
  }
  .text-left {
    text-align: left;
  }
  .logo {
    height: 8vh;
  }
  .logodiv {
    display: flex;
    margin-bottom: 5%;
    justify-content: center;
    align-items: center;
    width: 60%;
  }
</style>
