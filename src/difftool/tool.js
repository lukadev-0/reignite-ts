const added_function = document.getElementById("added_f")
const added_property = document.getElementById("added_p")
const added_class = document.getElementById("added_c")
const type_definition = document.getElementById("type_d")

function addTags(ident, tags) {
	tags = tags || [
		"private",
		"protected",
		"static",
		"abstract",
		"override",
		"readonly",
	]

	let output = ""
	for (let i = 0; i < tags.length; i++) {
		console.log(ident + "_" + tags[i])
		if (document.getElementById(ident + "_" + tags[i]).checked) {
			output += `<span class="tag">${tags[i]}</span>\n`
		}
	}
	return output
}

added_function.onclick = function () {
	// assert if cn, m, p. rt have been filled
	var cn = document.getElementById("added_f_cn").value
	var m = document.getElementById("added_f_m").value
	var p = document.getElementById("added_f_p").value
	var rt = document.getElementById("added_f_rt").value

	if (cn == "" || m == "" || rt == "") {
		alert("Please fill in all the fields")
		return
	}

	// put to clipboard
	let html = `<div class="added_function">
	<span class="added"></span>\n`
	html += addTags("added_f")

	html += `<span class="keyword">method </span>
	<span class="name">${cn}</span>
	<span class="symbol">.</span>
	<span class="name">${m}</span>
	<span class="symbol">(</span>
	<span>
		${p}
	</span>
	<span class="symbol">)</span>
	<span class="symbol">: </span>
	<span class="type">${rt}</span>
</div>`

	navigator.clipboard.writeText(html).then(function () {
		alert("Copied to clipboard")
	})
}

added_property.onclick = function () {
	// assert if cn, p, t have been filled
	var cn = document.getElementById("added_p_cn").value
	var p = document.getElementById("added_p_p").value
	var t = document.getElementById("added_p_t").value
	var v = document.getElementById("added_p_v").value

	if (cn == "" || p == "" || t == "") {
		alert("Please fill in all the fields")
		return
	}

	// put to clipboard
	let html = `<div class="added_property">
	<span class="added"></span>\n`
	html += addTags("added_p")
	html += `<span class="keyword">property </span>
	<span class="name">${cn}</span>
	<span class="symbol">.</span>
	<span class="name">${p}</span>
	<span class="symbol">: </span>
	<span class="type">${t}</span>`

	// append value if any
	if (v != "") {
		html += `
	<span class="symbol"> = </span>
	<span class="value">${v}</span>`
	}
	html += `
</div>`

	navigator.clipboard.writeText(html).then(function () {
		alert("Copied to clipboard")
	})
}

added_class.onclick = function () {
	// cn required, s/super optional
	var cn = document.getElementById("added_c_cn").value
	var s = document.getElementById("added_c_s").value

	if (cn == "") {
		alert("Please fill in all the fields")
		return
	}

	// put to clipboard
	let html = `<div class="added_class">
	<span class="added"></span>\n`
	html += addTags("added_c", ["abstract"])
	html += `<span class="keyword">class </span>
	<span class="name">${cn}</span>`
	if (s != "") {
		html += `
	<span class="keyword"> extends </span>
	<span class="type">${s}</span>`
	}
	html += `
</div>`
	navigator.clipboard.writeText(html).then(function () {
		alert("Copied to clipboard")
	})
}

type_definition.onclick = function () {
	// assert if n, t have been filled
	var n = document.getElementById("type_d_n").value
	var t = document.getElementById("type_d_t").value

	if (n == "" || t == "") {
		alert("Please fill in all the fields")
		return
	}

	// put to clipboard
	let html = `<span class="name">${n}</span>
<span class="symbol">: </span>
<span class="type">${t}</span>`

	navigator.clipboard.writeText(html).then(function () {
		alert("Copied to clipboard")
	})
}
