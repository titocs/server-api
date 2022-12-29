'use strict' // biar kode js lebih diperhatikan, kayak konsistensi vairnbel

exports.ok = (values, res) => {
	let data = {
		'status': 200,
		'values': values
	}
	res.json(data);
	res.end();
};