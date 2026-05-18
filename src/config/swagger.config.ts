import { DocumentBuilder } from "@nestjs/swagger";

  export const SwaggerConfig = new DocumentBuilder()
    .setTitle('Gestión de Relaciones con los Clientes')
    .setDescription('Sistema de gestion de clientes')
    .setVersion('1.0')
    .addTag('atencion de clientes')
    .build();