const mysql = require('mysql');

// buat koneksi database
const conn = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'lovej'
});

conn.connect((err) => {
	if(err) throw err;
	console.log("Berhasil terhubung dengan MySQL");
});

module.exports = conn;