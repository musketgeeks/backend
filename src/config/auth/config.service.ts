import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthConfigService {
	constructor(private configService: ConfigService) {}

	get expiresIn() {
		return this.configService.get<number>('auth.expires_in_ms');
	}

	get secret() {
		return this.configService.get<string>('auth.secret');
	}
}
