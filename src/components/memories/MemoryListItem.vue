<template>
    <ion-item :router-link="`/memories/${memory.id}`">

        <ion-thumbnail>
            <ion-img :src="memory.image" alt="memory.title"></ion-img>
        </ion-thumbnail>

        <ion-label>
            {{ memory.title }}
        </ion-label>

    </ion-item>
</template>

<script>
import { IonItem, IonThumbnail, IonImg, IonLabel } from '@ionic/vue';

export default {
    // O "memory" refere-se ao que está no v-for na pág. "MemoriesList"
    
    props: ["memory"],
    components: {
        IonItem: IonItem,
        IonThumbnail: IonThumbnail,
        IonImg: IonImg,
        IonLabel: IonLabel
    }
}
</script>
