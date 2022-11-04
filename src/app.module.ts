import { Module } from '@nestjs/common';

import { AppConfigModule } from '@config/app/config.module';
import { AppConfigService } from '@config/app/config.service';
import { AuthModule } from '@modules/auth/auth.module';
import { UsersModule } from '@modules/users/users.module';
import { DatabaseProviderModule } from '@providers/database/provider.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesModule } from './modules/categories/categories/categories.module';
import { PlacesModule } from './modules/places/places/places.module';
import { TravelsModule } from './modules/travels/travels/travels.module';


@Module({
	imports: [AppConfigModule, DatabaseProviderModule, AuthModule, UsersModule, CategoriesModule, PlacesModule, TravelsModule],
	controllers: [AppController],
	providers: [AppService, AppConfigService]
})
export class AppModule {}
