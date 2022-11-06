import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { AuthConfigModule } from '@config/auth/config.module';
import { AuthConfigService } from '@config/auth/config.service';
import { JwtStrategy } from '@modules/auth/strategies/jwt.strategy';
import { UsersModule } from '@modules/users/users.module';

import { AuthController } from './auth.controller';
import { LoginService } from './services/login.service';
import { RegisterService } from './services/register.service';
import { VerifyService } from './services/verify.service';

@Module({
	imports: [
		UsersModule,
		PassportModule.register({ defaultStrategy: 'jwt' }),
		JwtModule.registerAsync({
			imports: [AuthConfigModule],
			inject: [AuthConfigService],
			useFactory: (configService: AuthConfigService) => ({
				secret: configService.secret,
				signOptions: {
					expiresIn: `${configService.expiresIn}ms`
				}
			})
		}),
		AuthConfigModule
	],
	providers: [LoginService, VerifyService, RegisterService, JwtStrategy],
	controllers: [AuthController]
})
export class AuthModule {}
