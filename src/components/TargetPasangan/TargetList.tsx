import React from 'react';
import { IonGrid, IonRow, IonCol, IonCardContent, IonText,IonAvatar, IonItemSliding, IonIcon, IonItemOptions, IonItemOption, IonItem, IonButtons, IonButton, IonActionSheet} from '@ionic/react';
import { useRef, useState, useContext} from 'react';
import { femaleSharp, maleSharp, closeCircleOutline, personRemoveOutline, exitOutline} from 'ionicons/icons';
import NomineeContext from '../DaftarCalonPasangan/NomineeContext';
import {CRUSH_DATA} from '../DaftarCalonPasangan/CardHighlight';
import './Target.css';

const TargetList: React.FC = () => {
  const NomineeCtx = useContext(NomineeContext);
  const slidingOptionsRef = useRef<HTMLIonItemSlidingElement>(null);
  const [ids, setId] = useState<string>();
  const [actionSheet, setShowActionSheet] = useState(false);
  const oList = CRUSH_DATA;
  console.log(NomineeCtx.crush);
  const deleteNominee = (id: string) => {
          slidingOptionsRef.current?.closeOpened();
          NomineeCtx.crush.forEach(e =>{
            if(e.id != id){
            }
            else{
              oList.push({
                id: e.id,
                name: e.name,
                description: e.description,
                gender: e.gender,
                avatar: e.avatar
              })
            }
          });
          NomineeCtx.deleteNominee(id);
  }

  const sheetHandler = (id: string) => {
    setShowActionSheet(true);
    setId(id);
  }

  return(
    <IonGrid>
      {NomineeCtx.crush.length != 0 ? NomineeCtx.crush.map((crush) => (
          <IonRow key={crush.id}>
            <IonItemSliding>
            <IonItem id="item-list" className="ion-no-padding" lines="none">
              <IonCol size="4">
                <IonAvatar >
                  <img src={crush.avatar} />
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
              <IonItemOption color="warning" onClick={() => sheetHandler(crush.id)}>
                <IonIcon icon={closeCircleOutline} slot="icon-only" />
              </IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
        </IonRow>
      ))
      :
        <IonButtons className="ion-padding ion-margin">
          <IonText className="ion-text-center">
            <h5>Anda Masih Solo Player?</h5>
            <IonButton color="light" routerLink="/DaftarCalonPasangan">
              Find Partner
            </IonButton>
          </IonText>
        </IonButtons>
    }

    {ids && <IonActionSheet
      isOpen={actionSheet}
      onDidDismiss={() => setShowActionSheet(false)}
      header="Remove this nominee?"
      buttons={[{
          icon: personRemoveOutline,
          text: "Yes, remove from this list",
          handler: () => deleteNominee(ids),
        },
        {
          icon: exitOutline,
          text: "No, it was a mistake. Abort",
        }
      ]}
      />
    }
      </IonGrid>);
};
export default TargetList;
