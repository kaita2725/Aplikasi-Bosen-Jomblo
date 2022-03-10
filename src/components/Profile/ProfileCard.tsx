import React from 'react';
import { IonCard, IonCardContent, IonText, IonAvatar, IonButtons, IonButton, IonIcon } from '@ionic/react';
import { logoGithub, logoInstagram, logoDiscord, logoSteam, logoTwitter } from 'ionicons/icons';
import './Profile.css';

const ProfileCard: React.FC = () => {
  return(
      <IonCard id="card-profile">
        <IonAvatar className="ion-no-padding" id="profile">
          <img src="assets/Sipping.gif" className="profile-img"/>
        </IonAvatar>
        <IonCardContent className="ion-text-center"  id="profile-content">
          <IonText class="ion-text-wrap" color="light">
            <h1>Adriel Chandra</h1>
            <p>00000035715</p>
          </IonText>
          <IonButtons id="button-profile">
            <IonButton href="https://steamcommunity.com/id/kai2725/" color="light">
              <IonIcon size="large"  icon={logoSteam}/>
            </IonButton>
            <IonButton href="https://github.com/kaita2725/" color="light">
              <IonIcon size="large"  icon={logoGithub}/>
            </IonButton>
            <IonButton href="https://discordapp.com/users/276721936933847040/" color="light">
              <IonIcon size="large"  icon={logoDiscord}/>
            </IonButton>
            <IonButton href="https://twitter.com/kai2725/" color="light">
              <IonIcon size="large"  icon={logoTwitter}/>
            </IonButton>
            <IonButton href="https://www.instagram.com/kaita_2725/" color="light">
              <IonIcon size="large"  icon={logoInstagram}/>
            </IonButton>
          </IonButtons>
        </IonCardContent>
      </IonCard>
  );
};
export default ProfileCard;
