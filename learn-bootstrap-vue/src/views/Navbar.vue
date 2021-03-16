<template>
    <b-container>
        <b-nav tabs>
            <b-nav-item>Active</b-nav-item>
            <b-nav-item>Link</b-nav-item>
            <b-nav-item active @click="showAlert">Another Link</b-nav-item>
            <b-nav-item disabled>Disabled Link</b-nav-item>
        </b-nav>
        <hr>

        <b-nav pills>
            <b-nav-item @click="showAlert">Active</b-nav-item>
            <b-nav-item>Link</b-nav-item>
            <b-nav-item active>Another Link</b-nav-item>
            <b-nav-item disabled>Disabled Link</b-nav-item>
        </b-nav>
        <hr>

        <b-navbar toggleable="lg" type="dark" variant="dark">
            <b-navbar-brand href="#">Navbar</b-navbar-brand>
            <b-navbar-nav>
                <b-navbar-item style="color: white" class="ml-2" href="/modal">Link 1</b-navbar-item>
                <b-navbar-item style="color: white" class="ml-2" href="#" disabled>Disabled</b-navbar-item>
            </b-navbar-nav>
        </b-navbar>
        <hr>

        <b-navbar toggleable="lg" type="dark" variant="dark">
            <b-navbar-brand href="#">
                <img src="https://placekitten.com/30/30" alt="Kittens" />Hello
            </b-navbar-brand>
            <b-navbar-nav>
                <b-navbar-item style="color: white" class="ml-2" href="/modal">Link 1</b-navbar-item>
                <b-navbar-item style="color: white" class="ml-2" href="#" disabled>Disabled</b-navbar-item>
            </b-navbar-nav>
        </b-navbar>

    </b-container>
</template>

<script>
export default {
    methods: {
        showAlert(){
            alert('Clicked');
        },
    },
}
</script>

<style scoped>
</style>