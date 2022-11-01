import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { AuthConfigService } from './config.service';
import configuration from './configuration';

@Module({
	imports: [
		ConfigModule.forRoot({
			load: [configuration]
		})
	],
	providers: [ConfigService, AuthConfigService],
	exports: [ConfigService, AuthConfigService]
})
export class AuthConfigModule {}
