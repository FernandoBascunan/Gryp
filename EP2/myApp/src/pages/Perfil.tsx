import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonAvatar,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonIcon,
  IonButton
} from '@ionic/react';
import { mailOutline, callOutline, settings, logOut } from 'ionicons/icons';
import './Perfil.css';
import { useHistory } from 'react-router-dom';

const Perfil: React.FC = () => {
  const history = useHistory();

  const handleLoginRedirect = () => {
    history.push('/iniciarsesion'); // Cambiado de '/Login' a '/iniciarsesion'
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Perfil</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className="profile-header">
          <IonAvatar className="large-avatar">
            <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" alt="Avatar" />
          </IonAvatar>
          <h2>Nombre de Usuario</h2>
          <p>Restaurante: Mi Restaurante</p>
        </div>

        <IonList>
          <IonListHeader>Información de contacto</IonListHeader>
          <IonItem>
            <IonIcon icon={mailOutline} slot="start" />
            <IonLabel>
              <h2>Email</h2>
              <p>usuario@ejemplo.com</p>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonIcon icon={callOutline} slot="start" />
            <IonLabel>
              <h2>Teléfono</h2>
              <p>+1 234 567 890</p>
            </IonLabel>
          </IonItem>
        </IonList>

        <IonList>
          <IonListHeader>Opciones</IonListHeader>
          <IonItem button>
            <IonIcon icon={settings} slot="start" />
            <IonLabel>Configuración</IonLabel>
          </IonItem>
          <IonItem button onClick={handleLoginRedirect}>
            <IonIcon icon={logOut} slot="start" />
            <IonLabel>Cerrar Sesión</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Perfil;