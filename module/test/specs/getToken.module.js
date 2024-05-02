// import library
import request from "supertest";
import {expect} from "chai";

// baseURL
const baseURL = 'https://kasir-api.belajarqa.com';


describe('Tugas API Automation', () => {
    let accessToken;
    it('Get Token', async () => {
        const payload = {
            email: 'sample@ex.com',
            password: '123adsfadf@'
        }
       
            const response = await request(baseURL)
                .post('/authentications')
                .send(payload)

           // expect(response.status).to.equal(201);
           expect((await response).status).to.equal(201)
           const accessToken = (await response).body.data.accessToken; 
           console.log(accessToken);
    })
})
