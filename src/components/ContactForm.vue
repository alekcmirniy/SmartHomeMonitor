<template>
  <form @submit.prevent="handleSubmit" novalidate class="contact-form" aria-label="Contact form">
    <div class="form-group">
      <label for="name">Имя <span class="required">*</span></label>
      <input
        type="text"
        id="name"
        v-model.trim="form.name"
        @blur="validateName"
        :class="{ invalid: errors.name }"
        aria-describedby="name-error"
        aria-invalid="errors.name ? 'true' : 'false'"
        required
      />
      <span id="name-error" class="error">{{ errors.name }}</span>
    </div>

    <div class="form-group">
      <label for="email">Email <span class="required">*</span></label>
      <input
        type="email"
        id="email"
        v-model.trim="form.email"
        @blur="validateEmail"
        :class="{ invalid: errors.email }"
        aria-describedby="email-error"
        aria-invalid="errors.email ? 'true' : 'false'"
        required
      />
      <span id="email-error" class="error">{{ errors.email }}</span>
    </div>

    <div class="form-group">
      <label for="message">Сообщение <span class="required">*</span></label>
      <textarea
        id="message"
        rows="4"
        v-model.trim="form.message"
        @blur="validateMessage"
        :class="{ invalid: errors.message }"
        aria-describedby="message-error"
        aria-invalid="errors.message ? 'true' : 'false'"
        required
      ></textarea>
      <span id="message-error" class="error">{{ errors.message }}</span>
    </div>

    <div class="form-group">
      <label for="key">Для проверки введите ключ <span class="required">*</span></label>
      <input
        type="password"
        id="key"
        v-model="form.key"
        @blur="validateKey"
        :class="{ invalid: errors.key }"
        aria-describedby="key-error"
        aria-invalid="errors.key ? 'true' : 'false'"
        required
      />
      <span id="key-error" class="error">{{ errors.key }}</span>
    </div>

    <button type="submit" class="submit-btn">Отправить</button>
  </form>
</template>

<script>
export default {
  name: "ContactForm",
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: "",
        key: "",
      },
      errors: {
        name: null,
        email: null,
        message: null,
        key: null,
      },
    };
  },
  methods: {
    validateName() {
      if (!this.form.name) {
        this.errors.name = "Имя обязательно!";
      } else if (this.form.name.length < 2) {
        this.errors.name = "Имя должно быть не короче 2 символов!";
      } else {
        this.errors.name = null;
      }
    },
    validateEmail() {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!this.form.email) {
        this.errors.email = "Email обязателен!";
      } else if (!re.test(this.form.email)) {
        this.errors.email = "Неверный формат email!";
      } else {
        this.errors.email = null;
      }
    },
    validateMessage() {
      if (!this.form.message) {
        this.errors.message = "Сообщение пустое!";
      } else {
        this.errors.message = null;
      }
    },
    validateKey() {
      if (!this.form.key.trim()) {
        this.errors.key = "Ключ доступа обязателен!";
      } else if (this.form.key.trim() !== "2251") {
        this.errors.key = "Неверный ключ доступа...";
      } else {
        this.errors.key = null;
      }
    },
    handleSubmit() {
      this.validateName();
      this.validateEmail();
      this.validateMessage();
      this.validateKey();

      if (Object.values(this.errors).some((error) => error)) {
        this.$emit("show-modal", {
          success: false,
          message: "Пожалуйста, исправьте ошибки в форме.",
        });
        return;
      }

      this.$emit("show-modal", {
        success: true,
        message: "Спасибо! Ваше сообщение отправлено",
      });

      // Очистка формы
      this.form.name = "";
      this.form.email = "";
      this.form.message = "";
      this.form.key = "";
    },
  },
};
</script>

<style scoped lang="scss">
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
input.invalid,
textarea.invalid {
  border-color: red;
  outline-color: red;
}
input,
textarea {
  width: 100%;
  padding: 8px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: border-color 0.3s ease;
  font-size: 1rem;
}
input:focus,
textarea:focus {
  border-color: $color-primary;
  outline: none;
}
.error {
  color: red;
  font-size: 0.9rem;
  min-height: 1.2em;
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
  transition: background-color 0.3s ease;
}
.submit-btn:hover {
  background-color: darken($color-primary, 10%);
}
</style>
