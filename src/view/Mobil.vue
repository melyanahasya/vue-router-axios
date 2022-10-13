<template>
  <div class="all">
    <div class="mobil">
      <div>
        <h2 class="sidebar">Data Transportasi </h2>
      </div>
      <div class="info">
        <div class="picture">
        <img src="https://images.tokopedia.net/img/KRMmCm/2022/8/18/b0f9f708-a564-48b8-a20d-16dbdc849deb.jpg" alt="" width="300px">
        </div>
        <h2 class="p">Mobil</h2>
        <p>Mobil (bahasa Belanda: Mobiel) adalah kendaraan yang menggunakan bahan bakar untuk menghidupkan mesinnya. Mobil kependekan dari otomobil yang berasal dari Bahasa Yunani 'autos' (sendiri) dan Latin 'movére' (bergerak).

Dalam bahasa Inggris, kata mobile diserap langsung dari kata aslinya dalam bahasa Latin yaitu 'movére' yang berati bergerak walaupun sering juga diartikan sebagai 'mobil' atau 'seluler'</p>

      </div>
      <div class="form">
      <form @submit.prevent="add">
          <input type="hidden" v-model="form.id" required>
          <label for="">Merk:  </label>
          <input type="text" v-model="form.merk" required><br/><br/>
          <label for="">Tahun: </label>
          <input type="text" v-model="form.tahun" required><br/><br/>
          <label for="">Jenis:  </label>
          <input type="text" v-model="form.jenis" required><br/><br/>
          <label for="">Image: </label> 
          <input type="text" v-model="form.image" required>

          <button type="submit" v-show="!updateSubmit">add</button> <!-- jika tidak update maka tombol update tidak muncul --> 
          <button type="button" v-show="updateSubmit" @click="update(form)">Update</button> <!-- jika tombol edit di klik maka tombol add akan berubah menjadi update -->
      </form>
    </div>
      <br/>
      <table>
        <tr>
          <th>Merk </th>
          <th>Tahun</th>
          <th>Jenis</th>
          <th>Image</th>
          <th>Action</th>
         
          
        </tr>
        <tr v-for="mobil in mobils" :key="mobil.id">
          <td>{{mobil.merk}}</td>
          <td>{{mobil.tahun}}</td>
          <td>{{mobil.jenis}}</td>
          <td><img :src="mobil.image" alt="" width="100px" height="100px"></td>
          <td style= "text-align:center">
      
        <button @click="edit(mobil)"><i class="fa-regular fa-pen-to-square"></i> Edit</button> ||  <button @click="del(mobil)"><i class="fa-solid fa-delete-left"></i> Delete</button>
  
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
        name: 'MobiL',
      data(){
      return{
          form: {
            id: '',
            merk: '',
            tahun: '',
            jenis: '',
            image: ''
          },
          mobils: '',
          updateSubmit: false,
      };
    },
      mounted() {
        this.load();
      },
      methods: {
        load(){
            axios.get('http://localhost:3000/mobils').then(res => {
            this.mobils = res.data //respon dari rest api dimasukan ke users
          }).catch ((err) => {
            console.log(err);
          })
        },

        add(){
        axios.post('http://localhost:3000/mobils/', this.form).then(res => {
            this.load()
            this.form.merk = '';
            this.form.tahun = '';
            this.form.jenis = '';
            this.form.image = '';
        })
   },

        
   edit(mobil){ 
          this.updateSubmit = true
          this.form.id = mobil.id 
          this.form.merk = mobil.merk ;
          this.form.tahun= mobil.tahun;
          this.form.jenis = mobil.jenis ;
          this.form.image = mobil.image ;
   },
  
   update(form){
          return axios
          .put('http://localhost:3000/mobils/' + form.id , {merk: this.form.merk, tahun: this.form.tahun, jenis: this.form.jenis,  image: this.form.image})
          .then(res => {
          this.load()
          this.form.id = ''
          this.form.name = ''
          this.updateSubmit = false
        }).catch((err) => {
          console.log(err);
          
        })
      },
  
      del(mobil){
        axios.delete('http://localhost:3000/mobils/' + mobil.id).then(res =>{
            this.load()
            let index = this.mobils.indexOf(
              form.merk,
              form.tahun,
              form.jenis,
              form.image,
              );
            this.mobils.splice(index,1)
        });
    },
       },
      
      }
    </script>
    <style scoped>
.all{
  background-color:  #F2D7D9;
  font-family: 'Balsamiq Sans', cursive;
  font-size: 19px;
}
.sidebar{
  background-color: #FFF5E4;
  border-radius: 20px;
  padding: 5px;
  text-align: center;
} 
.p{
  background-color: #FFF5E4;
  border-radius: 20px;
  padding: 10px;
  text-align: center;
}   
    .info {
  justify-content: center;
  text-align: justify;
  margin: auto;
  width: 80%;
  padding: 30px;
    }
      table, th, td {
        border: 1px solid ;
      }

      img{
        width: 60%;
        border-radius: 20px;
        align-items: center;
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
.mobil{
  margin-left: 75px;
  margin-right: 75px;
  
}
    </style>