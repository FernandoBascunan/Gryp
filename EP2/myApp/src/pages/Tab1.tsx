import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonRouterOutlet, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';
import { personCircle, gridOutline, restaurantOutline, cubeOutline } from 'ionicons/icons';
import { IonReactRouter } from '@ionic/react-router';

import Perfil from './Perfil';
import Mesas from './Mesas';
import Menu from './Menu';
import Inventario from './Inventario';
import IniciarSesion from './iniciarsesion';

const Tab1: React.FC = () => {
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
      <IonContent>
        <IonReactRouter>
          <IonTabs>
            <IonRouterOutlet>
              <Route path="/Perfil" component={Perfil} exact={true} />
              <Route path="/Mesas" component={Mesas} exact={true} />
              <Route path="/Menu" component={Menu} exact={true} />
              <Route path="/Inventario" component={Inventario} exact={true} />
              <Route path="/iniciarsesion" component={IniciarSesion} exact={true} />
              <Route path="/Tab1" render={() => <Redirect to="/Perfil" />} exact={true} />
            </IonRouterOutlet>



            <IonTabBar slot="bottom">
              <IonTabButton tab="perfil" href="/Perfil">
                <IonIcon icon={personCircle} />
                <IonLabel>Perfil</IonLabel>
              </IonTabButton>


              <IonTabButton tab="mesas" href="/Mesas">
                <IonIcon icon={gridOutline} />
                <IonLabel>Mesas</IonLabel>
              </IonTabButton>


              <IonTabButton tab="Menu" href="/Menu">
                <IonIcon icon={restaurantOutline} />
                <IonLabel>Menú</IonLabel>
              </IonTabButton>


              <IonTabButton tab="inventario" href="/Inventario">
                <IonIcon icon={cubeOutline} />
                <IonLabel>Inventario</IonLabel>
              </IonTabButton>
            </IonTabBar>


          </IonTabs>
        </IonReactRouter>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;