import { Injectable } from '@nestjs/common';

import { UserRepository } from '@modules/users/repositories/user.repository';

@Injectable()
export class GetUserService {
	constructor(private readonly repository: UserRepository) {}

	async findByEmail(email: string) {
		return this.repository.findOneByEmail(email);
	}
}
