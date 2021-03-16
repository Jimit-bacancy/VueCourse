<template>
    <b-container>
        <b-overlay :show="show" rounded="sm" spinner-type="border" spinner-variant="dark">
            <b-card title="Card with Overlay" :aria-hidden="show ? 'true' : null">
                <b-card-text>Custom Text for card</b-card-text>
                <b-card-text>Click the button to toggle the overlay.</b-card-text>
                <b-button :disabled="show" variant="primary" @click="show = true">Show Overlay</b-button>
            </b-card>
        </b-overlay>
        <b-button class="mt-3" @click="show = !show" variant="outline-success">Toggle Overlay</b-button>
    </b-container>
</template>
    
<script>
export default {
    data() {
        return {
            show: false,
        }
    },
}
</script>