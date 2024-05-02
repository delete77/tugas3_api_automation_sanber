// import library
import request from "supertest";
import {expect} from "chai";

// baseURL
const baseURL = 'https://kasir-api.belajarqa.com';

// accessToken
const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAwNWYyZWMyLTZjOGYtNGEwZi1iMDM0LTE5NzhkYjM2ZDJkNyIsImNvbXBhbnlJZCI6Ijg2NzM1M2E3LTBkNjYtNDg4OS1hYzc0LWE5YWE4NDk2MjI2YSIsImlhdCI6MTcxNDQ4NzM4N30.jiywZn1W5TLoSpyarD1UPXDjLfEn6HrO3dBcFJcSwjA';

describe('API Automation Test', () => {
    it('Get Users List', async () => {
        const response = await request(baseURL)
        .get('/users')
        .set('Authorization', `Bearer ${accessToken}`)
    
    expect((await response).status).to.equal(200);
    const users = response.body.data.users;
    console.log(users);

    })
})
