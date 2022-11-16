import data from './data.json';

const wait = (ts: number) => new Promise(res => setTimeout(res, ts));

export type MovieResponseType = typeof data;

export const getPage = async (): Promise<MovieResponseType> => {
	await wait(Math.random()*2000);
	return data;
}