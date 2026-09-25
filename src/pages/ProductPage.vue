<script setup>
import ProductCard from '../components/ProductCard.vue'

const products = [
 { nama: 'Merch KPR', harga: 130, gambar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGwq5OssPiHyCL1J--k2rZSgwJYdULPfA9UdoU18vT9g&s=10' },
 { nama: 'Merch The Jeblogs', harga: 200, gambar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSjrfpddDfHqFkLcbK87ncoNLjTnGmgCsdJSeQ552Zsw&s' },
 { nama: 'Merch Alkateri', harga: 150, gambar: 'https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/b189b5db22044c42985b924be13099a4~tplv-aphluv4xwc-white-pad-v1:250:250.jpeg' },
 { nama: 'Merch The skit', harga: 180, gambar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHao7YzPADXem3eoQt0P7E3mupOXzeIrkh9ocaGmxcQw&s=10' },
 { nama: 'Merch Keep it real', harga: 300, gambar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-DJWKh51h1ETZz10yOF39nQu2LYWEjl6RKyL7IezrFA&s=10' },
 { nama: 'Merch Kenya hc', harga: 220, gambar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSFWWBmw6NSy26quDTgCsc7dCrWhOMVK1XK3wT_s8VRw&s=10' },
 { nama: 'Merch Speed hc', harga: 130, gambar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPWfEuxErAUTLdqIlAsNvs11_MIgLUWNSAooMFh0yJbg&s=10' },
 { nama: 'Merch Strawberry pils', harga: 260, gambar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMvbbXP5FJPzoAXtNA004qkz6VY_vcp2yiGT4cidqicw&s=10' },
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
