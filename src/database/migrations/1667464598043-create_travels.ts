import {
	MigrationInterface,
	QueryRunner,
	Table,
	TableForeignKey
} from 'typeorm';

import { timestampsFields } from '@database/helpers/timestamps.fields';
import { uuidField } from '@database/helpers/uuid.field';

export class createTravels1667464598043 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'travels',
				columns: [
					uuidField,
					{
						name: 'user_id',
						type: 'uuid',
						isNullable: true
					},
					{
						name: 'name',
						type: 'varchar'
					},
					{
						name: 'duration',
						type: 'integer'
					},
					{
						name: 'begins',
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
					{
						name: 'transportation',
						type: 'enum',
						enumName: 'transportations',
						enum: ['car', 'walking', 'bicycle', 'bus'],
						default: `'car'`
					},
					{
						name: 'is_public',
						type: 'boolean',
						default: 'false'
					},
					...timestampsFields
				]
			})
		);

		await queryRunner.createForeignKey(
			'travels',
			new TableForeignKey({
				name: 'travels_user_fk',
				columnNames: ['user_id'],
				referencedTableName: 'users',
				referencedColumnNames: ['id'],
				onDelete: 'CASCADE'
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropForeignKey('travels', 'travels_user_fk');

		await queryRunner.dropTable('travels');
	}
}
