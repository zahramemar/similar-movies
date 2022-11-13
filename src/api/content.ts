import data from './data.json';

const wait = (ts: number) => new Promise(res => setTimeout(res, ts));

export const getPage = async () => {
	await wait(Math.random(2000));
	return data;
}
