import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonItem,
  IonLabel,
  IonButton,
  IonList,
  IonListHeader,
  IonToast,
} from '@ionic/react';
import { useHistory } from 'react-router-dom'; 
import Header from './Header';

const CrearPerfil: React.FC = () => {
  const history = useHistory(); 
  const [username, setUsername] = useState('');
  const [rut, setRut] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [region, setRegion] = useState('');
  const [commune, setCommune] = useState('');
  const [password, setPassword] = useState('');
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = () => {

    console.log({
      username,
      rut,
      email,
      phone,
      region,
      commune,
      password,
    });

 
    setShowToast(true);
  };

  const handleBack = () => {
    history.push('/perfil'); 
  };

  return (
    <IonPage>
      <Header/>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Crear Perfil</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList>
          <IonListHeader>Información del Perfil</IonListHeader>
          <IonItem>
            <IonLabel position="floating">Nombre de Usuario</IonLabel>
            <IonInput value={username} onIonChange={(e) => setUsername(e.detail.value!)} />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">RUT</IonLabel>
            <IonInput value={rut} onIonChange={(e) => setRut(e.detail.value!)} />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Email</IonLabel>
            <IonInput type="email" value={email} onIonChange={(e) => setEmail(e.detail.value!)} />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Número Telefónico</IonLabel>
            <IonInput value={phone} onIonChange={(e) => setPhone(e.detail.value!)} />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Región</IonLabel>
            <IonInput value={region} onIonChange={(e) => setRegion(e.detail.value!)} />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Comuna</IonLabel>
            <IonInput value={commune} onIonChange={(e) => setCommune(e.detail.value!)} />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Contraseña</IonLabel>
            <IonInput type="password" value={password} onIonChange={(e) => setPassword(e.detail.value!)} />
          </IonItem>
        </IonList>
        <IonButton expand="full" onClick={handleSubmit}>
          Crear Perfil
        </IonButton>
        <IonButton expand="full" color="medium" onClick={handleBack} style={{ marginTop: '10px' }}>
          Volver
        </IonButton>
        
        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message="Perfil creado exitosamente!"
          duration={2000}
        />
      </IonContent>
    </IonPage>
  );
};

export default CrearPerfil;
