import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from 'src/config/database/configuration';

import { DatabaseConfigService } from '@app/config/database/config.service';

@Module({
	imports: [
		ConfigModule.forRoot({
			load: [configuration]
		})
	],
	providers: [ConfigService, DatabaseConfigService],
	exports: [ConfigService, DatabaseConfigService]
})
export class DatabaseConfigModule {}
