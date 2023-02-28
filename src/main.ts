import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { ParametrosModule } from './parametros/parametros.module';
import { ValorParametroModule } from './valor-parametro/valor-parametro.module';
import { UsersModule } from './users/users.module';

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
    .setDescription('Documentacion de todos los endpoints de la aplicacion')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);


  //----------------Parameters --------------------------------
  const parametroConfig = new DocumentBuilder()
    .setTitle('Parametro')
    .setDescription('Documentacio de los endpoints de Parametros')
    .setVersion('1.0')
    .build();
  const parametroDocument = SwaggerModule.createDocument(app, parametroConfig, {
    include: [ParametrosModule]
  });
  SwaggerModule.setup('api/parametro', app, parametroDocument);


  //----------------Valor-Parametros --------------------------------
  const valorParametroConfig = new DocumentBuilder()
    .setTitle('Valor-parametro')
    .setDescription('Documentacio de los endpoints de valor-parametro')
    .setVersion('1.0')
    .build();
  const valorParametroDocument = SwaggerModule.createDocument(app, valorParametroConfig, {
    include: [ValorParametroModule]
  });
  SwaggerModule.setup('api/valor-parametro', app, valorParametroDocument);


  //----------------User --------------------------------
  const userConfig = new DocumentBuilder()
    .setTitle('User')
    .setDescription('Documentacio de los endpoints de user')
    .setVersion('1.0')
    .build();
  const userDocument = SwaggerModule.createDocument(app, userConfig, {
    include: [UsersModule]
  });
  SwaggerModule.setup('api/user', app, userDocument);


  await app.listen(3000);
}
bootstrap();
