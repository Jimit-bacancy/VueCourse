<template>
    <b-container>
        <b-jumbotron header="Jumbotron" lead="content inside jumbotron."></b-jumbotron>
        <hr>

        <b-jumbotron>
            <template v-slot:header>Jumbotron v-slot</template>
            <template v-slot:lead>Content inside jumbotron v-slot</template>
        </b-jumbotron>
    </b-container>
</template>