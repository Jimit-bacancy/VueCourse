<template>
    <base-card>
        <base-button @click="setSelectedTab('stored-resources')" :mode="storedresourceButtonMode">Stored Resources</base-button>
        <base-button @click="setSelectedTab('add-resource')" :mode="addresourceButtonMode">Add Resource</base-button>
    </base-card>
    <keep-alive>
    <component :is="selectedTab"></component>
    </keep-alive>
</template>

<script>
import StoredResources from './StoredResources';
import AddResource from './AddResource';
export default {
    components:{
        StoredResources,
        AddResource,
    },
    data(){
        return {
            selectedTab: 'stored-resorces',
            storedResources: [
                {
                    id: 'official-guide',
                    title: 'official Guide',
                    description: 'The official Vue.js documentation',
                    link: 'https://vuejs.org/'
                },
                {
                    id: 'google',
                    title: 'Google',
                    description: 'Learn how to Google',
                    link: 'https://google.org/'
                }
            ],
        };
    },
    methods:{
        setSelectedTab(tab){
            this.selectedTab = tab;
        },
        addResource(title,description,url){
            const newResource = {
                id: new Date().toISOString(),
                title: title,
                description: description,
                link: url
            };
            this.storedResources.unshift(newResource);
            this.selectedTab = 'stored-resources';
        },
        deleteResource(resId){
            const resourceIndex = this.storedResources.findIndex(res => res.id === resId);
            this.storedResources.splice(resourceIndex, 1);
        }
    },
    provide(){
        return {
            resources: this.storedResources,
            addingResource: this.addResource,
            removeResource: this.deleteResource
        };
    },
    computed: {
        storedresourceButtonMode(){
            return this.selectedTab === 'stored-resources' ? null : 'flat';
        },
        addresourceButtonMode(){
            return this.selectedTab === 'add-resource' ? null : 'flat';
        }
    },
}
</script>