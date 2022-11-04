import { Module } from '@nestjs/common';

import { AppConfigModule } from '@config/app/config.module';
import { AppConfigService } from '@config/app/config.service';
import { AuthModule } from '@modules/auth/auth.module';
import { CategoriesModule } from '@modules/categories/categories.module';
import { PlacesModule } from '@modules/places/places.module';
import { TravelsModule } from '@modules/travels/travels.module';
import { UsersModule } from '@modules/users/users.module';
import { DatabaseProviderModule } from '@providers/database/provider.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
	imports: [
		AppConfigModule,
		DatabaseProviderModule,
		AuthModule,
		UsersModule,
		CategoriesModule,
		PlacesModule,
		TravelsModule
	],
	controllers: [AppController],
	providers: [AppService, AppConfigService]
})
export class AppModule {}
