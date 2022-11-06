import { Column, Entity } from 'typeorm';

import { Transportation } from '@common/enums/Transportation';

@Entity('travels')
export class Travel {
	//TODO need to add the user_id connection

	@Column()
	name: string;

	@Column()
	duration: number;

	@Column({ nullable: true })
	begins: string;

	@Column({ nullable: true })
	city: string;

	@Column()
	country: string;

	@Column({ enum: Transportation, default: Transportation.CAR })
	transportation: string;

	@Column()
	is_public: boolean;
}
