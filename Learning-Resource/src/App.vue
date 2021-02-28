<template>
    <TheHeader title="Learning Resources"/>
    <TheResources/>
</template>

<script>
import TheHeader from './components/layouts/TheHeader';
import TheResources from './components/learning-resources/TheResources'
export default{
    components:{
        TheResources,
        TheHeader,
    },
}
</script>

<style>
*{
    box-sizing: border-box;
}
html{
    font-family: Roboto,sans-serif;
}
body{
    margin: 0;
}
</style>

