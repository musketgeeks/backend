import { Injectable } from '@nestjs/common';

import { UsersRepository } from '@modules/users/repositories/users.repository';

@Injectable()
export class GetUserService {
	constructor(private readonly repository: UsersRepository) {}

	async findByEmail(email: string) {
		return this.repository.findOneByEmail(email);
	}
}
