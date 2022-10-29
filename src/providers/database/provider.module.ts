import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { DatabaseType } from 'typeorm';

import { DatabaseConfigService } from '@config/database/config.service';

@Module({
	imports: [
		TypeOrmModule.forRootAsync({
			imports: [DatabaseProviderModule],
			useFactory: async (dbConfigService: DatabaseConfigService) => ({
				type: 'postgres' as DatabaseType,
				host: dbConfigService.host,
				port: dbConfigService.port,
				username: dbConfigService.user,
				password: dbConfigService.password,
				database: dbConfigService.name,
				entities: []
			}),
			inject: [DatabaseConfigService]
		} as TypeOrmModuleAsyncOptions)
	]
})
export class DatabaseProviderModule {}
