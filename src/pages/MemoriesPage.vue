<template>

    <base-layout page-title = "All Memories">

        <!-- As "memories" têm a haver com a prop do mesmo nome, que está na pág. "MemoriesList" -->
        <memories-list :memories="memories"></memories-list>

    </base-layout>

</template>


<script>
import MemoriesList from '../components/memories/MemoriesList.vue';

export default {
    components: {
        MemoriesList: MemoriesList
    },
    computed: {
        memories() {
            return this.$store.getters.memories;
        }
    }
    
}
</script>
