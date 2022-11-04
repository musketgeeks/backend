import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from './entities/user.entity';
import { CreateUserService } from './services/create-user.service';
import { GetUserService } from './services/get-user.service';
import { GetUsersService } from './services/get-users.service';
import { UsersController } from './users.controller';

@Module({
	imports: [TypeOrmModule.forFeature([User])],
	providers: [GetUserService, CreateUserService, GetUsersService],
	exports: [GetUserService, CreateUserService],
	controllers: [UsersController]
})
export class UsersModule {}
