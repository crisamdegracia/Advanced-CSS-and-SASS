var data =
	{
		id: 123,
		name: 'John',
		meta_data :
		 {
			id : 333,
			key : 'job',
			value : '4'	
		 },
		 someData: [
			 {name: 'Sam'},
			 {age: '20'},
			 {size: 'small'}
			]
	}
	
var gata = {
	1 : {
		id: '123',
		key: '__JOB__',
		value: '33'
	},
	2 : {
		id: '123',
		key: '__JOB__',
		value: '33'
	},
	3 : {
		id: '123',
		key: '__JOB__',
		value: '33'
	},
	4 : {
		id: '123',
		key: '__JOB__',
		value: '33'
	}
}

data[2] = '111'
data.meta_data.value = '56'

var pagesx = {value:'3'}

data.someData.push(pagesx)[2]

var xdata = JSON.stringify(data)

	console.log(xdata)
	console.log(data)
	console.log(gata)

	
	// {"2":"111","id":123,"name":"John","meta_data":{"id":333,"key":"job","value":"56"}}

	// $.ajax({
                                       
	// 	beforeSend: (xhr) => {
	// 		xhr.setRequestHeader('X-WP-Nonce', nonce);
	// 	},
	// 	method: 'PUT',
	// 	url: __wanted__api.root_url + '/wp-json/wc/v3/products/3792',
	// 	contentType: "application/json",
	// 	data: {jsonData:JSON.stringify(meta_data)},
	// 	success: (res) => {
	// 		console.log('success');
	// 		console.log(testData);
	// 		// res.__deduct_token('3792', res.meta_data[11].key['_job_listing_limit'], '2')
	// 		console.log(res.meta_data[11].value)
	// 		console.log(res)
	// 	}, failed: (res) => {
	// 		console.log('error');
	// 		console.log(res)
	// 	}
	// });

	// id: 333,
	// key: 'job',
	// value: '4'