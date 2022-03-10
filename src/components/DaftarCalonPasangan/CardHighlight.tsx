import React from 'react';
import {IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonText,IonAvatar} from '@ionic/react';
import './DaftarCalonPasangan.css';
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import '@ionic/react/css/ionic-swiper.css';
import "swiper/css";
import "swiper/css/pagination";

const shuffle = (CRUSH_DATA:
  {
    id: string; name: string; description: string; gender: string; avatar: string;
  }[]) => [...CRUSH_DATA].sort(() => Math.random() - 0.5);

export const CRUSH_DATA = [
  {id: 'p1', name: 'MIA (Missing In Action)', description: "Oh no", gender: "Female", avatar:'https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'},
  {id: 'p2', name: 'KIA  (████ In Action)' , description: "Bye", gender: "Female", avatar:'https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight2&accessoriesType=Prescription02&hairColor=Auburn&facialHairType=Blank&facialHairColor=BlondeGolden&clotheType=Hoodie&clotheColor=Black&eyeType=Happy&eyebrowType=SadConcernedNatural&mouthType=Eating&skinColor=DarkBrown'},
  {id: 'p3', name: 'POW (Prisoner Of War)', description: "hehe", gender: "Female", avatar:'https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight2&accessoriesType=Blank&hairColor=SilverGray&facialHairType=Blank&clotheType=BlazerShirt&clotheColor=White&eyeType=WinkWacky&eyebrowType=Default&mouthType=ScreamOpen&skinColor=Light'},
  {id: 'p4', name: 'IDF (Indirect █████)', description: "Friendly!", gender: "Female", avatar:'https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight2&accessoriesType=Blank&hairColor=Blonde&facialHairType=Blank&clotheType=ShirtVNeck&clotheColor=Pink&eyeType=Close&eyebrowType=SadConcernedNatural&mouthType=ScreamOpen&skinColor=Pale'},
  {id: 'p5', name: 'IED (Improvised Explosive Device)', description: "Boom", gender: "Female", avatar:'https://avataaars.io/?avatarStyle=Circle&topType=LongHairBob&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&facialHairColor=Black&clotheType=ShirtScoopNeck&clotheColor=Red&eyeType=Wink&eyebrowType=Angry&mouthType=Sad&skinColor=DarkBrown'},
  {id: 'p6', name: 'PKIA (Presumed ████ In Action)', description: "さよなら", gender: "Female", avatar:'https://avataaars.io/?avatarStyle=Circle&topType=LongHairShavedSides&accessoriesType=Prescription02&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Disbelief&skinColor=Light'},
  {id: 'p7', name: 'IRR (Individual Ready Reserve)', description: "Vigilance", gender: "Female", avatar:'https://avataaars.io/?avatarStyle=Circle&topType=LongHairShavedSides&accessoriesType=Wayfarers&facialHairType=Blank&clotheType=ShirtCrewNeck&clotheColor=White&eyeType=Default&eyebrowType=UpDown&mouthType=Serious&skinColor=Yellow'},
  {id: 'p8', name: 'MEDEVAC (Medical ███████████)', description: "Emergency", gender: "Female", avatar:'https://avataaars.io/?avatarStyle=Circle&topType=LongHairBob&accessoriesType=Wayfarers&hairColor=Brown&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Squint&eyebrowType=FlatNatural&mouthType=Default&skinColor=Brown'},
  {id: 'p9', name: 'AWOL (Absent Without Official)', description: "ghost", gender: "Female", avatar:'https://avataaars.io/?avatarStyle=Circle&topType=LongHairCurvy&accessoriesType=Prescription02&hairColor=Blonde&facialHairType=Blank&clotheType=Hoodie&clotheColor=Red&eyeType=Side&eyebrowType=DefaultNatural&mouthType=Tongue&skinColor=Pale'},
  {id: 'p10', name: '10-18', description: "beware", gender: "Female", avatar:'https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraightStrand&accessoriesType=Prescription02&hairColor=Blonde&facialHairType=Blank&clotheType=GraphicShirt&clotheColor=Pink&graphicType=Bear&eyeType=Close&eyebrowType=SadConcerned&mouthType=Twinkle&skinColor=Brown'},
  {id: 'p11', name: 'Anymouse', description: "navy", gender: "Female", avatar:'https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=Auburn&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Side&eyebrowType=DefaultNatural&mouthType=Sad&skinColor=Yellow'}
];


const randomList = shuffle(CRUSH_DATA);

const CardHighlight: React.FC = () => {

  return (
    <IonGrid>
    {console.log(CRUSH_DATA)}
      <IonRow>
        <IonCol>
          <Swiper
          pagination={{dynamicBullets: true,}}
          modules={[Pagination]}
          slidesPerView={3}
          className="mySwiper">
              {randomList.slice(0,10).map((crush)=> (
                <SwiperSlide key={crush.id}>
                    <IonCard  class="card" >
                      <IonAvatar>
                        <img src={crush.avatar} alt="avatar"/>
                      </IonAvatar>
                      <IonCardContent className="ion-text-center" id="home-card">
                        <IonText class="ion-text-wrap" color="light">
                          {crush.name}
                        </IonText>
                      </IonCardContent>
                    </IonCard>
                </SwiperSlide>
              ))}
          </Swiper>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default CardHighlight;
