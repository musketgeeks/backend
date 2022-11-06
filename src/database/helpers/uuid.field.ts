import { TableColumnOptions } from 'typeorm';

export const uuidField: TableColumnOptions = {
	name: 'id',
	type: 'uuid',
	isPrimary: true,
	generationStrategy: 'uuid',
	default: 'uuid_generate_v4()'
};
