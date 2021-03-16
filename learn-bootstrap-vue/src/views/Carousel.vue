<template>
    <b-container>
        <code>fade</code>
        <hr>

        <b-carousel controls indicators img-width="1024" img-height="480" :interval="3000" v-model="slide">
            <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=10" caption="First Slide" text="Text 1 here."></b-carousel-slide>
            <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=11" caption="Second Slide" text="Text 2 here."></b-carousel-slide>
            <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=12"></b-carousel-slide>
            <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=13"></b-carousel-slide>
            <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=14"></b-carousel-slide>
        </b-carousel>
        <hr>

        <code>4:3</code>
        <b-embed type="iframe" aspect="16by9" 
                src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen>
        </b-embed>
        <hr>

        <b-embed type="video" aspect="4by3" 
            controls poster="https://placekitten.com/1920/1080">
            <source src="dev-stories.webm" type="video/webm">
            <source src="dev-stories.mp4" type="video/mp4">
        </b-embed>

    </b-container>
</template>

<script>
export default {
    data() {
        return {
            slide: 0,
        }
    },
}
</script>