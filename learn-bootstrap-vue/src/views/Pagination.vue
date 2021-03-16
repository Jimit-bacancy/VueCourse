<template>
    <b-container>
        <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage"></b-pagination>
        <hr>

        <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" pills
            prev-text="Prev" next-text="Next" first-text="First" last-text="Last"></b-pagination>
    </b-container>
</template>

<script>
export default {
    data() {
        return {
            currentPage: 5,
            rows: 200,
            perPage: 15,
        }
    },
}
</script>