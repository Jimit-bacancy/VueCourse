<template>
  <b-container>
    <b-card
      title="Card Title"
      sub-title="Card Subtitle"
      style="border: 1px solid red"
    >
      <b-card-text> Hello World! This is card text sample. </b-card-text>
      <b-card-text> This is second card text sample. </b-card-text>
      <b-link href="https://google.com" class="card-link" target="_blank"
        >Link</b-link
      >
    </b-card>
    <hr />

    <b-row>
      <b-col>
        <b-card
          title="Card Title"
          sub-title="Card Subtitle"
          style="border: 1px solid red; color: white"
          img-src="https://placekitten.com/300/300"
          overlay
        >
          <b-card-text> Hello World! This is card text sample. </b-card-text>
          <b-card-text> This is second card text sample. </b-card-text>
          <b-link href="https://google.com" class="card-link" target="_blank"
            >Link</b-link
          >
        </b-card>
      </b-col>

      <b-col>
        <b-card
          title="Card Title"
          sub-title="Card Subtitle"
          style="border: 1px solid red"
          img-src="https://placekitten.com/600/300"
          img-top
        >
          <b-card-text> Hello World! This is card text sample. </b-card-text>
          <b-card-text> This is second card text sample. </b-card-text>
          <b-link href="https://google.com" class="card-link" target="_blank"
            >Link</b-link
          >
        </b-card>
      </b-col>

      <b-col>
        <b-card
          title="Card Title"
          sub-title="Card Subtitle"
          style="border: 1px solid red"
          img-src="https://placekitten.com/360/360"
          img-bottom
        >
          <b-card-text> Hello World! This is card text sample. </b-card-text>
          <b-card-text> This is second card text sample. </b-card-text>
          <b-link href="https://google.com" class="card-link" target="_blank"
            >Link</b-link
          >
        </b-card>
      </b-col>
    </b-row>

    <b-card
      title="Card Title"
      sub-title="Card Subtitle"
      style="border: 1px solid green; color: black"
      img-src="https://placekitten.com/300/330"
      img-left
    >
      <b-card-text> Hello World! This is card text sample. </b-card-text>
      <b-card-text> This is second card text sample. </b-card-text>
      <b-link href="https://google.com" class="card-link" target="_blank"
        >Link</b-link
      >
    </b-card>
    <hr>

    <b-card
      title="Card Title"
      sub-title="Card Subtitle"
      style="border: 1px solid red; color: black"
      img-src="https://placekitten.com/300/330"
      img-right
    >
      <b-card-text> Hello World! This is card text sample. </b-card-text>
      <b-card-text> This is second card text sample. </b-card-text>
      <b-link href="https://google.com" class="card-link" target="_blank"
        >Link</b-link
      >
    </b-card>
    <hr>

    
    <b-card-group deck>
        <b-card bg-variant="primary" text-variant="white" header="Primary">
            <b-card-text>Hello World Block 1</b-card-text>
        </b-card>

        <b-card border-variant="secondary" header="Secondary">
            <b-card-text>Hello World Block 2</b-card-text>
        </b-card>

        <b-card border-variant="success" header-text-variant="white" header-bg-variant="success" header="Success">
            <b-card-text>Hello World Block 3</b-card-text>
        </b-card>
    </b-card-group>
    <hr>

  </b-container>
</template>
