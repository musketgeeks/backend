import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from '@modules/users/entities/user.entity';

@Injectable()
export class GetUserService {
	constructor(
		@InjectRepository(User)
		private readonly repository: Repository<User>
	) {}

	async findByEmail(email: string) {
		return this.repository.findOneBy({ email });
	}

	async findById(id: string) {
		const user = await this.repository.findOneBy({ id });

		if (!user) {
			throw new NotFoundException('User not found!');
		}

		return user;
	}
}
