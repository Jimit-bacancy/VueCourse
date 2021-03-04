<template>
    <div>
        <h3>Some User Details</h3>
        <p>User Id: {{ $route.params.id }}</p>
        <!-- <router-link tag="button" :to="'/user/' + $route.params.id + '/edit'" class="btn btn-primary">Edit User</router-link> -->
        <router-link tag="button" :to="{ name: 'userEdit', params: { id: $route.params.id }}" class="btn btn-primary">Edit User</router-link>
    </div>
</template>

<script>
export default {
    beforeRouteEnter (to, from, next) {
        console.log('Before Route Enter User Detail');
        next();
    }
}
</script>