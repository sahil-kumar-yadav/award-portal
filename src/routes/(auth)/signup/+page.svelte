<script>
  let src =
    "https://ieeebombay.org/wp-content/uploads/2022/09/IEEE-BS-Logo.png";
</script>

<body>
  <div class="box">
    <h1 class="title"><strong>Award Management Portal</strong></h1>

    <div class="nav">
      <img src="http://localhost/oldsite/images/homepage.png" alt="" />
      <!-- <h1>hi</h1> -->
      <div class="div">
        <a href="/login">Login</a>
        <a href="/signup">Create Account</a>
      </div>
    </div>

    <h1>Create Account</h1>

    <main>
      <form>
        <label for="name">Your Name as appearing in IEEE Account *</label>
        <div>
          <input type="text" id="email" name="email" value="" />
        </div>
        <label for="name">IEEE Membership No. *</label>
        <div>
          <input type="password" id="password" name="password" value="" />
        </div>
        <label for="name">IEEE Membership Grade *</label>
        <div>
          <input type="text" id="email" name="email" value="" />
        </div>
        <label for="name">IEEE Section *</label>
        <div>
          <input type="text" id="email" name="email" value="" />
        </div>
        <label for="name">Affiliation (Institute or Organization Name) *</label>
        <div>
          <input type="text" id="email" name="email" value="" />
        </div>
        <label for="name">Email</label>
        <div>
          <input type="text" id="email" name="email" value="" />
        </div>
        <div>
          <label for="name">Password</label>
          <div>
            <input type="password" id="password" name="password" value="" />
          </div>
          <label for="name">Password</label>
          <div>
            <input type="password" id="password" name="password" value="" />
          </div>
        </div>
        <label for="name">Phone</label>
        <div>
          <input type="number" id="phone" name="phone" value="" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </main>
  </div>
</body>

<style>
  body {
    margin: 0;
    padding: 0;
    background-color: #f5f5f5;
  }
  .box * {
    display: flex;
    justify-content: center;
  }

  .box {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    background: white;
    margin: 3rem;
    border-radius: 10px;
    padding: 2rem;
  }

  .title {
    font-size: 40px;
  }

  .nav {
    padding: 0.7rem 10px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    background: #0d66a1 !important;
  }

  .nav img {
    filter: invert(1) grayscale(100%) brightness(200%);
    height: 30px;
    width: 38px;
    /* height: 30px; */
  }

  .nav a {
    margin: 0 10px;
    font-size: 20px;
    text-decoration: none;
    color: rgba(255, 255, 255, 0.75);
  }

  form {
    display: flex;
    flex-direction: column;
    width: 300px;
  }

  form > div {
    display: flex;
    justify-content: space-between;
  }

  form > div + * {
    margin-top: 10px;
  }
  form > div > input {
    width: 100%;
  }
</style>