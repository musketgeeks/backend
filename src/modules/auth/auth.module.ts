import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { AuthConfigModule } from '@config/auth/config.module';
import { AuthConfigService } from '@config/auth/config.service';

import { LoginService } from './services/login.service';
import { VerifyService } from './services/verify.service';

@Module({
	imports: [
		JwtModule.registerAsync({
			imports: [AuthConfigModule],
			inject: [AuthConfigService],
			useFactory: (configService: AuthConfigService) => ({
				secret: configService.secret,
				signOptions: {
					expiresIn: `${configService.expiresIn}ms`
				}
			})
		})
	],
	providers: [LoginService, VerifyService]
})
export class AuthModule {}
