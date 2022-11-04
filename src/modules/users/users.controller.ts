import {
	Body,
	Controller,
	Get,
	HttpCode,
	HttpStatus,
	Post,
	UseGuards
} from '@nestjs/common';

import { JwtAuthGuard } from '@modules/auth/guards/jwt-auth.guard';
import { CreateUserDto } from '@modules/users/dtos/create-user.dto';
import { CreateUserService } from '@modules/users/services/create-user.service';
import { GetUsersService } from '@modules/users/services/get-users.service';

@Controller('users')
@UseGuards(JwtAuthGuard)
export class UsersController {
	constructor(
		private readonly getUsersService: GetUsersService,
		private readonly createUserService: CreateUserService
	) {}

	@Get('')
	async findAll() {
		return this.getUsersService.findAll();
	}

	@Post('')
	@HttpCode(HttpStatus.CREATED)
	async create(@Body() userDto: CreateUserDto) {
		return this.createUserService.execute(userDto);
	}
}
