<script setup>
import ProductCard from '../components/ProductCard.vue'

const products = [
 { nama: 'Merch KPR', harga: 130, gambar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGwq5OssPiHyCL1J--k2rZSgwJYdULPfA9UdoU18vT9g&s=10' },
 { nama: 'Merch The Jeblogs', harga: 200, gambar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSjrfpddDfHqFkLcbK87ncoNLjTnGmgCsdJSeQ552Zsw&s' },
 { nama: 'Merch Alkateri', harga: 150, gambar: 'https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/b189b5db22044c42985b924be13099a4~tplv-aphluv4xwc-white-pad-v1:250:250.jpeg' },
]
</script>

<template>
 <main style="padding: 20px;">
 <h1>Produk Kami</h1>
 <div style="display: flex; gap: 20px; flex-wrap: wrap;">
 <ProductCard 
  v-for="p in products"
  :key="p.nama"
  :nama="p.nama"
  :harga="p.harga"
  :gambar="p.gambar"
/> 
 </div>
 </main>
</template>