<script>
    import { base } from "$app/paths";
    import { Select, Label, Input } from "flowbite-svelte";
    let selected;
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
        <h1
        class="color mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
        >
        Forgot Password?
       
        </h1>
        <img class="awaimg" src="{base}/award.png" alt="" />
      </div>
      <div class="divfields">
        <form class="flexstyle" on:submit={handleSubmit}>
          <div class="logodiv">
            <img class="logo" src="{base}/logo.jpeg" alt="" />
          </div>
          <h6
          style="font-size: 12px;font-weight:500; text-align:center"
            class="mb-4 text-left text-1xl font-bold leading-none tracking-tight text-gray-600 md:text-5xl lg:text-6xl dark:text-white"
          >
          Enter the email address you used when you joined and <br/>
          we’ll send you instructions to reset your password. <br/>
          <br/>
          For security reasons, we do NOT store your password. <br/>
          So rest assured that we will never send your password via email.
          </h6>
          <Input
            type="email"
            style="width: 60%;margin-top:3%;"
            placeholder="Enter email address"
            bind:value={username}
            required
          />
          
          
          <button
            type="button"
            style="border-radius: 50px;margin-top:3%; width:60%"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >Send Reset Instructions</button
          >
         
          <div class="logodiv">
            <p
              style="font-size: 12px; margin-top: 3%; cursor: pointer; text-align: center; width:'60%"
            >
              Know your password? <a  href="/login"
                style="color: #4461F2; text-decoration-line: underline"
                >Login here!</a
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
      height: 88vh;
      position: relative;
      overflow: hidden;
      margin-top: -2%;
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
      width: 100%;
      height: 100vh;
      z-index: 100;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    .divfields {
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
        justify-content: flex-start;
        padding-top: 15%;
      }
      .divfields {
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
  