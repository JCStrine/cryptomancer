<template>
  <tr class="row">
    <td><input type="text" v-model="userAmount" /></td>
    <td>{{ coin.market_cap_rank }}</td>
    <td><img :src="image" alt="" /></td>
    <td>{{ coin.name }}</td>
    <td>${{ coinPrice }}</td>
    <td :style="dayClass">{{ dayPriceChange }}</td>
    <td :style="dayPercentClass">{{ dayPercentChange }}</td>
    <td :style="weekPercentClass">{{ weekPercentChange }}</td>
    <td :style="monthPercentClass">{{ monthPercentChange }}</td>

    <td>${{ marketCap }}</td>
    <td><i :class="favorite" @click="toggleFavorite"></i></td>
  </tr>
</template>

<script>
export default {
  name: "Coin",
  data() {
    return {
      positiveChange: {
        color: "green",
      },
      negativeChange: {
        color: "red",
      },
      userAmount: null,
    };
  },
  props: {
    coin: Object,
    isFavorite: Boolean,
  },
  computed: {
    favorite() {
      if (this.isFavorite) return "icon-star";
      else return "icon-star-empty";
    },
    image() {
      if (this.coin.image != null) return this.coin.image;
      else return "N/A";
    },
    coinPrice() {
      if (this.coin.current_price != null) {
        if (this.coin.current_price >= 1) {
          return this.coin.current_price.toFixed(2);
        } else {
          return this.coin.current_price.toFixed(5);
        }
      } else return "N/A";
    },
    dayPriceChange() {
      if (this.coin.price_change_24h !== null) {
        if (this.userAmount !== null && this.userAmount > 0) {
          let num = this.coin.price_change_24h * this.userAmount;
          return Number(num.toFixed(8));
        } else return Number(this.coin.price_change_24h.toFixed(8));
      } else return "N/A";
    },
    dayPercentChange() {
      if (this.coin.price_change_percentage_24h !== null)
        return this.coin.price_change_percentage_24h.toFixed(2);
      else return "N/A";
    },
    weekPercentChange() {
      if (this.coin.price_change_percentage_7d_in_currency !== null)
        return this.coin.price_change_percentage_7d_in_currency.toFixed(2);
      else return "N/A";
    },
    monthPercentChange() {
      if (this.coin.price_change_percentage_30d_in_currency !== null)
        return this.coin.price_change_percentage_30d_in_currency.toFixed(2);
      else return "N/A";
    },
    marketCap() {
      if (this.coin.market_cap != null) {
        let num = Number(this.coin.market_cap.toFixed(2));
        return num.toLocaleString();
      } else return "N/A";
    },
    dayClass() {
      if (this.dayPriceChange > 0) {
        return this.positiveChange;
      } else {
        return this.negativeChange;
      }
    },
    dayPercentClass() {
      if (this.dayPercentChange > 0) {
        return this.positiveChange;
      } else {
        return this.negativeChange;
      }
    },
    weekPercentClass() {
      if (this.weekPercentChange > 0) {
        return this.positiveChange;
      } else {
        return this.negativeChange;
      }
    },
    monthPercentClass() {
      if (this.monthPercentChange > 0) {
        return this.positiveChange;
      } else {
        return this.negativeChange;
      }
    },
  },
  methods: {
    async toggleFavorite() {
      if (!this.isFavorite) {
        await this.$store.commit("addFavorite", this.coin);
      } else if (this.isFavorite) {
        await this.$store.commit("removeFavorite", this.coin.name);
      }
      this.$emit("format-data");
    },
  },
};
</script>

<style scoped>
img {
  height: 30px;
  width: 30px;
}

input {
  width: 150px;
  text-align: center;
}

tr {
  border-bottom: 1px solid gray;
  padding: 10px;
  margin: 10px;
}
</style>