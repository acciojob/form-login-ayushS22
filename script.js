function getFormvalue(event) {
	 event.preventDefault(); // Prevents the page from reloading

      const firstName = document.getElementsByName('fname')[0].value;
      const lastName = document.getElementsByName('lname')[0].value;

      alert(`${firstName} ${lastName}`);

}
