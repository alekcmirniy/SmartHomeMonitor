<template>
    <form @submit.prevent = "handleSubmit" novalidate class = "contact-form">
        <div class = "form-group">
            <label for = "name">Имя<span class = "required">*</span></label>
            <input type = "text" id = "name" 
            @blur = "validateName" v-model.trim = "form.name"
            :class = "{ invalid: errors.name }"
            />
            <span class = "error">{{  errors.name }}</span>
        </div>

        <div class = "form-group">
            <label for = "email">Email<span class = "required">*</span></label>
            <input type = "text" id = "email" 
            @blur = "validateEmail" v-model.trim = "form.email"
            :class = "{ invalid: errors.email }"
            />
            <span class = "error">{{  errors.email }}</span>
        </div>

        <div class = "form-group">
            <label for = "message">Сообщение<span class = "required">*</span></label>
            <textarea id = "message" rows = "4"
            @blur = "validateMessage" v-model.trim = "form.message"
            :class = "{ invalid: errors.message }"
            ></textarea>
            <span class = "error"> {{ errors.message }}</span>
        </div>

        <div class = "form-group">
            <label for = "key">Для проверки введите ключ<span class = "required">*</span></label>
            <input type = "password" id = "key"
            @blur = "validateKey" v-model.number = "form.key"
            :class = "{ invalid: errors.key }"
            />
            <span class = "error">{{  errors.key }}</span>
        </div>

        <button type = "submit" class = "submit-btn">Отправить</button>
    </form>
</template>

<script>
export default {
    name: "ContactForm",
    data() {
        return {
            form: {
                name: '',
                email: '',
                message: '',
                key: ''
            },
            errors: {
                name: null,
                email: null,
                message: null,
                key: null
            },
            showModal: false,
            modalMessage: ''
        }
    },
    methods: {
        validateName() {
            if (!this.form.name) {
                this.errors.name = "Имя обязательно!";
            }
            else if (this.form.name.length < 2) {
                this.errors.name = "Имя должно быть не короче 2 символов!";
            }
            else {
                this.errors.name = null;
            }
        },
        validateEmail() {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!this.form.email) {
                this.errors.email = "Email обязателен!";
            }
            else if (!re.test(this.form.email)) {
                this.errors.email = "Неверный формат email!";
            }
            else {
                this.errors.email = null;
            }
        },
        validateMessage() {
            if (!this.form.message) {
                this.errors.message = "Сообщение пустое!";
            }
            else {
                this.errors.message = null;
            }
        },
        validateKey() {
            const key = String(this.form.key).trim();
            if (!key) {
                this.errors.key = "Ключ допуска необходим!";
            }
            else if (key !== "2251") {
                this.errors.key = "Неверный ключ допуска...";
            }
            else {
                this.errors.key = null;
            }
        },
        handleSubmit() {
            this.validateName();
            this.validateEmail();
            this.validateMessage();
            this.validateKey();

            if (Object.values(this.errors).some(error => error)) {
                this.modalMessage = "Пожалуйста, исправьте ошибки в форме.";
                this.$emit('show-modal', { success: false, message: this.modalMessage });
                return;
            }

            this.modalMessage = "Спасибо! Ваше сообщение отправлено";
            this.$emit( 'show-modal', { success: true, message: this.modalMessage });

            this.form.name = "";
            this.form.email = "";
            this.form.message = "";
            this.form.key = "";
        }
    }
}
</script>

<style scoped lang = "scss">

.contact-form {
    max-width: 500px;
    margin: 20px auto;
    display: flex;
    flex-direction: column;
}
.form-group {
    margin-bottom: 15px;
}
label {
    display: block;
    margin-bottom: 5px;
}
input.invalid , textarea.invalid {
    border-color: red;
}
input, textarea {
    width: 100%;
    padding: 8px 10px;
}
.error {
    color: red;
    font-size: 0.9rem;
}
.required {
    color: red;
}
.submit-btn {
    padding: 10px 20px;
    background-color: $color-primary;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    align-self: flex-start;
}
.submit-btn:hover {
    background-color: darken($color-primary, 10%);
}
</style>