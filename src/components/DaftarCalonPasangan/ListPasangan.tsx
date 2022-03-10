import React from 'react';
import { IonGrid, IonRow, IonCol, IonLoading, IonCardContent, IonText,IonAvatar, IonItemSliding, IonIcon, IonItemOptions, IonItemOption, IonItem } from '@ionic/react';
import { useRef, useState, useContext} from 'react';
import { femaleSharp, heart, maleSharp} from 'ionicons/icons';
import './DaftarCalonPasangan.css';
import '@ionic/react/css/ionic-swiper.css';
import "swiper/css";
import "swiper/css/pagination";
import {CRUSH_DATA} from './CardHighlight';
import NomineeContext from './NomineeContext';

const ListPasangan: React.FC = () => {
  const NomineeCtx = useContext(NomineeContext);
  let exist: any[] = [];
  NomineeCtx.crush.map(target => exist.push(target.id));
  const slidingOptionsRef = useRef<HTMLIonItemSlidingElement>(null);
  const [Load, setLoading] = useState(false);

  const addNominee = (id: string, name: string, description: string, gender: string, avatar: string) => {
    slidingOptionsRef.current?.closeOpened();
    NomineeCtx.addNominee(id, name, description, gender, avatar);
    CRUSH_DATA.forEach((value, index) => {
      if(value.id == id){
        CRUSH_DATA.splice(index, 1);
      };
    });
    setLoading(true);
  }

  setTimeout(() => {
    setLoading(false);
  }, 1500)

  return (
    <IonGrid>
      {CRUSH_DATA.map((crush)=> (
        <IonRow key={crush.id}>
          <IonItemSliding>
          <IonItem id="item-list" className="ion-no-padding" lines="none">
            <IonCol size="4">
              <IonAvatar >
                <img src={crush.avatar} alt="avatar"/>
              </IonAvatar>
            </IonCol>
            <IonCol size="8">
              <IonCardContent className="ion-text-left" id="content-list">
                <IonText>
                  <h2>{crush.name}</h2>
                  <p>{crush.description}</p>
                  <p>{crush.gender == 'Female' ? <IonIcon icon={femaleSharp}/> : <IonIcon icon={maleSharp}/>}{crush.gender}</p>
                </IonText>
              </IonCardContent>
            </IonCol>
          </IonItem>
          <IonItemOptions side="end">
            <IonItemOption color="tertiary" disabled={exist.indexOf(crush.id) > -1} href="/TargetList" onClick={() => addNominee(crush.id, crush.name, crush.description, crush.gender,crush.avatar)}>
              <IonIcon icon={heart} slot="icon-only" />
            </IonItemOption>
          </IonItemOptions>
          <IonLoading isOpen={Load} onDidDismiss={() => setLoading(false)} message={'Loading . . .'} duration={1500}/>
        </IonItemSliding>
      </IonRow>
      ))}
    </IonGrid>
  );
};

export default ListPasangan;
