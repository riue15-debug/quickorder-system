# 🍔 QuickOrder System

**QuickOrder System** es un prototipo de arquitectura nativa en la nube (*Cloud-Native*) diseñado para la gestión en tiempo real de pedidos en restaurantes. Este sistema implementa un enfoque de microservicios con contenedores, asegurando alta disponibilidad, tolerancia a fallos y una estructura preparada para escalar en la nube (AWS).

---

## 🏗️ Arquitectura del Sistema

El sistema separa responsabilidades mediante componentes independientes:
* **API / Enrutamiento:** Gestiona las peticiones de entrada de los clientes.
* **Order Service:** Microservicio en **Node.js (Express)** encargado de procesar y validar las órdenes.
* **Base de Datos:** **PostgreSQL** desplegado mediante contenedores para garantizar persistencia y transacciones seguras.
* **Orquestación local:** **Docker** y **Docker Compose** para la ejecución aislada y reproducible de los servicios.

---

## 📁 Estructura del Proyecto

```text
quickorder-system/
├── database/
│   └── init.sql            # Script de inicialización de la base de datos
├── order-service/
│   ├── src/
│   │   └── app.js          # Lógica principal del microservicio y endpoints
│   ├── Dockerfile          # Instrucciones para empaquetar el microservicio
│   └── package.json        # Dependencias de Node.js (Express, pg)
├── docker-compose.yml      # Orquestador de contenedores (App + Base de datos)
└── README.md               # Documentación del proyecto
