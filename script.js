// Variables
const controls = document.querySelectorAll('.control')
let currentItem = 0;
const items = document.querySelectorAll('.item')
let maxItems = items.length

// Clique nas setas
controls.forEach((control) => {
	control.addEventListener('click', () => {
		const isLeft = control.classList.contains('arrow-left')

		if (isLeft) {
			currentItem -= 1
		} else {
			currentItem += 1
		}

		if (currentItem >= maxItems) {
			currentItem = 0
		}
		if (currentItem < 0) {
			currentItem = maxItems - 1
		}

		// Trocar a imagem atual
		items.forEach((item) => item.classList.remove('current-item'))

		items[currentItem].scrollIntoView({
			inline: 'center',
			behavior: 'smooth',
		})

		items[currentItem].classList.add('current-item')

		console.log
	})
})

function mostra(el) {
	var show = document.getElementById(el).style.display
	if (show == 'none') {
		document.getElementById(el).style.display = 'flex'
	} else {
		document.getElementById(el).style.display = 'none'
	}
}

function toggle(obj) {
	var display = document.getElementById(obj).style.display
	if (display == 'none') {
		document.getElementById(obj).style.display = 'flex'
	} else {
		document.getElementById(obj).style.display = 'none'
	}
}
