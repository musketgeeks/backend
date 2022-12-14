import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppConfigService {
	constructor(private configService: ConfigService) {}

	get port() {
		return this.configService.get<number>('app.port');
	}
}
