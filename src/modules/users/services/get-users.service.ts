import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from '@modules/users/entities/user.entity';

@Injectable()
export class GetUsersService {
	constructor(
		@InjectRepository(User)
		private readonly repository: Repository<User>
	) {}

	async findAll() {
		const users = await this.repository.find();

		return {
			code: HttpStatus.OK,
			count: users.length,
			users
		};
	}
}
