import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';

import { User } from '@modules/users/entities/user.entity';

@Injectable()
export class UserRepository extends Repository<User> {
	async findOneByEmail(email: string) {
		const user = await this.findOne({ where: { email } });

		if (!user) {
			throw new NotFoundException(`User with email ${email} not found!`);
		}

		return user;
	}
}
