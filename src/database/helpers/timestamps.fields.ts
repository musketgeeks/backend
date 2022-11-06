import { TableColumnOptions } from 'typeorm';

export const timestampsFields: TableColumnOptions[] = [
	{
		name: 'created_at',
		type: 'timestamp with time zone',
		default: 'now()'
	},
	{
		name: 'updated_at',
		type: 'timestamp with time zone',
		default: 'now()'
	}
];
