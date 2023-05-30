export type Config = {
	origins: {
		blocks: {
			api: string;
			imageApi: string;
		};
	};
};

const config: Config = {
	origins: {
		blocks: {
			api: 'https://test-candidaturas-front-end.onrender.com',
			imageApi:
				'https://plugin-storage.nyc3.digitaloceanspaces.com/families/images/',
		},
	},
};

export default config;
