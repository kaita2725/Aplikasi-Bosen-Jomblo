import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,IonIcon, IonButton } from '@ionic/react';
import {personOutline, personCircleOutline} from "ionicons/icons";
import BackGround from '../components/Background/bg';
import TargetList from '../components/TargetPasangan/TargetList';

const TargetPasangan: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Target Gebetan</IonTitle>
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
            <IonTitle size="large">Target Gebetan</IonTitle>
          </IonToolbar>
        </IonHeader>
        <BackGround />
        <TargetList />
      </IonContent>
    </IonPage>
  );
};

export default TargetPasangan;
