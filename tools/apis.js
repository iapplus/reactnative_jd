import {get} from './request';

//登陆
const MainServerHost = 'http://127.0.0.1/';
export const HTTP_Login = params => get(`${MainServerHost}login`, params);

//POST
