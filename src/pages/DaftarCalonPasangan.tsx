import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,IonIcon, IonButton } from '@ionic/react';
import {personOutline, personCircleOutline} from "ionicons/icons";
import CardHighlight from '../components/DaftarCalonPasangan/CardHighlight';
import ListPasangan from '../components/DaftarCalonPasangan/ListPasangan';
import BackGround from '../components/Background/bg';

const DaftarCalonPasangan: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Bosen Jomblo</IonTitle>
          <IonButtons slot="end" >
            <IonButton routerLink="/profile">
              <IonIcon size="large"  md={personOutline} ios={personCircleOutline}/>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar color="clear">
            <IonTitle size="large">Bosen Jomblo</IonTitle>
          </IonToolbar>
        </IonHeader>
        <BackGround/>
        <CardHighlight/>
        <ListPasangan />
      </IonContent>
    </IonPage>
  );
};

export default DaftarCalonPasangan;
