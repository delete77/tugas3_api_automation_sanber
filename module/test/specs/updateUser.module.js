// import library
import request from "supertest";
import {expect} from "chai";

// baseURL
const baseURL = 'https://kasir-api.belajarqa.com';

// accessToken
const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAwNWYyZWMyLTZjOGYtNGEwZi1iMDM0LTE5NzhkYjM2ZDJkNyIsImNvbXBhbnlJZCI6Ijg2NzM1M2E3LTBkNjYtNDg4OS1hYzc0LWE5YWE4NDk2MjI2YSIsImlhdCI6MTcxNDQ3MjY5NX0.W7dJ6JQziJwzY9G3O84rRvayaGXB4EnpQFtb8yJz7XA';

describe('API Automation Test', () => {
    it('Update User', async () => {
        const updatedUser = {
            name: 'kasir-serbaguna update nama',
            email: 'user@example.com',
            password: 'jiasda2321@'
        }

        const userId = '18d7397e-c076-406f-b6b6-e37a6a5e24db';
        const response = await request(baseURL)
            .put(`/users/${userId}`)
            .send(updatedUser)
            .set('Authorization', `Bearer ${accessToken}`)

        expect((await response).status).to.equal(200)
        console.log((await response).body);
    })
})
