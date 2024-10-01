import React, { useState } from 'react';
import { IonContent, IonPage, IonInput, IonButton, IonItem, IonLabel, IonHeader, IonToolbar, IonTitle, IonIcon, IonFooter, IonRouterOutlet } from '@ionic/react';
import { Route, useHistory,Redirect } from 'react-router-dom';

import './iniciarsesion.css'
import { logoFacebook, logoTwitter, logoInstagram } from 'ionicons/icons';

const iniciarsesion: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const handleLogin = () => {
    history.push('./Tab1');

  };

  return (
    <IonPage>
      <IonHeader >
          <IonToolbar>
          <IonTitle>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ 
                width: '24px', 
                height: '24px', 
                backgroundColor: '#007bff', 
                borderRadius: '50%', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                marginRight: '8px',
                color: 'white',
                fontWeight: 'bold'
              }}>
                G
              </div>
              Gryp
            </div>
          </IonTitle>
          </IonToolbar>
      </IonHeader>
      <IonContent className="login-page">
      <div className="form-container">
          <div className="form-content">
            <h1>Inicia Sesión</h1>
            <IonItem>
              <IonLabel position="floating">Email</IonLabel>
              <IonInput type="email" value={email} onIonChange={(e) => setEmail(e.detail.value!)} />
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Password</IonLabel>
              <IonInput type="password" value={password} onIonChange={(e) => setPassword(e.detail.value!)} />
            </IonItem>
            <a href='#'>Olvido su contraseña?</a>
            <IonButton expand="block" onClick={handleLogin}>
              Login
            </IonButton>
            <IonButton expand="block">
              Registrarme
            </IonButton>
          </div>
        </div>
      </IonContent>
      <IonFooter>
          <div className="social-icons">
              <IonIcon icon={logoInstagram} />
              <IonIcon icon={logoTwitter} />
              <IonIcon icon={logoFacebook} />
          </div>
      </IonFooter>
    </IonPage>
  );
};

export default iniciarsesion;