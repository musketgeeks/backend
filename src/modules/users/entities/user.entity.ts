import { genSalt, hash } from 'bcrypt';
import { Exclude } from 'class-transformer';
import {
	BaseEntity,
	BeforeInsert,
	BeforeUpdate,
	Column,
	CreateDateColumn,
	Entity,
	PrimaryGeneratedColumn,
	UpdateDateColumn
} from 'typeorm';

import { Role } from '@common/enums/Role';
import { generateUsername } from '@common/helpers/generate-username.helper';

@Entity('users')
export class UserEntity extends BaseEntity {
	@PrimaryGeneratedColumn('uuid')
	readonly id: string;

	@Column()
	name: string;

	@Column({ unique: true })
	email: string;

	@Column({ unique: true, nullable: true })
	username: string;

	@Column()
	@Exclude()
	password: string;

	@Column({ nullable: true })
	avatar: string;

	@Column({ enum: Role })
	role: string;

	@CreateDateColumn({ name: 'created_at', type: 'timestamp' })
	createdAt: Date;

	@UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
	updatedAt: Date;

	@BeforeInsert()
	@BeforeUpdate()
	private async generateHashPassword() {
		if (this.password) {
			// Create env for salt
			const salt = await genSalt();
			this.password = await hash(this.password, salt);
		}
	}

	@BeforeInsert()
	@BeforeUpdate()
	private async generateUsername() {
		if (this.name && !this.username) {
			// ex.: Daniel Sousa -> dsousa
			this.username = generateUsername(this.name);
		}
	}
}
