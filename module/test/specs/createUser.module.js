// import library
import request from "supertest";
import {expect} from "chai";

// baseURL
const baseURL = 'https://kasir-api.belajarqa.com';

// accessToken - ganti dari yg anda dapetkan dari menjalankan file getToken.module.js
const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAwNWYyZWMyLTZjOGYtNGEwZi1iMDM0LTE5NzhkYjM2ZDJkNyIsImNvbXBhbnlJZCI6Ijg2NzM1M2E3LTBkNjYtNDg4OS1hYzc0LWE5YWE4NDk2MjI2YSIsImlhdCI6MTcxNDYzMDEzNn0.Q3DFoOnq1Lq-5KghCRl6WW2odVFdCzGgpmhd5pU4TlU';

describe('API Automation Test', () => {
    let userId;
    it('Create user', async () => {
        const createUser = {
            name: 'Cahyo -Tugas sanber',
            email: 'user@example.com',
            password: 'jiasda2321@'
        }

        const response = await request(baseURL)
            .post('/users')
            .send(createUser)
            .set('Authorization', `Bearer ${accessToken}`)

        expect((await response).status).to.equal(201);
        const userId = response.body.data.userId;
        console.log((await response).body);
    })
})
