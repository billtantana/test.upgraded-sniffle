<template>
    <h2 class="heading-text">
        <slot></slot>
    </h2>
</template>

<style lang="postcss" scoped>
.heading-text {
    margin-bottom: 1.25rem;
    padding-bottom: 0.625rem;
    border-bottom: 0.375rem solid var(--color-highlight);
    font-size: 2.75rem;
    text-transform: uppercase;
}
</style>
