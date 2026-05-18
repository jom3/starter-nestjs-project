# Starter NestJS Project

Un starter moderno para backend construido con NestJS, Prisma, PostgreSQL, TypeScript y ESLint Flat Config.

🌐 Idiomas

* [English](./README.md)
* Español (actual)

---

## Características

* NestJS Version 11.0.21
* Prisma ORM Version 7.8.0
* PostgreSQL
* TypeScript NodeNext
* ESLint Flat Config
* Prettier
* Swagger
* Winston Logger
* Alias de rutas (`@/*`)
* ValidationPipe
* Soporte para variables de entorno
* Compilación incremental de TypeScript

---

## Requisitos

* Node.js 22+
* pnpm
* PostgreSQL

---

## Instalación

Instalar dependencias:

```bash
pnpm install
```

---

## Variables de entorno

Crear archivo de entorno:

```bash
cp .env.example .env
```

Ejemplo:

```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/app"

PORT=3000

NODE_ENV="development"
```

---

## Configuración de Prisma

Generar cliente Prisma:

```bash
pnpm prisma generate
```

Ejecutar migraciones:

```bash
pnpm prisma migrate dev
```

---

## Ejecutar servidor en desarrollo

```bash
pnpm dev
```

---

## Documentación Swagger

Disponible en:

```txt
http://localhost:3000/docs
```

---

## Scripts disponibles

```bash
pnpm dev
pnpm build
pnpm start

pnpm lint
pnpm format

pnpm prisma generate
pnpm prisma migrate dev
pnpm prisma studio
```

---

## Estructura del proyecto

```txt
src/
│
├── config/
├── generated/
├── modules/
├── prisma/
├── shared/
└── main.ts
```

---

## Tecnologías

* NestJS
* Prisma ORM
* PostgreSQL
* TypeScript
* ESLint
* Prettier
* Winston

---

## Licencia

MIT
