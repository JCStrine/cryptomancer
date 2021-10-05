<template>
  <div id="popUpBox">
    <div id="box">
      <div id="close-modal">
        <button @click="emitEvent">X</button>
      </div>
      <h1>Register</h1>
      <div v-show="error" class="error">{{ this.errorMsg }}</div>
      <form action="">
        <input type="text" v-model="email" placeholder="Email" />
        <br />
        <input type="password" v-model="password" placeholder="Password" />
        <br />
        <button @click.prevent="emitOpenLogin" id="register">Login</button>
        <button @click.prevent="register">Register</button>
      </form>
    </div>
  </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: "",
      error: null,
      errorMsg: "",
    };
  },

  computed: {
    selectedFavorites() {
      let arr = [];
      let currentFavorites = this.$store.state.favorites;
      for (let i = 0; i < currentFavorites.length; i++) {
        arr.push(currentFavorites[i].name);
      }
      return arr;
    },
  },

  methods: {
    emitOpenLogin() {
      this.$emit("open-login");
    },

    async register() {
      if (this.email !== "" || this.password !== "") {
        const auth = await getAuth();
        const db = await getDatabase();
        let uid;
        await createUserWithEmailAndPassword(auth, this.email, this.password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            uid = user.uid;
            // ...
          })
          .catch((error) => {
            console.log(error);
            // ..
          });
        console.log(uid);

        set(ref(db, "users/" + uid), {
          email: this.email,
          favorites: this.selectedFavorites,
          coinAmounts: {},
        });
        this.$emit("close-modal");
      }
    },
    emitEvent() {
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