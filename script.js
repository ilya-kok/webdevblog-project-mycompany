/*при клике на бургер меню запускается функция myFunction*/

menu.onclick = function myFunction() {
	var x = document.getElementById('myTopnav'); /*переменная Х которая будет применяит значение с индификатором myTopnav*/

	if (x.className === "topnav") { /*если переменная x.className будет идентична классу topnav будет добавляться*/
		x.className += " responsive"; /*к нашему классу слово " responsive" с пробелом*/
	} else {
		x.className = "topnav"; /*в противном случае будет оставаться topnav*/
	}
}

/*			не забыть добавить к ссылкам "#"											=== - идентичность
           				<a href="#">HOME</a>											==  - равенство 
						<a href="#">ABOUT</a>										http://oooportal.ru/?cat=article&id=43
						<a href="#">SERVICES</a>
						<a href="#">PORTFOLIO</a>
						<a href="#">TESTIMONIALS</a>
						<a href="#">CONTACT</a>					*/