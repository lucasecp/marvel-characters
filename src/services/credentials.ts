import md5 from "md5";

const publicKey = process.env.REACT_APP_API_PUBLIC_KEY || '';

const privateKey = process.env.REACT_APP_API_PRIVATE_KEY || '';

const time = Number(new Date());

const hash = md5(time + privateKey + publicKey);

export const queryCredentials = `?ts=${time}&apikey=${publicKey}&hash=${hash}`;
