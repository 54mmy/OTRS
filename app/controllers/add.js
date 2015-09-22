$.add.open();

function addItem(e){
	var contacts = Alloy.Collections.contacts;
	
	var item = Alloy.createModel('contacts', {
		firstname : $.fName.value,
		lastname : $.lName.value,
		contact : $.mNumber.value
	});
	
	contacts.add(item);
	
	item.save();
	
	contacts.fetch();
	closeWindow();
}

function closeWindow() {
    $.add.close();
}