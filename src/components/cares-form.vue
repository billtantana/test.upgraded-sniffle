<template>
  <div class="cares-form">
    <HeadingText>Shift your carreer into overdrive!</HeadingText>
    <img :src="CareerImage" alt="Careers">
    <div class="form-container">
      <p v-show="!careStore.disableButton && !careStore.errors.length" class="form-text">We're seeking friendly, happy individuals up for the challeng to change the way people view the automotive industry. If you agree that a customer's time is valuable and positive human interaction is important, then we want to hear from you!</p>
      <div v-show="careStore.errors.length">
        <p class="form-text error-message">There was an error in the form.</p>
        <ul class="error-message">
          <li v-for="(error, index) in careStore.errors" :key="index" >{{ error }}</li>
        </ul>
      </div>
      <div v-show="careStore.disableButton" class="processing-form">
        <p class="form-text">Thank your for you intrest to <strong>shift your carreer into Overdrive.</strong> Your request in being process.</p>
        <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
      </div>
      <form @submit="careStore.onSubmitClick">
          <label for="form_name">Name (required*)</label>
          <input type="text" name="name" id="form_name" >
          <label for="phone">Phone</label>
          <input type="tel" name="" id="phone">
          <input type="submit" :value="!careStore.disableButton ? 'I\'m Interested' : 'Processing...'" :disabled="careStore.disableButton">
      </form>
    </div>
    
  </div>
</template>

<script setup>
import HeadingText from '@/components/heading-text.vue';
import CareerImage from '@/assets/careers.jpg'
import { useCares } from '@/stores/cares'

const careStore = useCares();

</script>

<style lang="postcss" scoped>
.cares-form {
  margin-top: 0.625rem; 
  margin-bottom: 1.625rem;
  display: grid;
  grid-template-areas: "title" "picture" "form";
  grid-template-columns: auto;
  grid-template-rows: auto;

  @media screen and (min-width: 992px) {
    grid-template-areas: "title title" "form picture";
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1.875rem;
  }
}

  .heading-text {
    grid-area: title;
  }

  img {
    grid-area: picture;
    width: 100%;
    clip-path: polygon(1% 0, 100% 1%, 100% 100%, 7% 100%);
    object-fit: cover;
    height: 100%;
  }
  .form-container {
    grid-area: form;
  }
  .form-text {
    font-size: 0.875rem;

    @media screen and (min-width: 768px) {
        font-size: 1rem;
    }

    @media screen and (min-width: 992px) {
      margin-top: 0rem ;
    }    
  }
  
  .error-message {
    color: red;
    font-weight: bold;
  }

  form {
    display: grid;
  }

  label {
    margin-top: 0.625rem;
    margin-bottom: 0.25rem;
    font-size: 1rem;
    font-weight: bold;

    @media screen and (min-width: 768px) {
        font-size: 1.17rem;
    }
  }

  input[type=text],
  input[type=tel] {
    height: 2.15rem;
    padding: 0.5rem
  }

  input[type=submit] {
    height: 3.25rem;
    background-color: var(--color-highlight);
    font-size: 1rem;
    font-weight: bold;
    margin-top: 1.225rem; 
    border-color: var(--color-highlight);
    border-style: solid;
    cursor: pointer;

    @media screen and (min-width: 768px) {
        font-size: 1.17rem;
    }
  }

  input {
    border-radius: 0.425em;
    border: 1px solid
  }

  .processing-form {
    display: grid;
  }

  .lds-ellipsis {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 36px;
    margin: auto
  }
  .lds-ellipsis div {
    position: absolute;
    top: 14px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: var(--color-highlight);
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  .lds-ellipsis div:nth-child(1) {
    left: 8px;
    animation: lds-ellipsis1 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(2) {
    left: 8px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(3) {
    left: 32px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(4) {
    left: 56px;
    animation: lds-ellipsis3 0.6s infinite;
  }
  @keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(24px, 0);
    }
  }
</style>