async function postData(url = '', data = {}) {
	const response = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	});
	const prods = await response.json()
	return prods
}

let descripcion = document.getElementById('descripcion')
let cantidad = document.getElementById('cantidad')
let stotal = document.getElementById('stotal')
let total = document.getElementById('total')
let iva = document.getElementById('iva')
let producto = document.getElementById('produc')
let datos = {}
let prodsDB = {}


window.addEventListener('load', async () => {
	prodsDB = await postData('/products', { 'referencia': 'none' })
	for (prod of prodsDB) {
		let newProd = new Option(prod['Referencia'])
		producto.appendChild(newProd)
	}
})
producto.addEventListener('change', async () => {
	idProducto = producto.value;
	datos = await postData('/products', { 'referencia': idProducto })
	if (datos) {
		descripcion.value = datos['Descripcion']
		stotal.value = parseInt(datos['Valor']) * parseInt(cantidad.value)
		total.value = parseInt((1+(parseInt(iva.value)/100)) * parseInt(stotal.value))
	}
});
cantidad.addEventListener('keyup', () => {
	if (cantidad.value != ''){
		stotal.value = parseInt(datos['Valor']) * parseInt(cantidad.value)
		total.value = parseInt((1+(parseInt(iva.value)/100)) * parseInt(stotal.value))
	} else {
		stotal.value = 0
		total.value = 0
	}
})
iva.addEventListener('keyup', () => {
	if (iva.value != ''){
		total.value = parseInt((1+(parseInt(iva.value)/100)) * parseInt(stotal.value))
	} else {
		total.value = stotal.value
	}
})
