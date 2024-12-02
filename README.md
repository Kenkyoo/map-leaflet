# 🌍 Localizador de Usuario con Leaflet

Esta aplicación es un mapa interactivo desarrollado con **Leaflet** y **Vite**. Detecta la ubicación del usuario utilizando las capacidades de geolocalización del navegador y muestra su posición en un mapa. Además, incluye marcadores, un círculo que resalta su ubicación, y popups interactivos.

---

## 🚀 Funcionalidades

- **Geolocalización Automática**:
  - Detecta la ubicación del usuario en tiempo real.
  - Centra el mapa en las coordenadas del usuario.
- **Mapa Interactivo**:
  - Utiliza capas de OpenStreetMap para mostrar datos geográficos.
  - Incluye un marcador y un círculo que resaltan la posición detectada.
- **Popups**:
  - Mensajes interactivos para el usuario en diferentes elementos del mapa.

---

## 🛠️ Tecnologías Utilizadas

- **Leaflet.js**: Librería para mapas interactivos.
- **OpenStreetMap**: Fuente de datos geográficos.
- **Vite**: Herramienta de desarrollo rápida y ligera.
- **Materialize CSS**: Estilización moderna con diseño responsivo.

---

📚 Estructura del Proyecto
Archivos Principales:

    index.html:
        Contiene la estructura básica de la aplicación.
        Integra las hojas de estilo y scripts necesarios.

    main.js:
        Archivo principal que inicializa la aplicación.
        Integra los módulos de geolocalización, mapa y diseño de la interfaz.

    map.js:
        Configura y renderiza el mapa interactivo.
        Añade elementos visuales como marcadores, círculos y popups.

    counter.js (o geolocalización):
        Llama a la API de geolocalización del navegador.
        Retorna las coordenadas del usuario.

README para la Aplicación Leaflet 🚩

# 🌍 Localizador de Usuario con Leaflet

Esta aplicación es un mapa interactivo desarrollado con **Leaflet** y **Vite**. Detecta la ubicación del usuario utilizando las capacidades de geolocalización del navegador y muestra su posición en un mapa. Además, incluye marcadores, un círculo que resalta su ubicación, y popups interactivos.

---

## 🚀 Funcionalidades

- **Geolocalización Automática**:
  - Detecta la ubicación del usuario en tiempo real.
  - Centra el mapa en las coordenadas del usuario.
- **Mapa Interactivo**:
  - Utiliza capas de OpenStreetMap para mostrar datos geográficos.
  - Incluye un marcador y un círculo que resaltan la posición detectada.
- **Popups**:
  - Mensajes interactivos para el usuario en diferentes elementos del mapa.

---

## 🛠️ Tecnologías Utilizadas

- **Leaflet.js**: Librería para mapas interactivos.
- **OpenStreetMap**: Fuente de datos geográficos.
- **Vite**: Herramienta de desarrollo rápida y ligera.
- **Materialize CSS**: Estilización moderna con diseño responsivo.

---

## 📦 Cómo Usarlo

1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/tu-repositorio.git
   cd tu-repositorio

    Instala dependencias:

npm install

Ejecuta el servidor de desarrollo:

    npm run dev

    Abre la aplicación: Ve a http://localhost:5173 en tu navegador.

    Permite la geolocalización: Dale acceso a tu navegador para detectar la ubicación.

📚 Estructura del Proyecto
Archivos Principales:

    index.html:
        Contiene la estructura básica de la aplicación.
        Integra las hojas de estilo y scripts necesarios.

    main.js:
        Archivo principal que inicializa la aplicación.
        Integra los módulos de geolocalización, mapa y diseño de la interfaz.

    map.js:
        Configura y renderiza el mapa interactivo.
        Añade elementos visuales como marcadores, círculos y popups.

    counter.js (o geolocalización):
        Llama a la API de geolocalización del navegador.
        Retorna las coordenadas del usuario.

🌟 Personalización
Cambiar el Estilo del Mapa:

    Modifica la URL en map.js:

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { ... });

    Puedes usar otras fuentes como Mapbox o Stamen Design.

Cambiar el Zoom o Radio del Círculo:

    Ajusta los valores en setMap:

    var circle = L.circle([lat, lon], {
        color: 'blue', 
        radius: 1000 // Cambia el radio
    });

⚠️ Notas Importantes

    Permisos de Geolocalización: La aplicación necesita que el usuario permita el acceso a su ubicación. Si no se otorgan permisos, el mapa no podrá centrarse.

    Hosting en Producción: Usa servicios como Vercel o Netlify para desplegar la aplicación en línea.

    Compatibilidad: Funciona en navegadores modernos con soporte para geolocalización.

    
📝 Licencia

Este proyecto está bajo la licencia MIT. Puedes usarlo y adaptarlo como desees.
