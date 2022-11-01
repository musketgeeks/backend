import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UserEntity } from '@modules/users/entities/user.entity';

@Injectable()
export class UsersRepository {
	constructor(
		@InjectRepository(UserEntity)
		private readonly userRepository: Repository<UserEntity>
	) {}

	async findOneByEmail(email: string) {
		const user = await this.userRepository.findOneBy({ email });

		if (!user) {
			throw new NotFoundException(`User with email ${email} not found!`);
		}

		return user;
	}
}
