<template>
    <b-container>
        <b-button variant="outline-success" v-b-modal.modal-1>Launch Modal</b-button>
        <b-modal id="modal-1" title="Bootstrap-vue Modal">
            <p>Hello World!</p>
        </b-modal>
        <hr>

        <b-button variant="outline-danger" @click="$bvModal.show('bv-modal-sample')">Open Modal with $bvModal</b-button>
        <b-modal id="bv-modal-sample" hide-footer>
            <template v-slot:modal-title>
                Using <code>$bvModal</code>
            </template>

            <div class="d-block text-center">
                Hello World from $bvModal
            </div>
            <b-button-group style="display: flex;">
                <b-button class="mt-3 mr-2" variant="outline-primary" @click="$bvModal.hide('bv-modal-sample')">Ok</b-button>
                <b-button class="mt-3 mr-2" @click="$bvModal.hide('bv-modal-sample')" variant="outline-warning">
                    Close Modal
                </b-button>
            </b-button-group>
        </b-modal>
        <hr>

        <b-button-group style="display: flex">
        <b-button v-b-modal.modal-xl variant="primary" class="mr-2">Open - modal xl</b-button>
        <b-button v-b-modal.modal-lg variant="success" class="mr-2">Open - modal lg</b-button>
        <b-button v-b-modal.modal-sm variant="warning" class="mr-2">Open - modal sm</b-button>
        </b-button-group>

        <b-modal id="modal-xl" size="xl" title="Extra large modal" no-close-on-backdrop no-fade>Hello</b-modal>
        <b-modal id="modal-lg" scrollable size="lg" title="Large modal" no-fade no-close-on-backdrop>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <p>lorem ipsum dolor sit amet, consectetur adipiscing</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <p>lorem ipsum dolor sit amet, consectetur adipiscing</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <p>lorem ipsum dolor sit amet, consectetur adipiscing</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <p>lorem ipsum dolor sit amet, consectetur adipiscing</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <p>lorem ipsum dolor sit amet, consectetur adipiscing</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <p>lorem ipsum dolor sit amet, consectetur adipiscing</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <p>lorem ipsum dolor sit amet, consectetur adipiscing</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <p>lorem ipsum dolor sit amet, consectetur adipiscing</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <p>lorem ipsum dolor sit amet, consectetur adipiscing</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <p>lorem ipsum dolor sit amet, consectetur adipiscing</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <p>lorem ipsum dolor sit amet, consectetur adipiscing</p>
        </b-modal>
        <b-modal id="modal-sm" size="sm" title="Small modal" no-close-on-backdrop no-fade centered>Hello</b-modal>

    </b-container>
</template>