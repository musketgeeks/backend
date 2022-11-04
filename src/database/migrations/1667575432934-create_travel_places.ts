import {
	MigrationInterface,
	QueryRunner,
	Table,
	TableForeignKey
} from 'typeorm';

import { timestampsFields } from '@database/helpers/timestamps.fields';
import { uuidField } from '@database/helpers/uuid.field';

export class createTravelPlaces1667575432934 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'travel_places',
				columns: [
					uuidField,
					{
						name: 'travel_id',
						type: 'uuid',
						isNullable: true
					},
					{
						name: 'place_id',
						type: 'uuid',
						isNullable: true
					},
					{
						name: 'day',
						type: 'integer'
					},
					{
						name: 'order',
						type: 'integer'
					},
					{
						name: 'visited',
						type: 'boolean',
						default: 'false'
					},
					{
						name: 'have_priority',
						type: 'boolean',
						default: 'false'
					},
					...timestampsFields
				]
			})
		);

		await queryRunner.createForeignKey(
			'travel_places',
			new TableForeignKey({
				name: 'travel_places_travel_fk',
				columnNames: ['travel_id'],
				referencedTableName: 'travels',
				referencedColumnNames: ['id'],
				onDelete: 'CASCADE'
			})
		);

		await queryRunner.createForeignKey(
			'travel_places',
			new TableForeignKey({
				name: 'travel_places_place_fk',
				columnNames: ['place_id'],
				referencedTableName: 'places',
				referencedColumnNames: ['id'],
				onDelete: 'CASCADE'
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropForeignKey(
			'travel_places',
			'travel_places_travel_fk'
		);

		await queryRunner.dropForeignKey(
			'travel_places',
			'travel_places_place_fk'
		);

		await queryRunner.dropTable('travel_places');
	}
}
