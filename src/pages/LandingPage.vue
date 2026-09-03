<template>
  <div class="landing">
    <h1>Selamat Datang di OBUD MERCH Onlineshop</h1>
    <p>Jual merch band termurah</p>
    <router-link to="/product">Lihat Produk</router-link>
  </div>
 <div class="Kategori">
  <div class="Posisikategori">
    <div class="kategori-card1">
      <div class="kategori-icon" >✅</div>
      <h3 class="kategori-judul">Kualitas Terbaik</h3>
      <p class="kategori-p">merch original suport band</p>
      </div>

      <div class="Kategori-card">
        <div class="kategori-icon">💵</div>
          <h3 class="kategori-judul">Harga murah</h3> 
          <p class="kategori-p">harga murah murah kualitas ga murahan</p>
      </div>

      <div class="kategori-card2">
        <div class="kategori-icon">🚚</div>
        <h3 class="kategori-judul">gratis ongkir</h3>
        <p class="kategori-p">pengiriman gratis jika beli 3 merch</p>
      </div>
  </div>
 </div>
 <video controls>
 <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
 Browser kamu tidak mendukung pemutaran video.
 </video>

</template>

<style scoped>
.landing {
  text-align: center;
  padding: 50px;
}
.landing a {
  background: #42b883;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
}
video {
 margin-right: auto;
 margin-left: auto;
 margin-top: 50px;
 border-radius: 20px;
 display: block;
}
.Kategori{
  padding: 60px;
  background-color: aqua;
}

.Posisikategori {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 60px;
  max-width: 1200px;
}
.Kategori-card {
  background-color: aqua;
  max-width: 300px;
  padding: 40px;
  text-align: center;
  border-radius: 12px;
  box-shadow: 0 10px 15px 10px black;
}
.kategori-card{
  box-shadow: 0 10px 25px black;
}
.Kategori-icon {
  font-size: 30px;
  margin-bottom: 15px;
}
.kategori-judul {
  font-size: 30px;
  margin-bottom: 10px;
  color: black;
}
.kategori-p {
font-size: 1rem;
color: black;
}
.kategori-card1 {
  background-color: rgb(0, 255, 255);
  max-width: 300px;
  padding: 40px;
  text-align: center;
  border-radius: 12px;
  box-shadow: 0 10px 15px 10px black;
}
.kategori-card2 {
  background-color: aqua;
  max-width: 300px;
  padding: 40px;
  text-align: center;
  border-radius: 12px;
  box-shadow: 0 10px 15px 10px black;
}
</style>