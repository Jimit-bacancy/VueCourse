<template>
    <b-container>
        <b-form>
            <b-form-input v-model="input" type="text" placeholder="Test text here.." class="mb-2"/>
            <b-button type="submit" class="mr-2" variant="primary" @click.prevent="onSubmit">Submit</b-button>
            <b-button type="reset" class="mr-2" variant="warning" @click.prevent="onReset">Reset</b-button>
            <hr>

            <b-checkbox value="accepted" v-model="chbox1" unchecked-value="not_accepted">
                I accept the terms and conditions!
            </b-checkbox>
            <code>{{ chbox1 }}</code>
        </b-form>
        <hr>

        {{ input }}
        <hr>

        <b-form-checkbox-group v-model="chbox2" stacked>
            <b-form-checkbox value="blue">Blue</b-form-checkbox>
            <b-form-checkbox value="green">Green</b-form-checkbox>
            <b-form-checkbox value="red">Red</b-form-checkbox>
            <b-form-checkbox value="orange">Orange</b-form-checkbox>
        </b-form-checkbox-group>
        <code>{{ chbox2 }}</code>
        <hr>

        <b-form-checkbox-group v-model="chbox2">
            <b-form-checkbox value="blue">Blue</b-form-checkbox>
            <b-form-checkbox value="green">Green</b-form-checkbox>
            <b-form-checkbox value="red">Red</b-form-checkbox>
            <b-form-checkbox value="orange">Orange</b-form-checkbox>
        </b-form-checkbox-group>
        <code>{{ chbox2 }}</code>
        <hr>

        <b-form-checkbox-group v-model="chbox2" switches>
            <b-form-checkbox value="blue">Blue</b-form-checkbox>
            <b-form-checkbox value="green">Green</b-form-checkbox>
            <b-form-checkbox value="red">Red</b-form-checkbox>
            <b-form-checkbox value="orange">Orange</b-form-checkbox>
        </b-form-checkbox-group>
        <code>{{ chbox2 }}</code>
        <hr>

        <b-form-checkbox-group v-model="chbox1">
            <b-form-invalid-feedback :state="state">Please select two.</b-form-invalid-feedback>
            <b-form-valid-feedback :state="state">Thank You..</b-form-valid-feedback>
        </b-form-checkbox-group>
        <hr>

        <b-form-datepicker></b-form-datepicker>
        <b-form-datepicker :date-format-options="{year: 'numeric', month: 'numeric', day: 'numeric'}"></b-form-datepicker>
        <hr>

        <b-form-file v-model="file1" placeholder="Choose a file or drop it here." multiple
                drop-placeholder="Drop it here.">
        </b-form-file>
        <hr>

        <b-form-file v-model="file1" placeholder="Choose a file." plain>
        </b-form-file>

        <div class="mt-3">
            Selected File = {{file1 ? file1.name : ''}}
        </div>
        <hr>

        <b-form-input></b-form-input>
        <hr>

        <b-form-rating v-model="rate1"></b-form-rating>
        Rating = {{ rate1}}
        <hr>

        <b-form-rating v-model="rate2" readonly></b-form-rating>
        Rating = {{ rate2 }}
        <hr>

        <b-form-rating v-model="rate3" icon-empty="heart" icon-half="heart-half" show-clear  
                stars="10" icon-clear="slash-circle" variant="danger" 
                show-value show-value-max></b-form-rating>
        Rating = {{ rate3 }}
        <hr>

        <b-form-select v-model="select" :options="options">
            <template v-slot:first>
                <b-form-select-option :value="null">Please select an option</b-form-select-option>
            </template>
            <b-form-select-option value="C">Option 3</b-form-select-option>
            <b-form-select-option value="D">Option 4</b-form-select-option>
        </b-form-select>
        <code>Value = {{ select }}</code>
        <hr>

        <b-form-spinbutton v-model="spin1" min="1" max="100"></b-form-spinbutton>
        <code>value = {{ spin1 }}</code>

    </b-container>
</template>

<script>
export default {
    data() {
        return {
            input: '',
            chbox1: 'not_accepted',
            chbox2: [],
            file1: null,
            rate1: null,
            rate2: 2.5,
            rate3: null,
            select: '',
            spin1: 50,
        }
    },  
    computed:{
        state(){
            return this.chbox1.length === 2;
        }
    },
    methods: {
        onSubmit(){
            console.log('On Submit = ', this.input);
        },
        onReset(){
            this.input = '';
            console.log('Form Data resets!');
        }
    },
}
</script>

