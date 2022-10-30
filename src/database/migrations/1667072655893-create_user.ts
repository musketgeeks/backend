import { MigrationInterface, QueryRunner, Table } from 'typeorm';

import { timestampsFields } from '@database/helpers/timestamps-fields';

export class createUser1667072655893 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'users',
				columns: [
					{
						name: 'id',
						type: 'uuid',
						isPrimary: true,
						generationStrategy: 'uuid',
						default: 'uuid_generate_v4()'
					},
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
						type: 'varchar',
						isNullable: false,
						enum: ['super-admin', 'admin', 'user'],
						default: 'user'
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
