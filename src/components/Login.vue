<template>
  <div id="popUpBox">
    <div id="box">
      <div id="close-modal">
        <button @click="emitClose">X</button>
      </div>
      <h1>Login</h1>
      <form action="">
        <input type="text" v-model="email" placeholder="Email" />
        <br />
        <input type="password" v-model="password" placeholder="Password" />
        <br />
        <button @click.prevent="login">Login</button>
        <button @click.prevent="emitOpenRegister" id="register">
          Register
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    async login() {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage, errorCode);
        });
    },
    emitOpenRegister() {
      this.$emit("open-register");
    },

    emitClose() {
      this.$emit("close-modal");
    },
  },
};
</script>

<style scoped>
#close-modal {
  display: flex;
  flex-direction: row;
}

#popUpBox {
  height: 300px;
  width: 300px;
  overflow: hidden;
  background: grey;
  box-shadow: 0 0 10px black;
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  padding: 10px;
  text-align: center;
  display: border-box;
}
</style>