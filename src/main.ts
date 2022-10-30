import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppConfigService } from '@app/config/app/config.service';

import { AppModule } from './app.module';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	const appConfig: AppConfigService =
		app.get<AppConfigService>(AppConfigService);

	app.enableCors();

	await app
		.useGlobalPipes(
			new ValidationPipe({
				whitelist: true,
				forbidNonWhitelisted: true,
				transform: true
			})
		)
		.listen(appConfig.port, () =>
			Logger.log(`Backend running on port ${appConfig.port}`)
		);
}

bootstrap();
