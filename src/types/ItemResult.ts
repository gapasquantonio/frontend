export type ItemResult = {
	id: string;
	premium: boolean;
	details: ItemDetails;
};

export type ItemDetails = {
	name: string;
	description: string;
};
