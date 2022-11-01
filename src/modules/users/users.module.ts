import { Module } from '@nestjs/common';

import { GetUserService } from './services/get-user.service';

@Module({
	providers: [GetUserService]
})
export class UsersModule {}
