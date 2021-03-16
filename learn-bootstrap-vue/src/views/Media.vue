<template>
    <b-container>
        <b-media>
            <template v-slot:aside>
                <b-img blank blank-color="#ccc" width="64" alt="Placeholder"></b-img>
            </template>

            <h2>Media Body</h2>
            <p>Some text</p>
        </b-media>
        <hr>

        <b-media no-body>
            <b-media-aside>
                <b-img blank blank-color="#ebc" width="64" alt="Another placeholder"></b-img>
            </b-media-aside>
            <b-meida-body class="ml-3">
                <h5>Media Title</h5>
                <p>Some Content</p>
            </b-meida-body>
        </b-media>

    </b-container>
</template>