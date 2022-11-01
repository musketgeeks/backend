import { TimestampsInterface } from '@common/interfaces/timestamps.interface';
import { Role } from '@modules/users/enums/Role';

export interface UserInterface extends TimestampsInterface {
	readonly id?: string; // optional because only have after creation
	name: string;
	email: string;
	username: string;
	password?: string;
	avatar?: string;
	role: Role;
}
