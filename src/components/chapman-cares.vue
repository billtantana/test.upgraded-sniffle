<script setup>
import HeadingText from '@/components/heading-text.vue';
import CaresBanner from '@/assets/cares-banner.jpg';
import CanineCompanions from '@/assets/canine-companions.jpg'
import MakingStrides from '@/assets/making-strides.jpg'

const events = [
    {
        name: 'Making Strides Against Cancer',
        text: 'Thousands of people, young and old, participated in the Making Strides Against Breast Cancer event at Tempe Beach Park. As a sponsorship partner, Chapman Auto brought the Breast Cancer Pace Car, driven by Danica Patrick. Chapman Auto employees participated in the walk, helping to raise thousands of dollars for breast cancer research.',
        image: MakingStrides,
        alt: 'Making Strides Event'
    },
    {
        name: 'Canine Companions For Independence',
        text: 'Chapman Auto has been a proud supporter of Canine Companions for Independence for more than 10 years. From sponsoring a golf tournament to puppy training, Chapman Auto employees are proud to work with CCI as they help others live happy, independent lives.',
        image: CanineCompanions,
        alt: 'Canine Companion Event'
    },
];
</script>

<template>
    <div class="chapman-cares">
        <HeadingText>Chapman Cares</HeadingText>

        <img :src="CaresBanner" alt="Chapman Cares" class="banner-img" />

        <div v-for="(event, index) in events" :key="index" class="event">
           <h3 class="event-name">{{ event.name }}</h3>
            <img :src="event.image" :alt="event.alt" class="event-img">
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
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
}

.event-name {
    margin-bottom: 1rem;
    flex-basis: 100%;
    font-size: 1rem;

    @media screen and (min-width: 768px) {
        font-size: 1.17rem;
    }
    
}

.event-text {
    flex-shrink: 0;
    flex-grow: 1;
    flex-basis: 50%;
    margin: 0;
    font-size: 0.875rem;

    @media screen and (min-width: 768px) {
        font-size: 1rem;
    }
}

.event-img {
    flex-shrink: 0;
    flex-grow: 0;
    padding-right: 0.625rem;
    max-width: 9.375rem;
    width: 100%;
    clip-path: polygon(1% 0, 100% 1%, 100% 100%, 7% 100%);
}
</style>
