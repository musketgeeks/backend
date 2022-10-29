import { ConfigService } from '@nestjs/config';
import { DataSource } from 'typeorm';

const configService = new ConfigService();

export default new DataSource({
	type: 'postgres',
	host: configService.get('database.host'),
	port: configService.get('database.port'),
	username: configService.get('database.user'),
	password: configService.get('database.password'),
	database: configService.get('database.name'),
	entities: []
});
