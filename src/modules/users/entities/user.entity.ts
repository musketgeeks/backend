import { genSalt, hash } from 'bcrypt';
import { Exclude } from 'class-transformer';
import { BeforeInsert, BeforeUpdate, Column, Entity } from 'typeorm';

import { BaseEntity } from '@common/entities/base.entity';
import { Role } from '@common/enums/Role';
import { generateUsername } from '@common/helpers/generate-username.helper';

@Entity('users')
export class User extends BaseEntity {
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

	@Column({ enum: Role, default: Role.User })
	role: string;

	@BeforeInsert()
	@BeforeUpdate()
	private async generateHashPassword() {
		if (this.password) {
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
