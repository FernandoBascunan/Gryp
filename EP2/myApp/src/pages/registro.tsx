import React, { useState } from 'react';
import { 
  IonContent, 
  IonPage, 
  IonInput, 
  IonButton, 
  IonItem, 
  IonLabel, 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonIcon, 
  IonFooter,
  IonSelect,
  IonSelectOption,
  IonCheckbox
} from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { logoFacebook, logoTwitter, logoInstagram } from 'ionicons/icons';

import './registro.css' // Reutilizamos el mismo archivo CSS

// Definimos un tipo para las regiones
type Region = 'Región Metropolitana' | 'Valparaíso' | 'Biobío';

// Definimos una interfaz para el objeto de comunas
interface ComunasPorRegion {
  [key: string]: string[];
}

const Registro: React.FC = () => {
  const [username, setUsername] = useState('');
  const [rut, setRut] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [region, setRegion] = useState<Region | ''>('');
  const [comuna, setComuna] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const history = useHistory();

  const handleRegistro = () => {
    console.log('Registro exitoso');
    history.push('./iniciarsesion');
  };

  const regiones: Region[] = ['Región Metropolitana', 'Valparaíso', 'Biobío'];
  const comunas: ComunasPorRegion = {
    'Región Metropolitana': ['Santiago', 'Providencia', 'Las Condes'],
    'Valparaíso': ['Viña del Mar', 'Valparaíso', 'Quilpué'],
    'Biobío': ['Concepción', 'Talcahuano', 'Chillán']
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
            <h1>Registro</h1>
            <IonItem>
              <IonLabel position="floating">Nombre de usuario</IonLabel>
              <IonInput value={username} onIonChange={e => setUsername(e.detail.value!)} />
            </IonItem>
            <IonItem>
              <IonLabel position="floating">RUT</IonLabel>
              <IonInput value={rut} onIonChange={e => setRut(e.detail.value!)} />
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Email</IonLabel>
              <IonInput type="email" value={email} onIonChange={e => setEmail(e.detail.value!)} />
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Número telefónico</IonLabel>
              <IonInput type="tel" value={phone} onIonChange={e => setPhone(e.detail.value!)} />
            </IonItem>
            <IonItem>
              <IonLabel>Región</IonLabel>
              <IonSelect value={region} onIonChange={e => setRegion(e.detail.value)}>
                {regiones.map((reg) => (
                  <IonSelectOption key={reg} value={reg}>{reg}</IonSelectOption>
                ))}
              </IonSelect>
            </IonItem>
            <IonItem>
              <IonLabel>Comuna</IonLabel>
              <IonSelect value={comuna} onIonChange={e => setComuna(e.detail.value)} disabled={!region}>
                {region && comunas[region as Region].map((com) => (
                  <IonSelectOption key={com} value={com}>{com}</IonSelectOption>
                ))}
              </IonSelect>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Contraseña</IonLabel>
              <IonInput type="password" value={password} onIonChange={e => setPassword(e.detail.value!)} />
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Confirmar Contraseña</IonLabel>
              <IonInput type="password" value={confirmPassword} onIonChange={e => setConfirmPassword(e.detail.value!)} />
            </IonItem>
            <IonItem>
              <IonLabel>Acepto los términos y condiciones</IonLabel>
              <IonCheckbox checked={acceptTerms} onIonChange={e => setAcceptTerms(e.detail.checked)} />
            </IonItem>
            <IonButton expand="block" onClick={handleRegistro} disabled={!acceptTerms}>
              Registrarme
            </IonButton>
            <IonButton expand="block" fill="clear" onClick={() => history.push('./iniciarsesion')}>
              Ya tengo una cuenta
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

export default Registro;