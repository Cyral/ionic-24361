import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonMenu,
  IonModal,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import {menuController} from '@ionic/core';
import './Home.css';
import {useState} from "react";

const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (<>
    <IonMenu menuId="menu1" swipeGesture={true} contentId="main">
      <IonContent>
          <IonTitle>Menu</IonTitle>
          <IonInput placeholder="This textbox is required"/>
          <IonButton onClick={() => setIsModalOpen(true)}>Open Modal</IonButton>
      </IonContent>
    </IonMenu>
    <IonModal isOpen={isModalOpen} onDidDismiss={() => setIsModalOpen(false)}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Modal</IonTitle>
        </IonToolbar>
      </IonHeader>
        <IonContent>
          <IonInput placeholder="Try to type here"/>
          <p>Press tab and see how the focus is limited to the menu in the background.</p>
        </IonContent>
    </IonModal>
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent id="main">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton onClick={() => menuController.open('menu1')}>Show Menu</IonButton>
      </IonContent>
    </IonPage>
  </>);
};

export default Home;
