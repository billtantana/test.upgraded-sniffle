<script setup>
import { ref } from 'vue';
import { $fetch } from 'ohmyfetch';

const currentTemp = ref(null);

const getTemp = async () => {
    // set variables (there are no errors in these strings)
    const url = 'http://api.openweathermap.org/data/2.5/weather';
    const zipCode = '85226';
    const apiKey = 'eab29b6df2f075a12235544ff5dcdd52';
    const units = 'imperial';
    const endpoint = `${url}?zip=${zipCode}&appid=${apiKey}&units=${units}`;

    // make api call
    const response = $fetch(endpoint);

    console.log(response);

    // display current temp on page
    currentTemp.value = response.main.temp;
};

getTemp();
</script>

<template>
    <header class="weather-banner">
        <span v-if="currentTemp">
            <strong>{{ currentTemp }}&deg;</strong> Is
        </span>
        <span>Current Temperature</span>
    </header>
</template>

<style lang="postcss" scoped>
.weather-banner {
    padding: 1rem;
    text-align: right;
}
</style>
