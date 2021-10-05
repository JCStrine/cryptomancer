<template>
  <div id="title" class="navbar">
    <h1>CRYPTOMANCER</h1>
  </div>
  <div>
  </div>

  <Login
    v-if="login"
    @close-modal="toggleLogin"
    @open-register="toggleRegister"
  />
  <Register
    v-if="register"
    @close-modal="toggleRegister"
    @open-login="toggleLogin"
  />

  <Content />
</template>

<script>
import { getAuth } from "firebase/auth";
import Content from "./components/Content.vue";
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";
export default {
  name: "App",
  data() {
    return {
      login: false,
      register: false,
      displayName: "",
    };
  },
  components: {
    Content,
    Login,
    Register,
  },
  created() {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user !== null) {
      // The user object has basic properties such as display name, email, etc.
      this.displayName = user.email;

      // The user's ID, unique to the Firebase project. Do NOT use
      // this value to authenticate with your backend server, if
      // you have one. Use User.getToken() instead.
    }
  },
  methods: {
    toggleLogin() {
      this.login = !this.login;
      if (this.login === true) this.register = false;
    },
    toggleRegister() {
      this.register = !this.register;
      if (this.register === true) this.login = false;
    },
  },
};
</script>

<style>
body {
  background: #2c3e50;
  color: #fff;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
img {
  padding: 5px;
  height: 40px;
  width: 30px;
}
h1 {
  justify-content: center;
  align-content: center;
}
#title {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 50px;
  flex-wrap: wrap;
}
</style>
