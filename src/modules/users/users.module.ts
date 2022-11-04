import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from '@modules/users/entities/user';
import { UserRepository } from '@modules/users/repositories/user.repository';

import { GetUserService } from './services/get-user.service';

@Module({
	imports: [TypeOrmModule.forFeature([User])],
	providers: [GetUserService, UserRepository],
	exports: [GetUserService]
})
export class UsersModule {}
