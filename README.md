
# Danone Hackathon

## Background del proyecto

El proyecto tiene como objetivo principal adaptar un aplicativo web para mostrar a los usuarios los productos más ecológicos que ofrece Danone. Además, se brinda un formulario de contacto para que los usuarios interesados puedan comunicarse de inmediato. El proyecto se centra en promover la adopción de un plan de consumo limitado de calorías para mejorar la salud de los usuarios.

## Uso

Para la utilización del aplicativo no será necesario logearse,  podrás recorrer la página y observar los productos ecológicos que posee Danone además de poder buscar si sabes el nombre de alguno, y si te interesa el plan de consumo limitado de calorías podrás enviar información para que se pongan en contacto contigo.

## Instalación

Para el uso primero debemos instalar todas las dependencias del proyecto

`npm install`

Copiamos la carpeta .env.example

`cp .env .env.example`

Dentro de nuestro .env agregamos la siguiente variable de entrono

`HYGRAPH_API_URL=https://api-us-west-2.hygraph.com/v2/clj05fduv11a801umbzz3epri/master`

Procedemos a correr el proyecto

`npm run dev`

## Stack utilizado

* NextJs
* Tailwind
* TypeScript
* GraphQL
* CRM : Hygraph

## Toma de decisiones

Durante el desarrollo del proyecto, se tomaron las siguientes decisiones:

1. Arquitectura frontend: Se optó por utilizar un enfoque de arquitectura MVC para facilitar la organización y mantenimiento del código del frontend.
2. Diseño responsivo: Se implementó un diseño responsivo para garantizar que el aplicativo web sea accesible y se adapte correctamente a diferentes dispositivos y tamaños de pantalla.
3. Optimización de imágenes: Se aplicaron técnicas de compresión y optimización de imágenes para garantizar tiempos de carga rápidos y una experiencia de usuario fluida.
4. Seguridad de datos: Se implementaron medidas de seguridad para proteger la información sensible de los usuarios, como el cifrado de datos y la validación de formularios.

Estas decisiones se tomaron en base a consideraciones de rendimiento, usabilidad y seguridad, con el objetivo de proporcionar a los usuarios una experiencia óptima y segura al utilizar el aplicativo web.
