import { MigrationInterface, QueryRunner, Table } from 'typeorm';

import { timestampsFields } from '@database/helpers/timestamps.fields';
import { uuidField } from '@database/helpers/uuid.field';

export class createCategories1667464086114 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'categories',
				columns: [
					uuidField,
					{
						name: 'name',
						type: 'varchar'
					},
					{
						name: 'description',
						type: 'text'
					},
					{
						name: 'image',
						type: 'varchar'
					},
					...timestampsFields
				]
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('categories');
	}
}
