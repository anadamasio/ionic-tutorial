<template>

    <ion-page>

        <ion-header>
            <ion-toolbar>

                <ion-buttons>
                    <ion-back-button :default-href="pageDefaultBackLink"></ion-back-button>
                </ion-buttons>

                <ion-title>{{ pageTitle }}</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content>
            <ion-list>
                <slot />
            </ion-list>
        </ion-content>

    </ion-page>

</template>


<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonBackButton, IonButtons } from '@ionic/vue';

export default {
    props: ['pageTitle', 'pageDefaultBackLink'],

    components: {
        IonPage: IonPage,
        IonHeader: IonHeader,
        IonToolbar: IonToolbar,
        IonTitle: IonTitle,
        IonContent: IonContent,
        IonBackButton: IonBackButton,
        IonButtons: IonButtons
    }    
}
</script>