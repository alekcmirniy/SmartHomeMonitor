<template>
  <main class="contacts-page" aria-labelledby="contacts-title">
    <h1 id="contacts-title">Связаться с нами</h1>
    <ContactForm @show-modal="openModal" />
    <MainModal
      :visible="isModalVisible"
      :message="modalText"
      @update:visible="isModalVisible = $event"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-message"
    />
  </main>
</template>

<script>
import ContactForm from '../components/ContactForm.vue';
import MainModal from '../components/MainModal.vue';

export default {
  name: 'ContactsView',
  components: { ContactForm, MainModal },
  data() {
    return {
      isModalVisible: false,
      modalText: ''
    };
  },
  methods: {
    openModal(payload) {
      this.modalText = payload.message;
      this.isModalVisible = true;
    }
  }
}
</script>

<style scoped lang="scss">
.contacts-page {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  padding-top: 80px;
  text-align: center;
}

h1 {
  padding: 2px;
  box-shadow: 2px 2px 5px 2px;
  border: solid 2px tan;
  border-radius: 10px;
}

p {
  margin: 10px;
  font-size: 18px;
  box-shadow: 2px 2px 5px 2px;
  border: solid 2px tan;
  border-radius: 10px;
}
</style>
