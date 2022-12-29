const mysql = require('mysql');

// buat koneksi database
const conn = mysql.createConnection({
	host: 'sql6.freesqldatabase.com',
	user: 'sql6587015',
	password: 'zUHF6ZC8fi',
	database: 'sql6587015'
});

conn.connect((err) => {
	if(err) throw err;
	console.log("Berhasil terhubung dengan MySQL");
});

module.exports = conn;
