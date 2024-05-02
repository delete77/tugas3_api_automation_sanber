// import library
import request from "supertest";
import {expect} from "chai";

// baseURL
const baseURL = 'https://kasir-api.belajarqa.com';

// accessToken - ganti dari yg anda dapetkan dari menjalankan file getToken.module.js
const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAwNWYyZWMyLTZjOGYtNGEwZi1iMDM0LTE5NzhkYjM2ZDJkNyIsImNvbXBhbnlJZCI6Ijg2NzM1M2E3LTBkNjYtNDg4OS1hYzc0LWE5YWE4NDk2MjI2YSIsImlhdCI6MTcxNDYzMDEzNn0.Q3DFoOnq1Lq-5KghCRl6WW2odVFdCzGgpmhd5pU4TlU';

describe('API Automation Test', () => {
    it('Get users', async () => {
        const userId = 'eeec8fe3-1c89-4465-8eab-4fe6468c2a50'; //ganti ID dari yg anda dapetkan dari menjalankan file createUser.module.js
        const response = await request(baseURL)
        .get(`/users/${userId}`)
        .set('Authorization', `Bearer ${accessToken}`)
    
    expect((await response).status).to.equal(200);
    console.log((await response).body);
    })
})