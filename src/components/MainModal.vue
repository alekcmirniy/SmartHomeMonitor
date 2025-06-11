<template>
    <div class = "modal-overlay" v-if = "visible">
        <div class = "modal-content">
            <p> {{ message }}</p>
            <button @click = "closeModal">OK</button>
        </div>
    </div>
</template>

<script>

export default {
    name: "MainModal",
    props: {
        visible: {
            type: Boolean,
            required: true
        },
        message: {
            type: String,
            required: true
        }
    },
    methods: {
        closeModal() {
            this.$emit('update:visible', false); //первый параметр - имя события, второй - значение
        }
    }
};

</script>

<style scoped lang = "scss">

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
}
.modal-content button:hover {
    background-color: darken($color-primary, 10%);
}

</style>