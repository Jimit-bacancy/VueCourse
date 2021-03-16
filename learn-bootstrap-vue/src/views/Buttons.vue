<template>
    <b-container>
        <b-button class="mr-2">Button</b-button>
        <b-button class="mr-2" variant="danger">Danger Button</b-button>
        <b-button class="mr-2" variant="info">Info Button</b-button>
        <hr>

        <b-button class="mr-2" disabled>Disabled Button</b-button>
        <b-button class="mr-2" @click="clicked" variant="danger">Click Event</b-button>
        <b-button class="mr-2" variant="success" href="https://google.com" target="_blank">Link Button</b-button>
        <hr>

        <b-button class="mr-2" variant="info" size="lg">Large Button</b-button>
        <b-button class="mr-2" variant="link" href="https://google.com">Link Button</b-button>
        <hr>

        <b-button class="mr-2" variant="outline-primary">Primary Button</b-button>
        <b-button class="mr-2" variant="outline-danger">Danger Button</b-button>
        <b-button class="mr-2" variant="outline-info">Info Button</b-button>
        <b-button class="mr-2" variant="outline-success">Success Button</b-button>
        <hr>

        <b-row>
            <b-col>
                <b-button class="mr-2" variant="primary" block>Primary Block</b-button>
            </b-col>

            <b-col>
                <b-button class="mr-2" variant="success" block>Success Block</b-button>
            </b-col>

            <b-col>
                <b-button pill class="mr-2" variant="warning" block>Pill Warning Block</b-button>
            </b-col>
        </b-row>

        <hr>

        <b-button pill class="mr-2" variant="outline-success">Pill Outline Button</b-button>
        <hr>

        <b-button-group>
            <b-button class="mr-2" variant="primary">Button 1</b-button>
            <b-button class="mr-2" variant="warning">Button 2</b-button>
            <b-button class="mr-2" variant="danger">Button 3</b-button>
        </b-button-group>

        
        <b-button-group vertical>
            <b-button class="mt-2" variant="primary">Button 1</b-button>
            <b-button class="mt-2" variant="warning">Button 2</b-button>
            <b-button class="mt-2" variant="danger">Button 3</b-button>
        </b-button-group>
        <hr>

        <b-button-group>
            <b-button class="mr-2">Button 1</b-button>
            <b-dropdown class="mr-2" right text="Button 2">
                <b-dropdown-item>Item 1</b-dropdown-item>
                <b-dropdown-item>Item 2</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item>Item 3</b-dropdown-item>
            </b-dropdown>
            <b-button class="mr-2">Button 3</b-button>
        </b-button-group>

    </b-container>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
        clicked(){
            alert('Clicked');
        }
    },
}
</script>