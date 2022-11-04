import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from '@modules/users/entities/user.entity';
import { UserRepository } from '@modules/users/repositories/user.repository';

import { CreateUserService } from './services/create-user.service';
import { GetUserService } from './services/get-user.service';

@Module({
	imports: [TypeOrmModule.forFeature([User])],
	providers: [GetUserService, UserRepository, CreateUserService],
	exports: [GetUserService, CreateUserService]
})
export class UsersModule {}
