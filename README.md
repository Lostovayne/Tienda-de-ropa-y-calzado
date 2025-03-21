# Teslo-Shop

## Descripción

Teslo-Shop es un proyecto de comercio electrónico construido con Next.js, React y Tailwind CSS.

## Versión

La versión actual del proyecto es 0.1.0.

## Correr el proyecto

- Clonar el repositorio
- Instalar las dependencias `pnpm install`
- Copiar las variables de .env.example en .env
- Agregar los valores a las variables de entorno
- Levantar el contenedor de docker `docker compose up -d`
- Migrar la BD para la seed
- Ejecutar seed `pnpm seed`
- Ejecutar el script `pnpm dev`
- Abrir el navegador en http://localhost:3000

## Prisma se está utilizando como ORM , sus comandos son

- [Prisma](https://prisma.io)
- Creacion de una bd de postgresql en neontech pnpx instagres
- Instalacion de Prisma `pnpm install prisma --save-dev`
- Inicializar Prisma `pnpm dlx prisma init --datasource-provider PostgreSQL`
- Crear el Schema de Prisma
- Crear el Cliente de Prisma
- Si ya se tiene una base de datos puede usarse el comando `pnpm prisma db pull` para crear el Schema basado en ella
- Ejecutar el comando para la migracion `pnpm dlx prisma migrate dev --name nombreMigra`

## El proyecto usa un mini servidor de Node para la seed en base de datos.

- Se instaló ts-node para ejecutar el script de Typescripts
- `pnpm seed`
- Esto corre el script que limpia la base de datos y agrega la data nueva

## Scripts

El proyecto tiene los siguientes scripts que puedes ejecutar:

- `dev`: Inicia el servidor de desarrollo de Next.js.
- `build`: Crea la versión de producción del proyecto.
- `start`: Inicia el servidor de producción de Next.js.
- `lint`: Ejecuta el linter del proyecto.

## Demo

![screely-1717710304262](https://github.com/Lostovayne/Tienda-de-Ropa-Tesla-Shop/assets/92962731/b34bda60-645e-4934-b282-04d3f668e6b1)

## Datos de prueba

- Se encuentran en el Seed de prueba que se carga para correr la base de datos.

## Comandos de la BD

- `npx prisma generate`
- `npx prisma db push`
- `npm run seed`

## Dependencias

El proyecto utiliza las siguientes dependencias:

- `clsx`: ^2.1.0
- `next`: 14.0.4
- `react`: ^18
- `react-dom`: ^18
- `react-icons`: ^4.12.0
- `tailwind-merge`: ^2.2.0

## Dependencias de desarrollo

El proyecto utiliza las siguientes dependencias de desarrollo:

- `@types/node`: ^20
- `@types/react`: ^18
- `@types/react-dom`: ^18
- `autoprefixer`: ^10.0.1
- `eslint`: ^8
- `eslint-config-next`: 14.0.4
- `postcss`: ^8
- `tailwindcss`: ^3.3.0
- `typescript`: ^5

## Estructura de Carpetas

-app - carpeta de la aplicación
-components - carpeta de componentes
-config - carpeta de configuración
-public - carpeta de archivos estáticos
-lib - carpeta de bibliotecas
-auth - carpeta de autenticación
-shop - carpeta de tienda

## Mejoras pendientes de implementar

[] - Implementar la funcionalidad de pago con Stripe.
[] - Agregar la funcionalidad de búsqueda de productos.
[] - Implementar la mejora de la metadata de los productos.

## Licencia

Este proyecto es privado.
