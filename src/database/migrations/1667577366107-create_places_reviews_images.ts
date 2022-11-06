import {
	MigrationInterface,
	QueryRunner,
	Table,
	TableForeignKey
} from 'typeorm';

import { timestampsFields } from '@database/helpers/timestamps.fields';
import { uuidField } from '@database/helpers/uuid.field';

export class createPlacesReviewsImages1667577366107
	implements MigrationInterface
{
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'places_reviews_images',
				columns: [
					uuidField,
					{
						name: 'review_id',
						type: 'uuid',
						isNullable: true
					},
					{
						name: 'path',
						type: 'varchar'
					},
					{
						name: 'alt',
						type: 'varchar'
					},
					{
						name: 'uploaded_by',
						type: 'uuid',
						isNullable: true
					},
					...timestampsFields
				]
			})
		);

		await queryRunner.createForeignKey(
			'places_reviews_images',
			new TableForeignKey({
				name: 'places_reviews_images_review_fk',
				columnNames: ['review_id'],
				referencedTableName: 'places_reviews',
				referencedColumnNames: ['id'],
				onDelete: 'CASCADE'
			})
		);

		await queryRunner.createForeignKey(
			'places_reviews_images',
			new TableForeignKey({
				name: 'places_reviews_images_uploaded_by_fk',
				columnNames: ['uploaded_by'],
				referencedTableName: 'users',
				referencedColumnNames: ['id'],
				onDelete: 'CASCADE'
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropForeignKey(
			'places_reviews_images',
			'places_reviews_images_review_fk'
		);

		await queryRunner.dropForeignKey(
			'places_reviews_images',
			'places_reviews_images_uploaded_by_fk'
		);

		await queryRunner.dropTable('places_reviews_images');
	}
}
