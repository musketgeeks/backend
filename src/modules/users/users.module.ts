import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from './entities/user.entity';
import { CreateUserService } from './services/create-user.service';
import { GetUserService } from './services/get-user.service';

@Module({
	imports: [TypeOrmModule.forFeature([User])],
	providers: [GetUserService, CreateUserService],
	exports: [GetUserService, CreateUserService]
})
export class UsersModule {}
