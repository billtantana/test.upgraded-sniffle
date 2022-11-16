<script setup>
import HeadingText from '@/components/heading-text.vue';
import CaresBanner from '@/assets/cares-banner.jpg';

const events = [
    {
        name: 'Making Strides Against Cancer',
        text: 'Thousands of people, young and old, participated in the Making Strides Against Breast Cancer event at Tempe Beach Park. As a sponsorship partner, Chapman Auto brought the Breast Cancer Pace Car, driven by Danica Patrick. Chapman Auto employees participated in the walk, helping to raise thousands of dollars for breast cancer research.',
    },
    {
        name: 'Canine Companions For Independence',
        text: 'Chapman Auto has been a proud supporter of Canine Companions for Independence for more than 10 years. From sponsoring a golf tournament to puppy training, Chapman Auto employees are proud to work with CCI as they help others live happy, independent lives.',
    },
];
</script>

<template>
    <div class="chapman-cares">
        <HeadingText>Chapman Cares</HeadingText>

        <img :src="CaresBanner" alt="Chapman Cares" class="banner-img" />

        <div v-for="(event, index) in events" :key="index" class="event">
            <h3 class="event-name">{{ event.name }}</h3>
            <p class="event-text">{{ event.text }}</p>
        </div>
    </div>
</template>

<style lang="postcss" scoped>
.banner-img {
    width: 100%;
}

.event {
    margin-top: 2rem;
}

.event-name {
    margin-bottom: 1rem;
}
</style>
