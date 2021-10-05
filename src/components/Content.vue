<template>
  <h6 id="lastUpdate">Table updated at: {{ lastUpdate }}</h6>
  <div class="table-container">
    <table>
      <tr>
        <th>User Amount</th>
        <th>Rank</th>
        <th id="img-column"></th>
        <th>Name</th>
        <th>Price</th>
        <th>Price Change 24h</th>
        <th>Price Change % 24h</th>
        <th>Price Change % 7d</th>
        <th>Price Change % 30d</th>
        <th>Market Cap</th>
      </tr>

      <tbody>
        <Coin
          v-for="coin in favorites"
          :key="coin"
          :coin="coin"
          :isFavorite="true"
          @format-data="formatData(this.coinData)"
        />
        <Coin
          v-for="coin in nonFavorites"
          :key="coin"
          :coin="coin"
          :isFavorite="false"
          @format-data="formatData(this.coinData)"
        />
      </tbody>
    </table>
  </div>
</template>

<script>
import Coin from "./Coin.vue";
export default {
  name: "Content",
  data() {
    return {
      coinData: [],
      lastUpdate: null,
      favorites: [],
      nonFavorites: [],
    };
  },
  computed: {
    favoriteStore() {
      return this.$store.state.favorites;
    },
  },
  methods: {
    formatData(data) {
      let arr = [...new Set(data)];
      let favorites = this.favoriteStore;
      for (let i = 0; i < arr.length; i++) {
        for (let a = 0; a < favorites.length; a++) {
          if (arr[i].name == favorites[a].name) {
            favorites[a] = arr[i];
            arr.splice(i, 1);
          }
        }
      }
      this.favorites = favorites;
      this.nonFavorites = arr;
    },
    update() {
      let today = new Date();
      let date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
      let time =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      this.lastUpdate = time + ", " + date;
    },

    async getData() {
      const res = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24%2C7d%2C30d"
      );
      this.coinData = await res.json();
      this.update();
      this.formatData(this.coinData);
    },
  },
  created() {
    this.getData();
    setInterval(this.getData, 60000);
  },
  components: { Coin },
};
</script>

<style>
#lastUpdate {
  width: 100%;
}

.table-container {
  justify-content: center;
  align-content: center;
  display: flex;
  flex-wrap: wrap;
}

table {
  width: 80%;
  border-collapse: collapse;
  border-spacing: 0 5px;
}
tr {
  border-bottom: 1px solid gray;
}

td {
  height: 50px;
}
</style>
