// import library
import request from "supertest";
import {expect} from "chai";

// baseURL
const baseURL = 'https://kasir-api.belajarqa.com';


describe('Tugas API Automation - Crud Kasir Aja', () => {
    let accessToken;
    let userId;
    let users;

    it('Get Token Authentications', async () => {
        const payload = { //set payload
            email: 'sample@ex.com',
            password: '123adsfadf@'
        }

         //send request   
         const response = await request(baseURL) //base url
            .post('/authentications') //endpoint
            .send(payload) //kirim payload

            //Assertion pake chai
           expect((await response).status).to.equal(201) //cek status response
           accessToken = (await response).body.data.accessToken; //ambil value accessToken
           console.log(accessToken); //tampilkan accessToken
    })

    it('Create user', async () => {
        const createUser = {  // set data user
            name: 'Cahyo Eko',
            email: 'tugas@sanbercode.com',
            password: 'jiasda2321@'
        }

        //send request
        const response = await request(baseURL) //base url
            .post('/users') //endpoint
            .send(createUser) //kirim data user
            .set('Authorization', `Bearer ${accessToken}`) //header

        //Assertion pake chai
        expect((await response).status).to.equal(201); //cek status response
        userId = response.body.data.userId; //ambil userId nya
        console.log((await response).body); //tampilkan response body
    })

    it('Get Users Detail', async () => {
        //send request
        const response = await request(baseURL) //base url
        .get(`/users/${userId}`) //endpoint
        .set('Authorization', `Bearer ${accessToken}`) //header
    
       //Assertion pake chai
       expect((await response).status).to.equal(200);//cek status response
       console.log((await response).body); //tampilkan response body
    })

    it('Get Users List', async () => {
        //send request
        const response = await request(baseURL)//base url
        .get('/users') //endpoint
        .set('Authorization', `Bearer ${accessToken}`) //header
    
       //Assertion pake chai
       expect((await response).status).to.equal(200); //cek status response
       users = response.body.data.users; //ambil value user
       console.log(users);// tampilkan response user
    })

    it('Update User', async () => {
        const updatedUser = {  //set perubahan data
            name: 'Cahyo Eko-Tugas API Automation-Kasir Aja',
            email: 'Tugas3@sanbercode.com',
            password: 'jiasda2321@'
        }
        
        //send request
        const response = await request(baseURL) //base url
            .put(`/users/${userId}`) //endpoint
            .send(updatedUser) //kirim data yg diubah
            .set('Authorization', `Bearer ${accessToken}`) //header

        //Assertion pake chai
        expect((await response).status).to.equal(200) //cek status response
        console.log((await response).body); //tampilkan response body 
    })

    it('Delete User', async () => {
        //send request
        const response = await request(baseURL) //base url
            .delete(`/users/${userId}`) //endpoint
            .set('Authorization', `Bearer ${accessToken}`) //header

        //Assertion pake chai
        expect((await response).status).to.equal(200) //cek status response
        console.log((await response).body) //tampilkan response body 
    })
})
