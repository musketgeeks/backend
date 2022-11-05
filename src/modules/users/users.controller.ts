import {
	Body,
	Controller,
	Get,
	HttpCode,
	HttpStatus,
	Post,
	UseGuards
} from '@nestjs/common';

import { Roles } from '@common/decorators/roles.decorator';
import { Role } from '@common/enums/Role';
import { RolesGuard } from '@common/guards/roles.guard';
import { JwtAuthGuard } from '@modules/auth/guards/jwt-auth.guard';

import { CreateUserDto } from './dtos/create-user.dto';
import { CreateUserService } from './services/create-user.service';
import { GetUsersService } from './services/get-users.service';

@Controller('users')
@UseGuards(JwtAuthGuard, RolesGuard)
export class UsersController {
	constructor(
		private readonly getUsersService: GetUsersService,
		private readonly createUserService: CreateUserService
	) {}

	@Roles(Role.Admin)
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
