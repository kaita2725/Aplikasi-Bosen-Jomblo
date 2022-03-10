import {
  IonContent,
  IonItem,
  IonLabel,
  IonList,
  IonHeader,
  IonMenu,
  IonMenuToggle,
  IonToolbar,
  IonTitle,
  IonToggle
} from '@ionic/react';
import { useLocation } from 'react-router-dom';
import './Menu.css';

const Menu: React.FC = () => {
  const location = useLocation();
  interface AppPage {
  url: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Daftar Calon Pasangan',
    url: '/daftarCalonPasangan'
  },
  {
    title: 'Target Pasangan',
    url: '/targetPasangan'
  },
  {
    title: 'Profile',
    url: '/profile'
  }
];

  const darkModeToggle = () => {
    document.body.classList.toggle("dark");
  };

  return (
    <IonMenu contentId="main" type="overlay">
      <IonToolbar >
        <IonHeader>
        <IonTitle><h5 className="titleh">Gebet App</h5>
        </IonTitle>
        </IonHeader>
      </IonToolbar>
      <IonContent>
        <IonList id="main-list" >
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
          <IonItem lines="none">
            <IonLabel>Dark Theme</IonLabel>
            <IonToggle class="toggle-button" slot="end" onIonChange={darkModeToggle}/>
          </IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
