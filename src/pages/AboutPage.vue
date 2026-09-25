<template>
  <div class="about-page">

    <!-- HERO -->
    <section class="hero">
      <p class="small-title">ABOUT THE STORE</p>

      <h1>
        OBUD STORE <br />
        <span>JUST MERCH.</span>
      </h1>

      <p class="description">
        Kami menyediakan merchandise resmi dan pilihan apparel
        untuk kamu yang ingin membawa semangat musik ke dalam
        kehidupan sehari-hari.
      </p>
    </section>

    <!-- ABOUT -->
    <section class="about-section">

      <div class="about-text">
        <p class="small-title">WHO WE ARE</p>

        <h2>
          STORE<br />
          <span>MERCH.</span>
        </h2>

        <p>
          Selamat datang di toko merchandise kami. Kami hadir untuk
          para penggemar musik yang ingin menunjukkan kecintaan mereka
          terhadap band favorit melalui merchandise yang keren dan
          berkualitas.
        </p>

        <p>
          Mulai dari kaos, hoodie, hingga berbagai merchandise lainnya,
          kami berusaha menghadirkan produk yang nyaman dipakai dan
          memiliki karakter.
        </p>
      </div>

      <div class="about-box">
        <div>
          <h3>EST.</h3>
          <h4>2026</h4>
          <p>MUSIC • MERCH • CULTURE</p>
        </div>
      </div>

    </section>

    <!-- VALUES -->
    <section class="values">

      <div class="section-heading">
        <p class="small-title">OUR VALUES</p>

        <h2>
          KELEBIHAN<br />
          <span>MERCH KAMI.</span>
        </h2>
      </div>

      <div class="cards">

        <div class="card">
          <div class="number">01</div>
          <h3>QUALITY</h3>
          <p>
            Kami mengutamakan kualitas produk agar nyaman
            digunakan dan tahan lama.
          </p>
        </div>

        <div class="card">
          <div class="number">02</div>
          <h3>ORIGINAL</h3>
          <p>
            Setiap merchandise dibuat dengan konsep yang
            terinspirasi dari dunia musik dan komunitasnya.
          </p>
        </div>

        <div class="card">
          <div class="number">03</div>
          <h3>PASSION</h3>
          <p>
            Musik adalah bagian dari kami. Karena itu,
            setiap produk dibuat dengan penuh semangat.
          </p>
        </div>

      </div>
    </section>

    <!-- CLOSING -->
    <section class="closing">

      <p class="small-title">THANK YOU</p>

      <h2>
        MUSIC<br />
        <span> STIL ALIVE.</span>
      </h2>

      <p>
        Temukan merchandise favoritmu dan tunjukkan
        musik yang kamu sukai.
      </p>

      <router-link to="/product" class="shop-button">
        SHOP MERCH →
      </router-link>

    </section>

  </div>
</template>

<style scoped>
.about-page {
  background: #dffcff;
  color: #063b40;
  min-height: 100vh;
  font-family: Arial, Helvetica, sans-serif;
}

/* HERO */

.hero {
  min-height: 600px;
  padding: 120px 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  background: linear-gradient(
    135deg,
    #b8f7f5,
    #e8ffff
  );
}

.small-title {
  font-size: 13px;
  letter-spacing: 4px;
  font-weight: bold;
  color: #167d83;
  margin-bottom: 20px;
}

.hero h1 {
  font-size: clamp(55px, 9vw, 120px);
  line-height: 0.9;
  margin: 0;
  font-weight: 900;
  letter-spacing: -5px;
}

.hero h1 span,
.about-text h2 span,
.section-heading h2 span,
.closing h2 span {
  color: #009fa6;
}

.description {
  max-width: 600px;
  margin-top: 35px;
  color: #477276;
  font-size: 17px;
  line-height: 1.8;
}

/* ABOUT */

.about-section {
  max-width: 1200px;
  margin: auto;
  padding: 120px 30px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.about-text h2 {
  font-size: 65px;
  line-height: 0.95;
  margin: 0 0 30px;
}

.about-text p:not(.small-title) {
  color: #477276;
  line-height: 1.8;
  margin-bottom: 20px;
}

.about-box {
  height: 450px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 2px solid #8adfe1;

  background:
    repeating-linear-gradient(
      45deg,
      #b8f7f5,
      #b8f7f5 10px,
      #d9ffff 10px,
      #d9ffff 20px
    );
}

.about-box div {
  text-align: center;
}

.about-box h3 {
  font-size: 25px;
  letter-spacing: 8px;
  margin: 0;
  color: #167d83;
}

.about-box h4 {
  font-size: 100px;
  margin: 5px 0;
  color: #009fa6;
  line-height: 1;
}

.about-box p {
  font-size: 11px;
  letter-spacing: 4px;
  color: #4f8589;
}

/* VALUES */

.values {
  padding: 110px 30px;
  background: #b8f7f5;
}

.section-heading {
  max-width: 1200px;
  margin: auto;
}

.section-heading h2 {
  font-size: 65px;
  line-height: 0.95;
  margin: 0 0 60px;
}

.cards {
  max-width: 1200px;
  margin: auto;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.card {
  padding: 35px;
  min-height: 260px;

  background: #eaffff;
  border: 1px solid #8adfe1;

  transition: 0.3s;
}

.card:hover {
  border-color: #009fa6;
  transform: translateY(-5px);
}

.number {
  color: #009fa6;
  font-size: 14px;
  margin-bottom: 50px;
}

.card h3 {
  font-size: 24px;
  margin-bottom: 15px;
  color: #063b40;
}

.card p {
  color: #477276;
  line-height: 1.7;
}

/* CLOSING */

.closing {
  text-align: center;
  padding: 130px 20px;
  background: #dffcff;
}

.closing h2 {
  font-size: clamp(50px, 8vw, 100px);
  line-height: 0.9;
  margin: 0 0 30px;
  letter-spacing: -3px;
}

.closing > p:not(.small-title) {
  color: #477276;
  margin-bottom: 35px;
}

.shop-button {
  display: inline-block;
  padding: 15px 30px;

  color: white;
  background: #009fa6;

  text-decoration: none;
  font-weight: bold;
  letter-spacing: 1px;

  transition: 0.3s;
}

.shop-button:hover {
  background: #063b40;
  color: white;
}

/* RESPONSIVE */

@media (max-width: 800px) {

  .hero {
    padding: 90px 25px;
  }

  .hero h1 {
    letter-spacing: -3px;
  }

  .about-section {
    grid-template-columns: 1fr;
    padding: 80px 25px;
  }

  .about-text h2,
  .section-heading h2 {
    font-size: 50px;
  }

  .about-box {
    height: 350px;
  }

  .cards {
    grid-template-columns: 1fr;
  }

  .closing {
    padding: 90px 20px;
  }
}
</style>
```
