import request from '../utils/request';

export const fetchData = query => {
    return request({
        url: './table.json',
        method: 'get',
        params: query
    });
};


export const fetchAreaData = query => {
    return request({
        url: './areatable.json',
        method: 'get',
        params: query
    });
};


export const fetchAccountData = query => {
    return request({
        url: './accountable.json',
        method: 'get',
        params: query
    });
};
