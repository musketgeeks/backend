import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';

import { UserEntity } from '@modules/users/entities/user.entity';

@Injectable()
export class UsersRepository extends Repository<UserEntity> {
	async findOneByEmail(email: string) {
		const user = await this.findOneBy({ email });

		if (!user) {
			throw new NotFoundException(`User with email ${email} not found!`);
		}

		return user;
	}
}
