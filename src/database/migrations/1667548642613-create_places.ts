import { MigrationInterface, QueryRunner, Table } from 'typeorm';

import { timestampsFields } from '@database/helpers/timestamps.fields';
import { uuidField } from '@database/helpers/uuid.field';

export class createPlaces1667548642613 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'places',
				columns: [
					uuidField,
					{
						name: 'name',
						type: 'varchar'
					},
					{
						name: 'slug',
						type: 'varchar'
					},
					{
						name: 'description',
						type: 'text'
					},
					{
						// Latitude
						name: 'lat',
						type: 'varchar'
					},
					{
						// Longitude
						name: 'long',
						type: 'varchar'
					},
					{
						name: 'city',
						type: 'varchar'
					},
					{
						name: 'country',
						type: 'varchar'
					},
					...timestampsFields
				]
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('places');
	}
}
