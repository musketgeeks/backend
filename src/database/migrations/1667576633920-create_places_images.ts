import {
	MigrationInterface,
	QueryRunner,
	Table,
	TableForeignKey
} from 'typeorm';

import { timestampsFields } from '@database/helpers/timestamps.fields';
import { uuidField } from '@database/helpers/uuid.field';

export class createPlacesImages1667576633920 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'places_images',
				columns: [
					uuidField,
					{
						name: 'place_id',
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
			'places_images',
			new TableForeignKey({
				name: 'places_images_place_fk',
				columnNames: ['place_id'],
				referencedTableName: 'places',
				referencedColumnNames: ['id'],
				onDelete: 'CASCADE'
			})
		);

		await queryRunner.createForeignKey(
			'places_images',
			new TableForeignKey({
				name: 'places_images_uploaded_by_fk',
				columnNames: ['uploaded_by'],
				referencedTableName: 'users',
				referencedColumnNames: ['id'],
				onDelete: 'CASCADE'
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropForeignKey(
			'places_images',
			'places_images_place_fk'
		);

		await queryRunner.dropForeignKey(
			'places_images',
			'places_images_uploaded_by_fk'
		);

		await queryRunner.dropTable('places_images');
	}
}
