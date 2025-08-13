<template>
  <div class="container">
    <h1>WEATHER APP</h1>


    <div class="search-bar">
      <input
        v-model="city"
        type="text"
        placeholder="Enter city name"
        class="form-control mb-2"
      />
      <button @click="searchByCity" class="btn btn-primary">
        Search
      </button>
    </div>

    <div v-if="weatherData" class="weather-result mt-4">
      <h2>{{ weatherData.name }}, {{ weatherData.sys.country }}</h2>
      <div class="d-flex align-items-center">
        <img :src="iconUrl" alt="Weather Icon" style="width:60px; height:60px;" />
        <p class="fs-4 mb-0 ms-3">{{ temperature }} °C</p>
      </div>
      <p class="text-muted">{{ weatherData.weather[0].description }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

const apikey = "d4e10aa0bbb37e0e043e4d904ae9809f";

export default {
  name: "WeatherView",
  data() {
    return {
      city: "",
      weatherData: null
    };
  },
  computed: {
    temperature() {
      return this.weatherData
        ? Math.floor(this.weatherData.main.temp - 273.15)
        : null;
    },
    iconUrl() {
      return this.weatherData
        ? `http://openweathermap.org/img/w/${this.weatherData.weather[0].icon}.png`
        : null;
    }
  },
  mounted() {
    this.fetchCurrentLocationWeather();
  },
  methods: {
    async fetchCurrentLocationWeather() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
          const { latitude, longitude } = position.coords;
          const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apikey}`;
          await this.fetchWeatherData(url);
        });
      }
    },
    async searchByCity() {
      if (!this.city) return;
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${apikey}`;
      await this.fetchWeatherData(url);
    },
    async fetchWeatherData(url) {
      try {
        const response = await axios.get(url);
        this.weatherData = response.data;
      } catch (error) {
        console.error("Error fetching weather data:", error);
        alert("Failed to fetch weather. Please check city name or try again.");
      }
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: auto;
  padding: 20px;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

.search-bar input {
  width: 100%;
  padding: 10px;
}

.search-bar button {
  width: 100%;
}

.weather-result {
  text-align: center;
}
</style>
