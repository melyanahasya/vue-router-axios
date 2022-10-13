<template>
  <div class="all">
    <div class="bus">
      <div class="sidebar">
        <h2 class="p">Data Transportasi </h2>
      </div>
<div class="info">
  <div class="picture">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzaqx_eUQlU1xfCMCRCCA16DCz6wtAuutHTg&usqp=CAU" alt="" height="300px" width="300px">
  </div>
    <h2 class="p">Bus</h2>
    <p>Bus atau omnibus,[1] (disebut juga multibus atau motorbus; ejaan tidak baku bis; sering juga dilafalkan sebagai /bas/ atau /bəs/) adalah kendaraan darat yang dirancang untuk mengangkut banyak penumpang. Bus dapat memiliki kapasitas hingga 300 penumpang.[2] Jenis bus yang paling umum adalah bus tunggal satu lantai; bila muatan yang diangkut lebih besar uumnya dilayani bus bertingkat dan gandeng, dan muatan yang lebih kecil dibawa oleh midibus dan minibus; bus besar digunakan untuk layanan jarak jauh.</p>
    <p>Banyak jenis bus, seperti bus transit perkotaan dan bus antarkota, menarik tarif. Jenis lain, seperti bus sekolah atau bus kampus tidak selalu menarik tarif. Di banyak yurisdiksi, sopir bus memerlukan SIM atau izin khusus di atas SIM reguler.</p>
</div>
      <div class="form">
      <form @submit.prevent="add">

          <input type="hidden" v-model="form.id" required>
          <label for="">Merk:  </label>
          <input type="text" v-model="form.merk" required><br/><br/>
          <label for="">harga: </label>
          <input type="text" v-model="form.harga" required><br/><br/>
          <label for="">Jenis:  </label>
          <input type="text" v-model="form.jenis" required><br/><br/>
          <label for="">Image: </label> 
          <input type="text" v-model="form.image" required>

          <button type="submit" v-show="!updateSubmit">add</button> <!-- jika tidak update maka tombol update tidak muncul --> 
          <button type="button" v-show="updateSubmit" @click="update(form)">Update</button> <!-- jika tombol edit di klik maka tombol add akan berubah menjadi update -->
      </form></div>
      <table>
        <tr>
          <th>Merk </th>
          <th>harga</th>
          <th>Jenis</th>
          <th>Image</th>
          <th>Action</th>
         
          
        </tr>
        <tr v-for="bus in bus" :key="bus.id">
          <td>{{bus.merk}}</td>
          <td>{{bus.harga}}</td>
          <td>{{bus.jenis}}</td>
          <td><img :src="bus.image" alt="" width="100px" height="100px"></td>
          <td style= "text-align:center">
      
        <button @click="edit(bus)"><i class="fa-regular fa-pen-to-square"></i> Edit</button> ||  <button @click="del(bus)"><i class="fa-solid fa-delete-left"></i> Delete</button>
  
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
        name: 'BuS',
      data(){
      return{
          form: {
            id: '',
            merk: '',
            harga: '',
            jenis: '',
            image: ''
          },
          bus: '',
          updateSubmit: false,
      };
    },
      mounted() {
        this.load();
      },
      methods: {
        load(){
            axios.get('http://localhost:3000/bus').then(res => {
            this.bus = res.data //respon dari rest api dimasukan ke users
          }).catch ((err) => {
            console.log(err);
          })
        },

        add(){
        axios.post('http://localhost:3000/bus/', this.form).then(res => {
            this.load()
            this.form.merk = '';
            this.form.harga = '';
            this.form.jenis = '';
            this.form.image = '';
        })
   },

        
   edit(bus){ 
          this.updateSubmit = true
          this.form.id = bus.id 
          this.form.merk = bus.merk ;
          this.form.harga= bus.harga;
          this.form.jenis = bus.jenis ;
          this.form.image = bus.image ;
   },
  
   update(form){
          return axios
          .put('http://localhost:3000/bus/' + form.id , {merk: this.form.merk, harga: this.form.harga, jenis: this.form.jenis,  image: this.form.image})
          .then(res => {
          this.load()
          this.form.id = ''
          this.form.merk = '' 
          this.form.harga = ''
          this.form.jenis = ''
          this.form.image = ''
          this.updateSubmit = false
        }).catch((err) => {
          console.log(err);
          
        })
      },
  
  
      del(bus){
        axios.delete('http://localhost:3000/bus/' + bus.id).then(res =>{
            this.load()
            let index = this.buss.indexOf(
              form.merk,
              form.harga,
              form.jenis,
              form.image,
              );
            this.bus.splice(index,1)
        });
    },
       },
      
      }
    </script>
  
    <style scoped>
    .p{
      background-color: #FFF5E4;
      border-radius: 20px;
      padding: 10px;
      text-align: center;
    }
.all{
 background-color:#DEB6AB ;
 font-family: 'Balsamiq Sans', cursive;
  font-size: 19px;
}
    .sidebar{
      background-color: #DEB6AB;
  padding: 1px;
  text-align: center;
  border-radius: 20px;

    }

    .info{
         justify-content: center;
         text-align: justify;
         margin: auto;
         width: 80%;
         padding: 30px;

    }

      table, th, td {
        border: 1px solid;

      }
  
      table {
        width: 100%;
        background-color: #FFF5E4;
        text-align: center;
      }

      img{
        width: 60%;
        border-radius: 20px;
      }
      .picture{
      display: flex;
      justify-content: center;
} 


      .form{
  justify-content: center;
  text-align: center;
  margin: auto;
  width: 80%;
  padding: 30px;
}

.bus{
  margin-left: 75px;
  margin-right: 75px;
}
      
    </style>