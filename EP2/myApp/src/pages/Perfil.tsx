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
import { mailOutline, callOutline, settings, logOut,idCardOutline, compassOutline,personAddOutline,documentOutline} from 'ionicons/icons';
import './Perfil.css';
import { useHistory } from 'react-router-dom';
import Tab1 from './Header';
import Footer from './Footer';

const Perfil: React.FC = () => {
  const history = useHistory();

  const handleLoginRedirect = () => {
    history.push('/iniciarsesion');
  };

  const handleReportRedirect = () => {
    window.open('../Archivos/Mensual.pdf', '_blank');
    history.push('/iniciarsesion'); 
  };

  return (
    <IonPage>
      <Tab1/>
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
            <IonIcon icon={idCardOutline} slot="start" />
            <IonLabel>
              <h2>Rut</h2>
              <p>12.345.678-9</p>
            </IonLabel>
          </IonItem>
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
          <IonItem>
            <IonIcon icon={compassOutline} slot="start" />
            <IonLabel>
              <h2>Dirección</h2>
              <p>Avenida Brasil 2241,Valparaíso</p>
            </IonLabel>
          </IonItem>
        </IonList>

        <IonList>
          <IonListHeader>Opciones</IonListHeader>
          <IonItem button>
            <IonIcon icon={settings} slot="start" />
            <IonLabel>Configuración</IonLabel>
          </IonItem>
          <IonItem button onClick={() => history.push('/crear-perfil')}>
            <IonIcon icon={personAddOutline} slot="start" />
            <IonLabel>Crear Perfiles</IonLabel>
          </IonItem>
          <IonItem button onClick={handleLoginRedirect}>
            <IonIcon icon={logOut} slot="start" />
            <IonLabel>Cerrar Sesión</IonLabel>
          </IonItem>
          <IonItem button onClick={handleReportRedirect}>
            <IonIcon icon={documentOutline} slot="start" />
            <IonLabel>Reportes Mensuales</IonLabel>
          </IonItem>
        </IonList>
        
      </IonContent>
      <Footer/>
    </IonPage>
  );
};

export default Perfil;