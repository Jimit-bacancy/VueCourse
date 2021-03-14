<template>
<div>
    <h1>Trade or View your Portfolio</h1>
    <h6>You may load and save your data</h6>
    <h6>Cick on 'End Day' to begin a new Day!</h6>
    <hr>
    <p>Your Funds : {{ funds | currency}}</p>
</div>
</template>

<script>
export default {
    computed:{
        funds(){
            return this.$store.getters.funds;
        }
    },
}
</script>