'use strict';

let response = require('../res');
let connection = require('../koneksi');

exports.index = (req, res) => {
	response.ok("Aplikasi REST berjalan", res);
};

exports.pushJawab = (req, res) => {
	let jawab = req.body.jawab;
	connection.query('INSERT INTO answer(jawab) VALUES(?)', 
		[jawab], (error, rows, fields) => {
		if(error) console.log(error);
		else{
			response.ok("Berhasil menambahkan data", res);
		}
	});
}