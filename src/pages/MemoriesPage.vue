<template>

    <base-layout page-title = "All Memories">

        <ion-item router-link="/memories/1">A trip into the mountains</ion-item>
        <ion-item>Surfing the sea side</ion-item>
        <ion-item>Good eating</ion-item>

    </base-layout>

</template>


<script>
import { IonItem } from '@ionic/vue';

export default {
    components: {
        IonItem: IonItem
    },

    data() {
        return {
            memories: [
                { 
                    id: 'm1', 
                    title: 'A trip into the mountains',
                    description: 'It was a really nice trip'
                },
                {
                    id: 'm2',
                    title: 'Surfing the sea side',
                    description: 'Feeling the cool breeze'
                },
                {
                    id: 'm3',
                    title: 'Good eating',
                    description: 'Really tasty!'
                }
            ]
        }
    }
}
</script>
