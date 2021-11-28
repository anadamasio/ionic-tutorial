<template>

    <base-layout page-title = "All Memories">

        <ion-item v-for = "memory in memories" :router-link="`/memories/${memory.id}`" :key="memory.id">

            <ion-thumbnail>
                <ion-img :src="memory.image" alt="memory.title"></ion-img>
            </ion-thumbnail>

            <ion-label>
                {{ memory.title }}
            </ion-label>

        </ion-item>

    </base-layout>

</template>


<script>
import { IonItem, IonImg, IonThumbnail, IonLabel } from '@ionic/vue';

export default {
    components: {
        IonItem: IonItem,
        IonImg: IonImg,
        IonThumbnail: IonThumbnail,
        IonLabel: IonLabel
    },

    data() {
        return {
        }
    }
}
</script>
