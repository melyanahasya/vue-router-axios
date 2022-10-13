<template>
    <div class="navbar">
        <div class="text">
            <RouterLink to="/">Pesawat</RouterLink>
        </div>
        <div class="text">
            <RouterLink to="/motor">Motor</RouterLink>
        </div>
        <div class="text">
            <RouterLink to="/mobil">Mobil</RouterLink>
        </div>
        <div class="text">
            <RouterLink to="/kapal">Kapal</RouterLink>
        </div>
         <div class="text">
            <RouterLink to="/bus">Bus</RouterLink>
        </div>
    </div>
</template>

<script>
export default {
    name: "NavbarComp"
}
</script>

<style>
.navbar{
    display: block;
    width: 70px;
    height: 200px;
    line-height: 40px;
    position: fixed;
    background-color: #FFF5E4;
    margin-top: 100px ;
    border-radius: 20px;
    font-family: 'Balsamiq Sans', cursive;

}

.navbar a{
    text-decoration: none;
    color: #541212;
    text-align: center;
}

.text{
    text-align: center;
}
</style>

