<template>
    <h2 class="heading-text form-grid-header">
        <slot></slot>
    </h2>
</template>

<style lang="postcss" scoped>
.heading-text {
    margin-bottom: 1.25rem;
    padding-bottom: 0.625rem;
    border-bottom: 0.375rem solid var(--color-highlight);
    font-size: 1.75rem;
    text-transform: uppercase;

    @media screen and (min-width: 768px) {
        font-size: 2.1rem;
    }
    
    @media screen and (min-width: 992px) {
        font-size: 2.75rem;
    }
}

</style>
