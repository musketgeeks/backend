import { config } from 'dotenv';
import { DataSource } from 'typeorm';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

config();

const ormDbConfig: PostgresConnectionOptions = {
	type: 'postgres',
	schema: 'public',
	host: process.env.DATABASE_OUTSIDE_HOST ?? 'localhost',
	port: Number(process.env.DATABASE_OUTSIDE_PORT) ?? 5432,
	username: process.env.DATABASE_USER,
	password: process.env.DATABASE_PASSWORD,
	database: process.env.DATABASE_NAME,
	migrationsTableName: 'migrations',
	logging: false,
	migrationsRun: true
};

const ormDevConfig: Partial<PostgresConnectionOptions> = {
	migrations: ['src/database/migrations/*.{js,ts}']
	// entities: ['src/modules/**/entities/*.entity.ts']
	// synchronize: true
};

const ormProdConfig: Partial<PostgresConnectionOptions> = {
	migrations: ['dist/database/migrations/*.{js}'],
	// entities: ['dist/modules/**/entities/*.entity.js'],
	synchronize: false
};

const envConfig =
	process.env.NODE_ENV === 'production' ? ormProdConfig : ormDevConfig;

export const OrmConfig: PostgresConnectionOptions = {
	...ormDbConfig,
	...envConfig
};

export default new DataSource(OrmConfig);
