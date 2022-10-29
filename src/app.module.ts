import { Module } from '@nestjs/common';

import { AppConfigModule } from '@config/app/config.module';
import { AppConfigService } from '@config/app/config.service';
import { DatabaseProviderModule } from '@providers/database/provider.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
	imports: [AppConfigModule, DatabaseProviderModule],
	controllers: [AppController],
	providers: [AppService, AppConfigService]
})
export class AppModule {}
