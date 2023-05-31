import axios from 'axios';
import { ItemResult } from '../types/ItemResult';

export type Config = {
	origin: string;
};

export default class BlocksApi {
	config: Config;

	constructor(config: Config) {
		this.config = config;
	}

	headers() {
		return {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			'Cache-Control': 'no-cache, max-age=0',
		};
	}

	async getFamilies({
		skip,
		limit,
	}: {
		skip: number;
		limit: number;
	}): Promise<ItemResult[]> {
		try {
			const response = await axios.get(
				`${this.config.origin}/families?skip=${skip}&take=${limit}`,
			);

			return response.data;
		} catch (e) {
			const error = new Error('checkValidSubdomain');
			error.name = 'F4ApiError';
			throw error;
		}
	}
}
