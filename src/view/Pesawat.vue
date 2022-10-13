<template>
  <div class="all">
  <div class="pesawat">
    <div class="sidebar">
    <h1 class="p"> Data Transportasi</h1>

  </div>

    <div class="info">
      <div class="picture">
      <img src="https://indonesia-air.com/wp-content/uploads/2020/01/Legacy-TFS.jpg" alt="" width="200px" >
    </div>
      <h2 class="p"> Pesawat </h2>
      <p class=""> (bahasa Inggris: Airplane) adalah pesawat udara yang lebih berat dari udara, bersayap tetap, dan dapat terbang dengan tenaga sendiri.[1] Secara umum istilah pesawat terbang sering juga disebut dengan pesawat udara, kapal terbang atau pesawat saja, dengan tujuan pendefenisian yang sama sebagai kendaraan yang mampu terbang di atmosfer atau udara. Namun dalam dunia penerbangan, istilah pesawat terbang berbeda dengan pesawat udara, istilah pesawat udara jauh lebih luas pengertiannya karena telah mencakup pesawat terbang dan helikopter.</p>
    </div>
    <div class="form">
    <form @submit.prevent="add">
      <input type="hidden" v-model="form.id" required>
      <label for="">Merk: </label>
      <input type="text" v-model="form.merk" required><br/><br/>
      <label for="">Tipe:     </label>
      <input type="text" v-model="form.tipe" required><br/><br/>
      <label for="">Buatan: </label>
      <input type="text" v-model="form.buatan" required><br/><br/>
      <label for="">Tahun:   </label>
      <input type="text" v-model="form.tahun" required><br/><br/>
      <label for="">Image:  </label>
      <input type="text" v-model="form.image" required>

      <button type="submit" v-show="!updateSubmit">add</button>
      <button type="button" v-show="updateSubmit" @click="update(form)">Update</button>
    </form>
  </div>
    <br/>
    <div class="table">
    <table>
      <tr>
        <th>Merk </th>
        <th>tipe</th>
        <th>Buatan</th>
        <th>Tahun</th>
        <th>Image</th>
        <th>Action</th>


      </tr>
      <tr v-for="pesawat in pesawats" :key="pesawat.id" >
        <td>{{ pesawat.merk }}</td>
        <td>{{ pesawat.tipe }}</td>
        <td>{{ pesawat.buatan }}</td>
        <td>{{ pesawat.tahun }}</td>
        <td><img :src="pesawat.image" alt="" width="100px" height="100px"/></td>
        <td style="text-align:center">

          <button @click="edit(pesawat)"><i class="fa-solid fa-pen-to-square"></i> Edit</button> || <button @click="del(pesawat)"><i class="fa-solid fa-delete-left"></i> Delete</button>

        </td>
      </tr>
    </table>
  </div>
  </div>
</div>
</template>
  
<script>
/* eslint-disable */
import axios from 'axios'
export default {
  name: 'Pesawat',
  data() {
    return {
      form: {
        id: '',
        merk: '',
        tipe: '',
        buatan: '',
        tahun: '',
        image: ''
      },
      pesawats: '',
      updateSubmit: false,
    };
  },
  mounted() {
    this.load();
  },
  methods: {
    load() {
      axios.get('http://localhost:3000/pesawats').then(res => {
        this.pesawats = res.data //respon dari rest api dimasukan ke users
      }).catch((err) => {
        console.log(err);
      })
    },
    // menambah data
    add() {
      axios.post('http://localhost:3000/pesawats', this.form).then(res => {
        this.load()
        this.form.merk = '';
        this.form.tipe = '';
        this.form.buatan = '';
        this.form.tahun = '';
        this.form.image = '';
      })
    },

    // menampilkan data yg akan diedit
    edit(pesawat) {
      this.updateSubmit = true
      this.form.id = pesawat.id
      this.form.merk = pesawat.merk;
      this.form.tipe = pesawat.tipe;
      this.form.buatan = pesawat.buatan;
      this.form.tahun = pesawat.tahun;
      this.form.image = pesawat.image;
    },

    // fungsi meng update data perubahan
    update(form) {
      return axios
        .put('http://localhost:3000/pesawats/' + form.id, { merk: this.form.merk, tipe: this.form.tipe, buatan: this.form.buatan, tahun: this.form.tahun, image: this.form.image })
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

    // fungsi mendelete data
    del(pesawat) {
      axios.delete('http://localhost:3000/pesawats/' + pesawat.id).then(res => {
        this.load()
        let index = this.pesawats.indexOf(
          form.merk,
          form.tipe,
          form.buatan,
          form.tahun,
          form.image,
        );
        this.pesawats.splice(index, 1)
      });
    },

  },

}
</script>
 
<style scoped>
.all{
  background-color: #CDFCF6;
  font-family: 'Balsamiq Sans', cursive;
  font-size: 19px;
}
.p{
  background-color: #FFF5E4;
  border-radius: 20px;
  padding:10px;
  font-family: 'Balsamiq Sans', cursive;
  font-size: 30px;
  text-align: center;
}
.sidebar {
  background-color: #CDFCF6;
  text-align: center;
  padding: 1px;
  font-size: 50px;
}

table,
th,
td {
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

.pesawat{
  margin-left: 75px ;
  margin-right: 75px;
}
</style>