import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { ParametrosModule } from './parametros/parametros.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    })
  );
  const config = new DocumentBuilder()
    .setTitle('NeoBok RESTFul API')
    .setDescription('NeoBook endpoints')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const parametroDocument = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, parametroDocument,{
    include: [ParametrosModule],
  });
  await app.listen(3000);
}
bootstrap();
