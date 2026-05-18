import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { WinstonConfig } from './config/winston.config';
import { SwaggerModule } from '@nestjs/swagger';
import { SwaggerConfig } from './config/swagger.config';

async function bootstrap() {
  try {
    const port = process.env.PORT ?? 3000;

    const app = await NestFactory.create(AppModule, {
      logger: WinstonConfig,
    });

    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
      }),
    );

    app.enableCors();
    app.setGlobalPrefix('api');

    const documentFactory = () =>
      SwaggerModule.createDocument(app, SwaggerConfig);
    SwaggerModule.setup('docs', app, documentFactory);

    await app.listen(port);

    Logger.log(`Server running on port ${port}`);
  } catch (error) {
    Logger.error(error);
  }
}
void bootstrap();
