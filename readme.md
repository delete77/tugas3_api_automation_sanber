Desc: Ini adalah tugas pekan 3 materi API Automation

Nama: Cahyo Eko Prabowo
Linkedin: https://www.linkedin.com/in/cahyo-eko-prabowo/

Repository ini berisi program crud user dari dokumen "Kasir AJA API contract" : https://docs.google.com/document/d/1W0XI71VrHLgnhRyziVUQqy62Acnh0FSxGHs9n4GIV_U/edit#heading=h.kby3fid6nryh

Berisi file satuan dan file final yg sudah digabung menjadi automation dari mulai get token, create user, user detail, get user, update user dan delete user


Berikut daftar dan keterangan file
1. getToken.module.js : code untung mendapatkan Token
2. createUser.module.js : code untuk membuat User
3. getUserDetail.module.js : code untuk menampilkan user yang berhasil dibuat
4. getUserList.module.js : code untuk menampilkan list User
5. updateUser.module.js : code untuk mengupdate data User
6. deleteUser.module.js : code untuk menghapus User
7. crudUser.module.js : code dari file 1-6 yang telah digabung dan dapat dirunning dengan sekali perintah
  
How to run:

7. crudUser.module.js //ini adalah file final yg sudah digabung
- npx mocha module\test\specs\crudUser.module.js //running biasa
- npx mocha --reporter mochawesome module\test\specs\crudUser.module.js //run and reporting dengan mochawesome (pastikan sudah menginstal mochawesome terlebih dahulu)

Screenshot crudUser part 1
![Screenshot crudUser part 1](https://github.com/delete77/tugas3_api_automation_sanber/blob/efc2ec869c47d6eee225007d2fe13cde7c536268/screenshot/Screenshoot%20tugas%203%20part%201.png)

Screenshot crudUser part 2
![Screenshot crudUser part 2](https://github.com/delete77/tugas3_api_automation_sanber/blob/efc2ec869c47d6eee225007d2fe13cde7c536268/screenshot/Screenshoot%20tugas%203%20part%202.png)

Screenshot crudUser part 3 (report)
![Screenshot crudUser part 3 (report)](https://github.com/delete77/tugas3_api_automation_sanber/blob/efc2ec869c47d6eee225007d2fe13cde7c536268/screenshot/Screenshoot%20tugas%203%20part%203%20(report).png)


---------------------------------------------------------------------------------------------
1. getToken.module.js
- npx mocha module\test\specs\getToken.module.js

Screenshot getToken:
![Screenshot getToken]()https://github.com/delete77/tugas3_api_automation_sanber/blob/efc2ec869c47d6eee225007d2fe13cde7c536268/screenshot/1.%20getToken.png


2. createUser.module.js
- ganti value acessToken dari yg anda dapetkan dari menjalankan file getToken.module.js
- npx mocha module\test\specs\createUser.module.js

Screenshot createUser:
![Screenshot createUser](https://github.com/delete77/tugas3_api_automation_sanber/blob/efc2ec869c47d6eee225007d2fe13cde7c536268/screenshot/2.%20createUser.png)


3. getUserDetail.module.js
- ganti value acessToken dari yg anda dapetkan dari menjalankan file getToken.module.js
- ganti userId dari yg anda dapetkan dari menjalankan file createUser.module.js
- npx mocha module\test\specs\getUserDetail.module.js

Screenshot getUserDetail:
![Screenshot getUserDetail](https://github.com/delete77/tugas3_api_automation_sanber/blob/efc2ec869c47d6eee225007d2fe13cde7c536268/screenshot/3.%20getUserDetail.png)


4. getUserList.module.js
- ganti value acessToken dari yg anda dapetkan dari menjalankan file getToken.module.js
- npx mocha module\test\specs\getUserList.module.js

Screenshot getUserList:
![Screenshot getUserList](https://github.com/delete77/tugas3_api_automation_sanber/blob/efc2ec869c47d6eee225007d2fe13cde7c536268/screenshot/4.%20getUserList.png)


5. updateUser.module.js
- ganti value acessToken dari yg anda dapetkan dari menjalankan file getToken.module.js
- input data terupdate
- ganti userId dari yg anda dapetkan dari menjalankan file getUserList.module.js, pilih id yg mau diupdate datanya
- npx mocha module\test\specs\updateUser.module.js

Screenshot updateUser:
![Screenshot updateUser](https://github.com/delete77/tugas3_api_automation_sanber/blob/efc2ec869c47d6eee225007d2fe13cde7c536268/screenshot/5.%20updateUser.png)


6. deleteUser.module.js
- ganti value acessToken dari yg anda dapetkan dari menjalankan file getToken.module.js
- ganti userId dari yg anda dapetkan dari menjalankan file getUserList.module.js, pilih id yg mau dihapus datanya
- npx mocha module\test\specs\deleteUser.module.js

Screenshot deleteUser:
![Screenshot deleteUser](https://github.com/delete77/tugas3_api_automation_sanber/blob/efc2ec869c47d6eee225007d2fe13cde7c536268/screenshot/6.%20deleteUser.png)


Sekian, Terima Kasih..