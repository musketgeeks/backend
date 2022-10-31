import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DatabaseConfigService {
	constructor(private configService: ConfigService) {}

	get host() {
		return this.configService.get<string>('database.host');
	}

	get port() {
		return this.configService.get<number>('database.port');
	}

	get user() {
		return this.configService.get<string>('database.user');
	}

	get password() {
		return this.configService.get<string>('database.password');
	}

	get name() {
		return this.configService.get<string>('database.name');
	}
}
