import {
	MigrationInterface,
	QueryRunner,
	Table,
	TableForeignKey
} from 'typeorm';

import { timestampsFields } from '@database/helpers/timestamps.fields';
import { uuidField } from '@database/helpers/uuid.field';

export class createPlacesCategories1667552764960 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'place_categories',
				columns: [
					uuidField,
					{
						name: 'place_id',
						type: 'uuid',
						isNullable: true
					},
					{
						name: 'category_id',
						type: 'uuid',
						isNullable: true
					},
					...timestampsFields
				]
			})
		);

		await queryRunner.createForeignKey(
			'places_categories',
			new TableForeignKey({
				name: 'place_categories_place_fk',
				columnNames: ['place_id'],
				referencedTableName: 'places',
				referencedColumnNames: ['id'],
				onDelete: 'CASCADE'
			})
		);

		await queryRunner.createForeignKey(
			'places_categories',
			new TableForeignKey({
				name: 'place_categories_category_fk',
				columnNames: ['category_id'],
				referencedTableName: 'categories',
				referencedColumnNames: ['id'],
				onDelete: 'CASCADE'
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropForeignKey(
			'places_categories',
			'place_categories_place_fk'
		);

		await queryRunner.dropForeignKey(
			'places_categories',
			'place_categories_category_fk'
		);

		await queryRunner.dropTable('places_categories');
	}
}
