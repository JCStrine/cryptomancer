<template>
  <h6 id="lastUpdate">Table updated at: {{ lastUpdate }}</h6>
  <div class="table-container">
    <table>
      <tr>
        <th>User Amount</th>
        <th @click="sort('market_cap_rank')">Rank</th>
        <th id="img-column"></th>
        <th @click="sort('name')">Name</th>
        <th @click="sort('current_price')">Price</th>
        <th @click="sort('price_change_24h')">Price Change 24h</th>
        <th @click="sort('price_change_percentage_24h')">Price Change % 24h</th>
        <th @click="sort('price_change_percentage_7d_in_currency')">
          Price Change % 7d
        </th>
        <th @click="sort('price_change_percentage_30d_in_currency')">
          Price Change % 30d
        </th>
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
      sortInfo: {
        isSorted: false,
        sortParam: "",
        sortValue: true,
      },
    };
  },
  computed: {
    favoriteStore() {
      return this.$store.state.favorites;
    },
  },
  methods: {
    sort(id) {
      this.sortInfo.isSorted = true;
      this.sortInfo.sortParam = id;

      if (id == "name") {
        if (this.sortInfo.sortValue === true) {
          this.nonFavorites = this.nonFavorites.sort((a, b) => {
            return a[id].localeCompare(b[id]);
          });
          this.favorites = this.favorites.sort((a, b) => {
            return a[id].localeCompare(b[id]);
          });
        }
        if (this.sortInfo.sortValue === false) {
          this.nonFavorites = this.nonFavorites.sort((a, b) => {
            return a[id].localeCompare(b[id]);
          });
          this.nonFavorites = this.nonFavorites.reverse();
          this.favorites = this.favorites.sort((a, b) => {
            return a[id].localeCompare(b[id]);
          });
          this.favorites = this.favorites.reverse();
        }
      } else {
        if (this.sortInfo.sortValue === true) {
          for (let i = 0; i < this.nonFavorites.length; i++) {
            this.nonFavorites = this.nonFavorites.sort((a, b) => {
              return a[id] - b[id];
            });
          }
          for (let i = 0; i < this.favorites.length; i++) {
            this.favorites = this.favorites.sort((a, b) => {
              return a[id] - b[id];
            });
          }
        }
        if (this.sortInfo.sortValue === false) {
          for (let i = 0; i < this.nonFavorites.length; i++) {
            this.nonFavorites = this.nonFavorites.sort((a, b) => {
              return b[id] - a[id];
            });
          }
          for (let i = 0; i < this.favorites.length; i++) {
            this.favorites = this.favorites.sort((a, b) => {
              return b[id] - a[id];
            });
          }
        }
      }

      this.sortInfo.sortValue = !this.sortInfo.sortValue;
    },
    formatData(data) {
      let arr = [...new Set(data)];
      let favorites = this.favoriteStore;

      for (let i = 0; i < arr.length; i++) {
        for (let a = 0; a < favorites.length; a++) {
          if (arr[i].name == favorites[a].name) {
            favorites[a] = arr[i];
          }
        }
      }

      arr = arr.filter((ar) => !favorites.find((rm) => rm.name === ar.name));
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
      if (this.sortInfo.isSorted === true) this.sort(this.sortInfo.sortParam);
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
