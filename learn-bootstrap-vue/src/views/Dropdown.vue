<template>
    <b-container>
        <b-dropdown text="Dropdown button" variant="info">
            <b-dropdown-item>Item 1</b-dropdown-item>
            <b-dropdown-item>Item 2</b-dropdown-item>
            <b-dropdown-item active>Active Item 3</b-dropdown-item>
            <b-dropdown-item disabled>Disabled Item 4</b-dropdown-item>
        </b-dropdown>
        <hr>

        <b-dropdown variant="success">
            <template v-slot:button-content>
                Custom <strong>Content</strong> with <em>HTML.</em>
            </template>
            <b-dropdown-item variant="danger">First Item</b-dropdown-item>
        </b-dropdown>
    </b-container>
</template>