import React, { useState } from 'react';
import { 
  IonContent, 
  IonGrid, 
  IonRow, 
  IonCol, 
  IonCard, 
  IonCardHeader, 
  IonCardTitle, 
  IonCardContent, 
  IonItem, 
  IonLabel, 
  IonToggle,
  IonToolbar,
  IonTitle,
  IonHeader,
  IonPage
} from '@ionic/react';
import { pizza, fastFood, leaf, fish } from 'ionicons/icons';
import Header from './Header';
import Footer from './Footer';
interface Dish {
  name: string;
  image: string;
  selected: boolean;
}

const Menu: React.FC = () => {
  const [dishes, setDishes] = useState<Dish[]>([
    { name: 'Pizza', image: pizza, selected: false },
    { name: 'Hamburguesa', image: fastFood, selected: false },
    { name: 'Ensalada', image: leaf, selected: false },
    { name: 'Sushi', image: fish, selected: false },
  ]);

  const handleToggleChange = (index: number) => {
    const newDishes = [...dishes];
    newDishes[index].selected = !newDishes[index].selected;
    setDishes(newDishes);
    console.log(`Plato ${dishes[index].name} ${dishes[index].selected ? 'seleccionado' : 'deseleccionado'}`);
  };

  return (
    
    <IonPage>
            <Header/>
      <IonContent>

      <IonHeader>
        <IonToolbar>
          <IonTitle>Perfil</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonGrid>
        <IonRow>
          {dishes.map((dish, index) => (
            <IonCol size="2" key={index}>
              <IonCard>
                <img src={dish.image} alt={dish.name} />
                <IonCardHeader>
                  <IonCardTitle>{dish.name}</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <IonItem lines="none">
                    <IonLabel>Seleccionar</IonLabel>
                    <IonToggle 
                      checked={dish.selected} 
                      onIonChange={() => handleToggleChange(index)}
                    />
                  </IonItem>
                </IonCardContent>
              </IonCard>
            </IonCol>
          ))}
        </IonRow>
      </IonGrid>

    </IonContent>
    <Footer/>
    </IonPage>
  );
};

export default Menu;