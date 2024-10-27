# Caso de Estudio
Nuestro proyecto se centra en un sistema de gestion de restaurantes llamado "Gryp" el cual se enfoca en facilitar el manejo del restaurante con funciones para gestionar pedidos, mesas del restaurante, gestión de inventario entre otras funciones.

Las interfaces (UI) que he implementado de acuerdo al diseño de las __UI Figma__ presentadas son: 

1. Descarga de reportes 
2. Gestión de mesas
3. Disponibilidad de mesas
4. Gestión de pedidos
5. Gestión de menu
6. Gestión de inventario 
7. Gestión de trabajadores

Adicional 
8. Inicio de sesión 
9. Registro

La base de datos que he seleccionado es relacional, el motor de la base de datos ha usar es MySQL.

[Modelo de la BD](GrypDB.png)

# Justificación

## Rendimiento y escalabilidad

Una base de datos relacional es ideal para "Gryp" debido a que:

El sistema maneja múltiples entidades interrelacionadas (mesas, pedidos, inventario, empleados)
Las bases de datos relacionales garantizan la integridad referencial, crucial para:

-Vincular pedidos con mesas específicas
-Relacionar ítems del menú con el inventario
-Asignar pedidos a trabajadores específicos

# Lectura Archivo JSON
En los componentes de iniciar sesión utilizamos una lectura de JSON para poder logearnos, para poder acceder al proyecto puedes usar los siguientes perfiles:

Usuario 1
 email: "usuario@ejemplo.com"
 password: "password123"
 
Usuario 2
 email: "admin1@gmail.com"
 password: "password123"

Otro componente el cual utiliza una lectura de un archivo JSON es el componente de inventario el cual muestra el inventario de un restaurante.



