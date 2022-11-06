import {
	CreateDateColumn,
	PrimaryGeneratedColumn,
	UpdateDateColumn
} from 'typeorm';

export class BaseEntity {
	@PrimaryGeneratedColumn('uuid')
	readonly id: string;

	// @Column({ nullable: true })
	// createdBy?: string;

	@CreateDateColumn({ name: 'created_at', type: 'timestamp' })
	createdAt: Date;

	// @Column({ nullable: true })
	// updatedBy?: string;

	@UpdateDateColumn({ name: 'updated_at', type: 'timestamp', nullable: true })
	updatedAt: Date;
}
