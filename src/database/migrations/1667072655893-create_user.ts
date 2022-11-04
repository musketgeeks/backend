import { MigrationInterface, QueryRunner, Table } from 'typeorm';

import { timestampsFields } from '@database/helpers/timestamps.fields';
import { uuidField } from '@database/helpers/uuid.field';

export class createUser1667072655893 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'users',
				columns: [
					uuidField,
					{
						name: 'name',
						type: 'varchar'
					},
					{
						name: 'email',
						type: 'varchar',
						isUnique: true
					},
					{
						name: 'username',
						type: 'varchar',
						isUnique: true
					},
					{
						name: 'password',
						type: 'varchar'
					},
					{
						name: 'avatar',
						type: 'varchar',
						isNullable: true
					},
					{
						name: 'role',
						type: 'enum',
						enumName: 'roles',
						isNullable: false,
						enum: ['super-admin', 'admin', 'user'],
						default: `'user'`
					},
					...timestampsFields
				]
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('users');
	}
}
