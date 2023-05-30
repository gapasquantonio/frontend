import { useRef } from 'react';
import BlocksApi from '../clients/blocks-api';
import config from '../config';

const useBlocksApi = () => {
	const blocksApi = useRef(
		new BlocksApi({
			origin: config.origins.blocks.api,
		}),
	);

	return blocksApi.current;
};

export default useBlocksApi;
