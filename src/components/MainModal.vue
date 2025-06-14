<template>
  <div class="modal-overlay" v-if="visible" @keydown.esc.prevent="closeModal" tabindex="0">
    <div class="modal-content" role="dialog" aria-modal="true" aria-labelledby="modal-message">
      <p id="modal-message">{{ message }}</p>
      <button @click="closeModal" aria-label="Закрыть модальное окно">OK</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainModal",
  props: {
    visible: {
      type: Boolean,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  mounted() {
    if (this.visible) {
      this.$el.focus();
    }
  },
  watch: {
    visible(val) {
      if (val) this.$el.focus();
    },
  },
  methods: {
    closeModal() {
      this.$emit("update:visible", false);
    },
  },
};
</script>

<style scoped lang="scss">
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 500;
  outline: none;
}
.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  max-width: 300px;
}
.modal-content button {
  margin-top: 10px;
  padding: 6px 12px;
  background-color: $color-primary;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.modal-content button:hover {
  background-color: darken($color-primary, 10%);
}
</style>
