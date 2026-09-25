```vue
<template>
  <div class="contact-page">

    <div class="container">

      <div class="header">
        <p class="label">CONTACT US</p>

        <h1>
          Hubungi <span>Kami</span>
        </h1>

        <p class="subtitle">
          Ada pertanyaan tentang merchandise kami?
          Silakan hubungi kami melalui kontak di bawah.
        </p>
      </div>

      <div class="contact-list">

        <div class="contact-card">
          <div class="icon">✉</div>

          <div>
            <h3>Email</h3>
            <p>Obud@gmail.com</p>
          </div>
        </div>

        <div class="contact-card">
          <div class="icon">☎</div>

          <div>
            <h3>WhatsApp</h3>
            <p>085794128037</p>
          </div>
        </div>

        <div class="contact-card">
          <div class="icon">📍</div>

          <div>
            <h3>Alamat Toko</h3>
            <p>Jl. Kopo Nu Sok Banjir</p>
          </div>
        </div>

      </div>

      <div class="message-box">

        <h2>cari merch ori?. obud store aja 🎵</h2>

        <p>
          Jangan ragu untuk menghubungi kami.
          Kami siap membantu kebutuhan merchandise kamu.
        </p>

        <a
          href="https://wa.me/6285794128037"
          target="_blank"
          rel="noopener noreferrer"
          class="button"
        >
          Chat via WhatsApp
        </a>

      </div>

    </div>

  </div>
</template>

<style scoped>
.contact-page {
  min-height: 100vh;
  background: #dffcff;
  padding: 70px 20px;
  font-family: Arial, Helvetica, sans-serif;
  color: #063b40;
}

.container {
  max-width: 850px;
  margin: 0 auto;
}

.header {
  text-align: center;
  margin-bottom: 50px;
}

.label {
  color: #009fa6;
  font-size: 13px;
  font-weight: bold;
  letter-spacing: 4px;
}

.header h1 {
  font-size: 55px;
  margin: 15px 0;
}

.header h1 span {
  color: #009fa6;
}

.subtitle {
  max-width: 550px;
  margin: 0 auto;
  color: #527579;
  line-height: 1.7;
}

.contact-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.contact-card {
  background: white;
  padding: 25px;
  border-radius: 15px;
  border: 1px solid #b4e7e9;

  display: flex;
  align-items: center;
  gap: 15px;

  transition: 0.3s;
}

.contact-card:hover {
  transform: translateY(-5px);
  border-color: #009fa6;
  box-shadow: 0 10px 25px rgba(0, 159, 166, 0.12);
}

.icon {
  width: 48px;
  height: 48px;
  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  background: #009fa6;
  color: white;

  font-size: 20px;
}

.contact-card h3 {
  margin: 0 0 7px;
  font-size: 16px;
}

.contact-card p {
  margin: 0;
  color: #607f82;
  font-size: 14px;
}

.message-box {
  margin-top: 30px;
  padding: 45px;

  text-align: center;

  border-radius: 20px;
  background: #b8f7f5;
}

.message-box h2 {
  margin: 0 0 12px;
  font-size: 30px;
}

.message-box p {
  max-width: 500px;
  margin: 0 auto 25px;

  color: #527579;
  line-height: 1.7;
}

.button {
  display: inline-block;
  padding: 13px 25px;

  border-radius: 8px;
  background: #009fa6;
  color: white;

  text-decoration: none;
  font-weight: bold;

  transition: 0.3s;
}

.button:hover {
  background: #063b40;
}

@media (max-width: 700px) {
  .contact-page {
    padding: 50px 20px;
  }

  .header h1 {
    font-size: 42px;
  }

  .contact-list {
    grid-template-columns: 1fr;
  }

  .message-box {
    padding: 30px 20px;
  }
}
</style>
```
