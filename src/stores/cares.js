import { defineStore, acceptHMRUpdate } from 'pinia';

export const useCares = defineStore('cares', {
    state: () => {
        return {};
    },

    actions: {},
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useCares, import.meta.hot));
}
