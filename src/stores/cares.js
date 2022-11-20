import { defineStore, acceptHMRUpdate  } from 'pinia';

export const useCares = defineStore('cares', {
    state: () => ({
        name: '',
        phone: '',
        errors: [],
        disableButton: false
    }),
    actions: {
        // Re-enables the disable submit button 
        clearButton() {
            this.disableButton = !this.disableButton;
        },
        // Simulated 1.5 second time to process a request
        processing() {
            setTimeout(this.clearButton, 1500);
        },
        // Simple form validation, Name field is required 
        // and if phone number is available validate only digits with a max of 10 characters
        checkForm(e) {
            const reNum =  /^[0-9]{10}$/;
            const reText =  /^[A-Za-z]*$/;
            const inputName = e.target[0].value;
            const inputPhone = e.target[1].value;

            this.errors = [];

            if (inputName.length === 0) this.errors.push("Name required.");
            if (inputName.length > 0 && !reText.test(inputName)) this.errors.push("Name field has errors.");
            if (inputPhone.length > 0 && !reNum.test(inputPhone)) this.errors.push("Phone field has errors.");

            if (!this.errors.length) {
                return true;
              }
        },
        // Form submit request
        onSubmitClick(e) {
            e.preventDefault();

            if (this.checkForm(e)) {
                this.name = e.target[0].value;;
                this.phone = e.target[1].value;;
                this.disableButton = !this.disableButton;
            }

            if (this.disableButton) this.processing();
        }
    },
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useCares, import.meta.hot));
}
