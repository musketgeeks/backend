import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { AuthConfigService } from '@config/auth/config.service';
import { VerifyService } from '@modules/auth/services/verify.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
	constructor(
		private readonly jwtService: JwtService,
		private readonly verifyService: VerifyService,
		private readonly configService: AuthConfigService
	) {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			ignoreExpiration: false,
			secretOrKey: configService.secret
		});
	}

	async validate(payload: { id: string }) {
		const user = await this.verifyService.execute(payload.id);

		if (!user) {
			throw new UnauthorizedException(
				`Your session is invalid or already expired. Please login an try again.`
			);
		}

		return user;
	}
}
