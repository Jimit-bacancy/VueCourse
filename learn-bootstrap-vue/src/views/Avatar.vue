<template>
    <b-container>
        <b-avatar src="https://placekitten.com/300/300" class="mr-2"></b-avatar>
        <b-avatar src="https://placekitten.com/310/310" size="24px" class="mr-2"></b-avatar>
        <b-avatar src="https://placekitten.com/320/320" size="6rem" class="mr-2"></b-avatar>
        <b-avatar src="https://placekitten.com/330/330" :size="42" class="mr-2"></b-avatar>
        
        <hr>

        <b-avatar icon="star-fill" variant="primary" size="3rem" class="mr-2"></b-avatar>
        <b-avatar size="3rem" class="mr-2">ABC</b-avatar>

        <hr>
        
        <b-avatar variant="success" class="mr-2"></b-avatar>
        <b-avatar variant="danger" rounded="bottom" class="mr-2"></b-avatar>
        <b-avatar variant="info" square class="mr-2"></b-avatar>
        <b-avatar variant="dark" class="mr-2"></b-avatar>
        <b-avatar variant="light" class="mr-2"></b-avatar>
        <b-avatar variant="warning" square class="mr-2"></b-avatar>
        <b-avatar variant="primary" rounded class="mr-2"></b-avatar>
        <b-avatar variant="secondary" class="mr-2"></b-avatar>

        <hr>

        <div>
            <b-avatar variant="primary" text="IL" class="align-baseline"></b-avatar> India Legends
        </div>

        <div>
            <b-avatar badge class="mr-2"></b-avatar>
            <b-avatar badge badge-left class="mr-2"></b-avatar>
            <b-avatar badge badge-top class="mr-2"></b-avatar>
            <b-avatar badge badge-left badge-top class="mr-2"></b-avatar>
        </div>

        <div>
            <b-avatar badge class="mr-2">
                <template v-slot:badge>
                    4
                </template>
            </b-avatar>
        </div>

    </b-container>
</template>