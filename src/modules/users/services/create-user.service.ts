import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { instanceToInstance } from 'class-transformer';
import { Repository } from 'typeorm';

import { CreateUserDto } from '@modules/users/dtos/create-user.dto';
import { User } from '@modules/users/entities/user.entity';

@Injectable()
export class CreateUserService {
	constructor(
		@InjectRepository(User)
		private repository: Repository<User>
	) {}

	async execute(userDto: CreateUserDto) {
		const userAlreadyExists = await this.repository.findOneBy({
			email: userDto.email
		});

		if (userAlreadyExists) {
			throw new BadRequestException('Please insert a valid email!');
		}

		const user = this.repository.create(userDto);

		try {
			await this.repository.save(user);
		} catch {
			throw new BadRequestException('Error creating a new user!');
		}

		return {
			message: 'User created successfully!',
			user: instanceToInstance(user)
		};
	}
}
