<template>

    <base-layout page-title = "All Memories">

        <ion-item router-link="/memories/1">A trip into the mountains</ion-item>

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
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Mighty_Mountains_with_Snow.jpg/640px-Mighty_Mountains_with_Snow.jpg",
                    title: 'A trip into the mountains',
                    description: 'It was a really nice trip'
                },
                {
                    id: 'm2',
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Paracas_National_Reserve%2C_Ica%2C_Peru-3April2011.jpg/640px-Paracas_National_Reserve%2C_Ica%2C_Peru-3April2011.jpg",
                    title: 'Surfing the sea side',
                    description: 'Feeling the cool breeze'
                },
                {
                    id: 'm3',
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/640px-Good_Food_Display_-_NCI_Visuals_Online.jpg",
                    title: 'Good eating',
                    description: 'Really tasty!'
                }
            ]
        }
    }
}
</script>
