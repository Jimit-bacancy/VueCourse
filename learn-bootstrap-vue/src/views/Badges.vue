<template>
    <b-container>
        <b-badge class="mr-1">
            Default badge
        </b-badge>
        
        <b-badge variant="primary" class="mr-1">
            Primary badge
        </b-badge>

        <b-badge variant="success" class="mr-1">
            Success badge
        </b-badge>
        
        <b-badge variant="danger" class="mr-1">
            Danger badge
        </b-badge>

        <hr>

        <b-badge pill variant="info" class="mr-2">124</b-badge>
        <b-badge pill variant="warning" class="mr-2">Warning</b-badge>

        <hr>
        Skills = 
        <b-badge v-for="(skill, index) in skills" class="mr-1" 
                variant="success" @click="popSkill(index)" :key="index"
                style="cursor: pointer;">{{ skill }}</b-badge>

    </b-container>
</template>

<script>
export default {
    data() {
        return {
            skills: ['JS', 'Vue-Js', 'Bootstrap'],
        }
    },
    methods: {
        popSkill(index){
            this.skills.splice(index, 1);
        }
    },
}
</script>