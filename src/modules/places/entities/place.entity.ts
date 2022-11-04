import { Column, Entity } from 'typeorm';

@Entity('places')
export class Place {
	@Column()
	name: string;

	@Column({ nullable: true })
	slug: string;

	@Column({ nullable: true })
	description: string;

	@Column({ nullable: true })
	lat: string;

	@Column({ nullable: true })
	log: string;

	@Column({ nullable: true })
	city: string;

	@Column({ nullable: true })
	country: string;
}
