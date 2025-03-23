![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) ![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)

# Proyecto de Visualización de Razas de Perros

[English Version](README_en.md) 🇬🇧

## Índice

- [Prueba Técnica Frontend - Strands](#prueba-técnica-frontend---strands)
- [Descripción](#descripción)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Tareas Completadas](#tareas-completadas)
  - [Tarea 1: Obtener Lista de Razas](#tarea-1-obtener-lista-de-razas)
  - [Tarea 2: Conteo de Imágenes por Raza](#tarea-2-conteo-de-imágenes-por-raza)
  - [Tarea 3: Visualización de Resultados](#tarea-3-visualización-de-resultados)
  - [Extra: Pruebas Unitarias](#extra-pruebas-unitarias)
- [Cómo Ejecutar el Proyecto](#cómo-ejecutar-el-proyecto)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Pruebas Unitarias](#pruebas-unitarias)
- [Preguntas](#preguntas)
  - [1. Decisiones tomadas durante el desarrollo](#1-describe-todas-las-decisiones-que-tomaste-durante-el-desarrollo-y-el-razonamiento-detrás-de-ellas)
  - [2. Características adicionales](#2-si-tuvieras-más-tiempo-qué-otras-características-añadirías-a-tu-aplicación-y-cómo-las-construirías)

## Prueba Técnica Frontend - Strands

Esta aplicación es el resultado de la prueba técnica propuesta por Strands. El objetivo era crear una aplicación utilizando React, Redux y TypeScript para interactuar con la API de Dog CEO y visualizar datos sobre razas de perros.

### Requerimientos originales:

**Task 1: Obtener la lista de todas las razas de perros**

- Utilizar la API de https://dog.ceo/dog-api/documentation/ para recuperar todas las razas de perros.
- Guardar esta información en algún tipo de store.
- No es necesario recuperar listas de sub-razas.

**Task 2: Contar perros**

- Para cada raza, obtener todas sus imágenes (solo los enlaces) y contar cuántas hay.
- Guardar esa cantidad en algún lugar.

**Task 3: Mostrar los resultados**

- Dibujar un gráfico circular que muestre el porcentaje de imágenes para cada raza (o las 10 principales con más imágenes).
- Utilizar Recharts como biblioteca de gráficos.

**Extra: Tests unitarios**

- Añadir tests unitarios a la aplicación (preferiblemente con React Testing Library).

## Descripción

Este proyecto es una aplicación web desarrollada con Next.js y TypeScript que permite visualizar información sobre las razas de perros utilizando la API pública de Dog CEO. La aplicación muestra un listado de razas de perros, cuenta las imágenes disponibles para cada raza y presenta esta información en un gráfico circular.

## Tecnologías Utilizadas

- **Next.js 15**: Framework de React para aplicaciones web
- **TypeScript**: Para tipado estático y mejor desarrollo
- **Redux Toolkit**: Para gestión de estado de la aplicación
- **Recharts**: Para la visualización de datos en gráficos
- **Tailwind CSS**: Para estilos y diseño responsive
- **Jest y React Testing Library**: Para pruebas unitarias

## Tareas Completadas

### Tarea 1: Obtener Lista de Razas

- ✅ Se ha implementado la conexión con la API de Dog CEO para obtener todas las razas de perros.
- ✅ Los datos se almacenan en un store de Redux para su fácil acceso en toda la aplicación.

### Tarea 2: Conteo de Imágenes por Raza

- ✅ Para cada raza se obtienen los enlaces a sus imágenes.
- ✅ Se cuenta el número de imágenes disponibles por raza.
- ✅ Esta información se almacena en el store de Redux.

### Tarea 3: Visualización de Resultados

- ✅ Se ha implementado un gráfico circular usando Recharts.
- ✅ El gráfico muestra el porcentaje de imágenes para cada raza.
- ✅ Se muestran las 10 razas con mayor número de imágenes en el gráfico.

### Extra: Pruebas Unitarias

- ✅ Se han desarrollado pruebas unitarias con Jest y React Testing Library.
- ✅ Se prueban componentes, lógica de Redux y funcionalidades principales.
- ✅ Se utiliza un enfoque de prueba que simula el comportamiento real del usuario.

## Cómo Ejecutar el Proyecto

1. Instalar dependencias:

```bash
npm install
```

2. Iniciar el servidor de desarrollo:

```bash
npm run dev
```

3. Ejecutar pruebas:

```bash
npm test
```

## Estructura del Proyecto

- `/app`: Contiene los componentes principales de la aplicación y la estructura de rutas.
- `/components`: Componentes reutilizables como BreedsList y PieChart.
- `/store`: Configuración de Redux y los slices para gestión del estado.
- `/__tests__`: Contiene las pruebas unitarias de la aplicación.
- `/jest.config.js`: Configuración de Jest para las pruebas.
- `/jest.setup.js`: Configuración adicional para las pruebas.

## Pruebas Unitarias

Las pruebas unitarias se han implementado utilizando Jest y React Testing Library. Se han creado tests para:

- Verificar la correcta renderización de componentes
- Comprobar la funcionalidad de filtrado en el listado de razas
- Validar el funcionamiento del store de Redux
- Asegurar que el gráfico circular muestra la información correctamente

Para ejecutar las pruebas use el comando `npm test`.

## Preguntas

### 1. Describe todas las decisiones que tomaste durante el desarrollo y el razonamiento detrás de ellas.

- La primera decisión fue utilizar Next.js, ya que, para mí, es uno de los frameworks más completos que hay en este momento y, además, es con el que más experiencia tengo.

- Luego decidí utilizar Redux Toolkit, ya que es una versión actualizada y más simple que Redux tradicional. Permite ahorrar mucho código repetitivo, tiene una configuración más sencilla, un mejor manejo de la asincronía y un mejor rendimiento, por lo que es una opción más asequible.

- Para los estilos utilizo Tailwind, ya que es la forma más rápida de crear un diseño responsive y tengo bastante experiencia con él. Así puedo desarrollar un diseño simple y adaptable.

- Para las llamadas a la API de Dog CEO, decidí crear funciones específicas para cada endpoint, manejando adecuadamente los estados de carga y error. Además, implementé un sistema de caché básico en Redux para evitar llamadas redundantes.

- Para los gráficos, utilicé Recharts, ya que es lo recomendado y, además, tengo algo de experiencia con él. Es una de las mejores librerías disponibles.

- Decidí implementar un filtro de búsqueda para la lista de razas, lo que facilita al usuario encontrar razas específicas en caso de que la lista sea extensa.

- En cuanto a la estructura del proyecto, separé claramente los componentes, la lógica de Redux y las utilidades, siguiendo el principio de responsabilidad única para facilitar el mantenimiento y las pruebas.

- Para las pruebas unitarias, utilicé React Testing Library, como se sugería, enfocándome en probar el comportamiento desde la perspectiva del usuario y no en los detalles de implementación.

### 2. Si tuvieras más tiempo, ¿qué otras características añadirías a tu aplicación y cómo las construirías?

- Poder ver una imagen aleatoria de cada raza de perro: la api en cada raza ofrece unas imagenes,
  se puede hacer que de cada raza seleccionada, aparezca una imagen aleatoria de dicha raza.

- Mostrar unicamente los perros con sub-raza: utilizar un filtro que muestre solo los perros con sub-raza.

- Implementar una galería de imágenes: añadiría una sección donde el usuario pueda ver una galería de imágenes para cada raza seleccionada, utilizando un sistema de paginación para manejar la carga progresiva de imágenes.

- Añadir un modo oscuro/claro: implementaría un toggle para cambiar entre modo claro y oscuro, aprovechando las capacidades de Tailwind para themes.

- Persistencia de datos: utilizaría localStorage para guardar los resultados de las consultas a la API, lo que reduciría significativamente los tiempos de carga en visitas posteriores.

- Visualizaciones de datos adicionales: además del gráfico circular, añadiría gráficos de barras para comparar directamente el número de imágenes entre razas, utilizando también Recharts.

- Mejorar el rendimiento: implementaría técnicas de lazy loading para las imágenes y resultados.

- Sistema de favoritos: permitiría a los usuarios marcar razas como favoritas para acceder rápidamente a ellas, guardando estas preferencias en localStorage.
