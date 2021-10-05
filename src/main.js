import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";
import firebase from "firebase/compat/app";

const firebaseConfig = {
  apiKey: "AIzaSyAiJQEU9WaijGb_Ve7R2L-ev14DsbnXn1Y",
  authDomain: "cryptomancer-21240.firebaseapp.com",
  projectId: "cryptomancer-21240",
  storageBucket: "cryptomancer-21240.appspot.com",
  messagingSenderId: "1089908404375",
  appId: "1:1089908404375:web:f8ef4833c314752a23b9d2",
  measurementId: "G-PVKYC68MKJ",
};

const store = createStore({
  state() {
    return {
      favorites: [],
      coinData: [],
    };
  },
  mutations: {
    removeFavorite(state, coin) {
      for (let i = 0; i < state.favorites.length; i++) {
        if (state.favorites[i].name == coin) state.favorites.splice(i, 1);
      }
    },
    addFavorite(state, coin) {
      state.favorites.push(coin);
    },
    setCoinData(state, data) {
      state.coinData = data;
    },
  },
});

firebase.initializeApp(firebaseConfig);

createApp(App)
  .use(store)
  .mount("#app");
