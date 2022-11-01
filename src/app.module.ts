import { Module } from '@nestjs/common';

import { AppConfigModule } from '@config/app/config.module';
import { AppConfigService } from '@config/app/config.service';
import { DatabaseProviderModule } from '@providers/database/provider.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';

@Module({
	imports: [AppConfigModule, DatabaseProviderModule, AuthModule],
	controllers: [AppController],
	providers: [AppService, AppConfigService]
})
export class AppModule {}
