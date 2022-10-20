import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	const configService = app.get<ConfigService>(ConfigService);
	const appConfig = configService.get('app');

	app.enableCors();

	await app
		.useGlobalPipes(
			new ValidationPipe({
				whitelist: true,
				forbidNonWhitelisted: true,
				transform: true
			})
		)
		.listen(appConfig.get('app.port'));
}

bootstrap();
