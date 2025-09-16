function getFormvalue() {
    //Write your code here
	const name = document.getElementByName('fname').value;
	const lastNme = document.getElementByName('lname').value;
	alert(`${name} ${lastNme}`);

}
