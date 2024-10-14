import React, { useState } from 'react';
import { IonContent, IonPage, IonInput, IonButton, IonItem, IonLabel, IonHeader, IonToolbar, IonTitle, IonIcon, IonFooter, IonRouterOutlet } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './iniciarsesion.css';
import { logoFacebook, logoTwitter, logoInstagram } from 'ionicons/icons';

const iniciarsesion: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const history = useHistory();

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = (password: string) => {
    const re = /^[A-Za-z\d@$!%*?&]{8,}$/;
    return re.test(password);
  };

  const handleLogin = () => {
    let valid = true;

    if (!validateEmail(email)) {
      setEmailError('Formato de correo electrónico incorrecto.');
      valid = false;
    } else {
      setEmailError('');
    }

    if (!validatePassword(password)) {
      setPasswordError('La contraseña debe tener al menos 8 caracteres.');
      valid = false;
    } else {
      setPasswordError('');
    }

    if (valid) {
      history.push('./Tab1');
    }
  };

  const handleRegister = () => {
    history.push('./registro');
  };

  return (
    <IonPage>
      <IonHeader>
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
            {emailError && <p style={{ color: 'red' }}>{emailError}</p>}

            <IonItem>
              <IonLabel position="floating">Password</IonLabel>
              <IonInput type="password" value={password} onIonChange={(e) => setPassword(e.detail.value!)} />
            </IonItem>
            {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}

            <a href='#'>Olvido su contraseña?</a>
            <IonButton expand="block" onClick={handleLogin}>
              Login
            </IonButton>
            <IonButton expand="block" onClick={handleRegister}>
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