<template>
  <div class="all">
    <div class="motor">
      <div>
        <h1 class="sidebar">Data Transportasi</h1>
      </div>
<div class="info">
  <div class="picture">
  <img src="https://cdn.motor1.com/images/mgl/5Dmwq/s1/4x3/honda-nm4-vultus-2014_3.webp" alt="" height="300px" width="300px">
  </div>
  <h2 class="p"> Motor</h2>
  <p>Motor (bahasa Inggris: Motor) adalah mesin yang dapat mengubah energi menjadi gerak.[1][2]

Alat yang dapat mengubah panas menjadi gerak biasanya disebut sebagai mesin,[3] yang mempunyai banyak sekali tipe. Salah satu tipenya adalah mesin panas seperti mesin pembakaran dalam yang bekerja dengan membakar bahan bakar dan udara, dan menggunakan gas panas yang dihasilkan untuk menghasilkan tenaga. Mesin pembakaran luar, contohnya mesin uap menggunakan panas untuk menghasilkan tenaga melalui cairan terpisah.

Tipe umum dari sebuah motor adalah motor elektrik. Motor ini bekerja dengan adanya sumber dari listrik dan menghasilkan gerak melalui medan elektromagnetik.</p>
</div>
      <div class="form">
      <form @submit.prevent="add">
          <input type="hidden" v-model="form.id" required>
          <label for="">Merk:   </label>
          <input type="text" v-model="form.merk" required><br/><br/>
          <label for="">Tipe:   </label>
          <input type="text" v-model="form.tipe" required><br/><br/>
          <label for="">Buatan:   </label>
          <input type="text" v-model="form.buatan" required><br/><br/>
          <label for="">Tahun: </label> 
          <input type="text" v-model="form.tahun" required><br/><br/>
          <label for="">Image: </label> 
          <input type="text" v-model="form.image" required>

          <button type="submit" v-show="!updateSubmit">add</button> <!-- jika tidak update maka tombol update tidak muncul --> 
          <button type="button" v-show="updateSubmit" @click="update(form)">Update</button> <!-- jika tombol edit di klik maka tombol add akan berubah menjadi update -->
      </form></div>
      <br/>
      <table>
        <tr>
          <th>Merk </th>
          <th>tipe</th>
          <th>Buatan</th>
          <th>Tahun</th>
          <th>Image</th>
          <th>Action</th>
         
          
        </tr>
        <tr v-for="motor in motors" :key="motor.id">
          <td>{{motor.merk}}</td>
          <td>{{motor.tipe}}</td>
          <td>{{motor.buatan}}</td>
          <td>{{motor.tahun}}</td>
          <td><img :src="motor.image" alt="" width="100px" height="100px"></td>
          <td style= "text-align:center">
      
        <button @click="edit(motor)"><i class="fa-regular fa-pen-to-square"></i> Edit</button> ||  <button @click="del(motor)"><i class="fa-solid fa-delete-left"></i> Delete</button>
  
  </td>
        </tr>
      </table>
  </div>
</div>
  </template>
  
  <script>
    /* eslint-disable */ 
    import axios from 'axios'
    export default {
        name: 'MotoR',
      data(){
      return{
          form: {
            id: '',
            merk: '',
            tipe: '',
            buatan: '',
            tahun: '',
            image: ''
          },
          motors: '',
          updateSubmit: false,
      };
    },
      mounted() {
        this.load();
      },
      methods: {
        load(){
            axios.get('http://localhost:3000/motors').then(res => {
            this.motors = res.data //respon dari rest api dimasukan ke users
          }).catch ((err) => {
            console.log(err);
          })
        },

        add(){
        axios.post('http://localhost:3000/motors', this.form).then(res => {
            this.load()
            this.form.merk = '';
            this.form.tipe = '';
            this.form.buatan = '';
            this.form.tahun = '';
            this.form.image = '';
        })
   },

        
   edit(motor){ 
          this.updateSubmit = true
          this.form.id = motor.id 
          this.form.merk = motor.merk ;
          this.form.tipe= motor.tipe;
          this.form.buatan = motor.buatan ;
          this.form.tahun = motor.tahun ;
          this.form.image = motor.image ;
   },
  
   update(form){
          return axios
          .put('http://localhost:3000/motors/' + form.id , {merk: this.form.merk, tipe: this.form.tipe, buatan: this.form.buatan, tahun: this.form.tahun,  image: this.form.image})
          .then(res => {
          this.load()
          this.form.id = ''
          this.form.merk = ''
          this.form.tipe = ''
          this.form.buatan = ''
          this.form.tahun = ''
          this.form.image = ''
          this.updateSubmit = false
        }).catch((err) => {
          console.log(err);
          
        })
      },
  
      del(motor){
        axios.delete('http://localhost:3000/motors/' + motor.id).then(res =>{
            this.load()
            let index = this.motors.indexOf(
              form.merk,
              form.tipe,
              form.buatan,
              form.tahun,
              form.image,
              );
            this.motors.splice(index,1)
        });
    },
       },
      
      }
    </script>
  
    <style scoped>
    .all{
      background-color: #D8D9CF;
      font-family: 'Balsamiq Sans', cursive;
      font-size: 19px;
    }
    .p{
      background-color: #FFF5E4;
      border-radius: 20px;
      padding: 10px;
      text-align: center;
    }
.sidebar{
  background-color: #FFF5E4;
  border-radius: 20px;
  padding: 5px;
  text-align: center;
}
    
      table, th, td {
        border: 1px solid;
      }
.info {
  justify-content: center;
  text-align: justify;
  margin: auto;
  width: 80%;
  padding: 30px;
}  

img {
  width: 60%;
  border-radius: 20px;
}
.picture{
  display: flex;
  justify-content: center;
}
      table {
        width: 100%;
        text-align: center;
        background-color: #FFF5E4;

      }
      
.form{
  justify-content: center;
  text-align: center;
  margin: auto;
  width: 80%;
  padding: 30px;
}

.motor{
  margin-left: 75px;
  margin-right: 75px;
}
      
    </style>