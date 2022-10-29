import { Module } from '@nestjs/common';

import { AppConfigModule } from '@app/config/app/config.module';
import { AppConfigService } from '@app/config/app/config.service';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
	imports: [AppConfigModule],
	controllers: [AppController],
	providers: [AppService, AppConfigService]
})
export class AppModule {}
