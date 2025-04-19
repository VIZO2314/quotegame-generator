const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Arahkan ke folder public
app.use(express.static(path.join(__dirname, 'public')));

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
