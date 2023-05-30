export type Config = {
	origins: {
		blocks: {
			api: string;
		};
	};
};

const config: Config = {
	origins: {
		blocks: {
			api: 'https://test-candidaturas-front-end.onrender.com',
		},
	},
};

export default config;
