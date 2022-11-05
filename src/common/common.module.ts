import { Module } from '@nestjs/common';

import { RolesGuard } from '@common/guards/roles.guard';

@Module({
	providers: [RolesGuard]
})
export class CommonModule {}
