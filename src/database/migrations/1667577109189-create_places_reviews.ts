import {
	MigrationInterface,
	QueryRunner,
	Table,
	TableForeignKey
} from 'typeorm';

import { timestampsFields } from '@database/helpers/timestamps.fields';
import { uuidField } from '@database/helpers/uuid.field';

export class createPlacesReviews1667577109189 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'places_reviews',
				columns: [
					uuidField,
					{
						name: 'place_id',
						type: 'uuid',
						isNullable: true
					},
					{
						name: 'rate',
						type: 'varchar'
					},
					{
						name: 'comments',
						type: 'varchar'
					},
					{
						name: 'created_by',
						type: 'uuid',
						isNullable: true
					},
					...timestampsFields
				]
			})
		);

		await queryRunner.createForeignKey(
			'places_reviews',
			new TableForeignKey({
				name: 'places_reviews_place_fk',
				columnNames: ['place_id'],
				referencedTableName: 'places',
				referencedColumnNames: ['id'],
				onDelete: 'CASCADE'
			})
		);

		await queryRunner.createForeignKey(
			'places_reviews',
			new TableForeignKey({
				name: 'places_reviews_created_by_fk',
				columnNames: ['created_by'],
				referencedTableName: 'users',
				referencedColumnNames: ['id'],
				onDelete: 'CASCADE'
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropForeignKey(
			'places_reviews',
			'places_reviews_place_fk'
		);

		await queryRunner.dropForeignKey(
			'places_reviews',
			'places_reviews_created_by_fk'
		);

		await queryRunner.dropTable('places_images');
	}
}
