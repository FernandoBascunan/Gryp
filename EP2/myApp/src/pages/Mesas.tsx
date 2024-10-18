import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonIcon,
  IonAlert
} from '@ionic/react';
import { add, remove, close } from 'ionicons/icons';
import './Mesas.css';
import Footer from './Footer';
import Header from './Header';

interface Mesa {
  id: number;
  numero: number;
}

const Mesas: React.FC = () => {
  const [mesas, setMesas] = useState<Mesa[]>([]);
  const [mesasSeleccionadas, setMesasSeleccionadas] = useState<number[]>([]);
  const [showAlert, setShowAlert] = useState(false);

  const agregarMesa = () => {
    const nuevoNumero = mesas.length > 0 ? Math.max(...mesas.map(m => m.numero)) + 1 : 1;
    const nuevaMesa: Mesa = {
      id: Date.now(),
      numero: nuevoNumero
    };
    setMesas([...mesas, nuevaMesa]);
  };

  const toggleSeleccionMesa = (id: number) => {
    setMesasSeleccionadas(prevState => 
      prevState.includes(id)
        ? prevState.filter(mesaId => mesaId !== id)
        : [...prevState, id]
    );
  };

  const eliminarMesasSeleccionadas = () => {
    if (mesasSeleccionadas.length > 0) {
      setShowAlert(true);
    }
  };

  const confirmarEliminacion = () => {
    setMesas(mesas.filter(mesa => !mesasSeleccionadas.includes(mesa.id)));
    setMesasSeleccionadas([]);
    setShowAlert(false);
  };

  return (
    <IonPage>
      <Header/>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Gestión de Mesas</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className="acciones">
          <IonButton className="boton-accion" onClick={agregarMesa}>
            <IonIcon icon={add} />
            Agregar Mesa
          </IonButton>
          <IonButton className="boton-accion" color="danger" onClick={eliminarMesasSeleccionadas} disabled={mesas.length === 0}>
            <IonIcon icon={remove} />
            Eliminar Mesas Seleccionadas
          </IonButton>
        </div>
        <IonGrid>
          <IonRow>
            {mesas.map(mesa => (
              <IonCol size="4" key={mesa.id}>
                <div 
                  className={`mesa ${mesasSeleccionadas.includes(mesa.id) ? 'seleccionada' : ''}`} 
                  onClick={() => toggleSeleccionMesa(mesa.id)}
                >
                  <span className="numero-mesa">{mesa.numero}</span>
                  {mesasSeleccionadas.includes(mesa.id) && (
                    <IonIcon icon={close} className="icono-seleccionado" />
                  )}
                </div>
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          header="Confirmar eliminación"
          message="¿Estás seguro de que quieres eliminar las mesas seleccionadas?"
          buttons={[
            {
              text: 'Cancelar',
              role: 'cancel',
              handler: () => setShowAlert(false)
            },
            {
              text: 'Eliminar',
              handler: confirmarEliminacion
            }
          ]}
        />
      </IonContent>
      <Footer/>
    </IonPage>
  );
};

export default Mesas;