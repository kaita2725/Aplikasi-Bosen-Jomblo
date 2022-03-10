import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ProfileCard from '../components/Profile/ProfileCard';
import BackGround from '../components/Background/bg';

const Profile: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Profil</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar color="clear">
            <IonTitle size="large">Profil</IonTitle>
          </IonToolbar>
        </IonHeader>
        <BackGround />
        <ProfileCard />
      </IonContent>
    </IonPage>
  );
};

export default Profile;
