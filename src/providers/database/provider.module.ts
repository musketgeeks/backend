import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { DatabaseType } from 'typeorm';

import { DatabaseConfigModule } from '@config/database/config.module';
import { DatabaseConfigService } from '@config/database/config.service';

@Module({
	imports: [
		TypeOrmModule.forRootAsync({
			imports: [DatabaseConfigModule],
			useFactory: async (dbConfigService: DatabaseConfigService) => ({
				type: 'postgres' as DatabaseType,
				host: dbConfigService.host,
				port: dbConfigService.port,
				username: dbConfigService.user,
				password: dbConfigService.password,
				database: dbConfigService.name,
				entities: ['./../modules/**/entities/*.entity.ts'],
				autoLoadEntities: true
			}),
			inject: [DatabaseConfigService]
		} as TypeOrmModuleAsyncOptions)
	]
})
export class DatabaseProviderModule {}
