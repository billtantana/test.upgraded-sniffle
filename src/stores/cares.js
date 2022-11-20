import { defineStore  } from 'pinia';

export const useCares = defineStore('cares', {
    state: () => ({
        name: '',
        phone: '',
        errors: [],
        disableButton: false
    }),
    actions: {
        clearButton() {
            this.disableButton = !this.disableButton;
        },
        processing() {
            setTimeout(this.clearButton, 1500);
        },
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

// if (import.meta.hot) {
//     import.meta.hot.accept(acceptHMRUpdate(useCares, import.meta.hot));
// }
