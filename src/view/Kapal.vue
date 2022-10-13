<template>
  <div class="all">  
      <div class="kapal">
      <div class="sidebar">
        <h1 class="p">Data Transportasi</h1>
      </div>
        <div class="info">
          <div class="picture">
          <img src="https://asset.kompas.com/crops/zH3h7j319O1XYABHUKlTo4OF3sw=/78x80:878x613/750x500/data/photo/2020/01/31/5e33af8173e82.jpg" alt="" height="300px" width="300px"></div>
          <h2 class="p"> Kapal</h2>
          <p>Kapal (bahasa Inggris: Ship) adalah kendaraan pengangkut penumpang dan barang di laut (sungai dsb)[1] seperti halnya sampan atau perahu yang lebih kecil. Kapal biasanya cukup besar untuk membawa perahu kecil seperti sekoci. Sedangkan dalam istilah inggris, dipisahkan antara ship yang lebih besar dan boat yang lebih kecil. Secara kebiasaannya kapal dapat membawa perahu tetapi perahu tidak dapat membawa kapal. Ukuran sebenarnya di mana sebuah Perahu disebut Kapal selalu ditetapkan oleh undang-undang dan peraturan atau kebiasaan setempat.</p>
        </div>

        <div class="form">
      <form @submit.prevent="add">
          <input type="hidden" v-model="form.id" required>
          <label for="">Merk:   </label>
          <input type="text" v-model="form.merk" required><br/><br/>
          <label for="">Jarak: </label>
          <input type="text" v-model="form.jarak" required><br/><br/>
          <label for="">Jenis:   </label>
          <input type="text" v-model="form.jenis" required><br/><br/>
          <label for="">Image: </label> 
          <input type="text" v-model="form.image" required>

          <button type="submit" v-show="!updateSubmit">add</button> <!-- jika tidak update maka tombol update tidak muncul --> 
          <button type="button" v-show="updateSubmit" @click="update(form)">Update</button> <!-- jika tombol edit di klik maka tombol add akan berubah menjadi update -->
      </form></div>
      <br/>
      <table>
        <tr>
          <th>Merk </th>
          <th>Jarak</th>
          <th>Jenis</th>
          <th>Image</th>
          <th>Action</th>
         
          
        </tr>
        <tr v-for="kapal in kapals" :key="kapal.id">
          <td>{{kapal.merk}}</td>
          <td>{{kapal.jarak}}</td>
          <td>{{kapal.jenis}}</td>
          <td><img :src="kapal.image" alt="" width="100px" height="100px"></td>
          <td style= "text-align:center">
      
        <button @click="edit(kapal)"><i class="fa-regular fa-pen-to-square"></i> Edit</button> ||  <button @click="del(kapal)"><i class="fa-solid fa-delete-left"></i> Delete</button>
  
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
        name: 'KapaL',
      data(){
      return{
          form: {
            id: '',
            merk: '',
            jarak: '',
            jenis: '',
            image: ''
          },
          kapals: '',
          updateSubmit: false,
      };
    },
      mounted() {
        this.load();
      },
      methods: {
        load(){
            axios.get('http://localhost:3000/kapals').then(res => {
            this.kapals = res.data //respon dari rest api dimasukan ke users
          }).catch ((err) => {
            console.log(err);
          })
        },
        
   edit(kapal){ 
          this.updateSubmit = true
          this.form.id = kapal.id 
          this.form.merk = kapal.merk ;
          this.form.jarak= kapal.jarak;
          this.form.jenis = kapal.jenis ;
          this.form.image = kapal.image ;
   },
  
   update(form){
          return axios
          .put('http://localhost:3000/kapals/' + form.id , {merk: this.form.merk, jarak: this.form.jarak, jenis: this.form.jenis,  image: this.form.image})
          .then(res => {
          this.load()
          this.form.id = ''
          this.form.merk = ''
          this.form.jarak = ''
          this.form.jenis = ''
          this.form.image = ''
          this.updateSubmit = false
        }).catch((err) => {
          console.log(err);
          
        })
      },
  
      del(kapal){
        axios.delete('http://localhost:3000/kapals/' + kapal.id).then(res =>{
            this.load()
            let index = this.kapals.indexOf(
              form.merk,
              form.jarak,
              form.jenis,
              form.image,
              );
            this.kapals.splice(index,1)
        });
    },
   add(){
        axios.post('http://localhost:3000/kapals/', this.form).then(res => {
            this.load()
            this.form.merk = '';
            this.form.jarak = '';
            this.form.jenis = '';
            this.form.image = '';
        })
   },
       },
      
      }
    </script>
  
    <style scoped>
    .p{
      background-color: #FFF5E4;
      border-radius: 20px;
      padding:10px;
      text-align: center;
    }
    .all{
      background-color:#A7D2CB ;
      font-family: 'Balsamiq Sans', cursive;
      font-size: 19px;
    }
.sidebar{
  background-color: #FFF5E4;
  text-align: center;
  border-radius: 20px;
}    

    img{
      width: 60%;
      border-radius: 20px;
    }
    .picture{
     display: flex;
    justify-content: center;
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
.kapal{
  margin-left: 75px;
  margin-right: 75px;

}

    </style>