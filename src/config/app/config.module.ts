import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from 'src/config/app/configuration';

import { AppConfigService } from '@app/config/app/config.service';

@Module({
	imports: [
		ConfigModule.forRoot({
			load: [configuration]
		})
	],
	providers: [ConfigService, AppConfigService],
	exports: [ConfigService, AppConfigService]
})
export class AppConfigModule {}
