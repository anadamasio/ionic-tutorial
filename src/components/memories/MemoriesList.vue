<template>
    <!-- O 1º memory, na linha 5, refere-se ao props do mesmo nome, que está na página "MemoriesListIten"; o 2º está a fazer ligação a propriedade computed, de mesmo nome-->

    <ion-list>
        <memory-list-item :v-for="memory in memories" :key="memory.id"
        :memory="memory" 
        >
        </memory-list-item>
    </ion-list>
</template>

<script>
import { IonList } from '@ionic/vue';
import MemoryListItem from './MemoryListItem.vue';

export default {
    // Esta prop recebe info. da pág. "MemoriesPage"
    props: ["memories"],
    components: {
        IonList: IonList,
        MemoryListItem: MemoryListItem
    }
}
</script>
