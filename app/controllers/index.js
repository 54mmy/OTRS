// Load module
var TiDrawerLayout = require('com.tripvi.drawerlayout');

// define left and center view
//var leftView = Ti.UI.createView({backgroundColor:'red'});
//var centerView = Ti.UI.createView({backgroundColor:'green'});

// create the Drawer
var drawer = TiDrawerLayout.createDrawer({
	leftView : $.leftView,
	centerView : $.centerView,
	leftDrawerWidth : "240dp",
	width : Ti.UI.FILL,
	height : Ti.UI.FILL
});

// create a window
var win = Ti.UI.createWindow();

// add the drawer to the window
win.add(drawer);

// listen for the open event...
win.addEventListener('open', function() {

	// ...to access activity and action bar
	var activity = win.getActivity();
	var actionbar = activity.getActionBar();

	if (actionbar) {

		// this makes the drawer indicator visible in the action bar
		actionbar.displayHomeAsUp = true;

		// open and close with the app icon
		actionbar.onHomeIconItemSelected = function() {
			drawer.toggleLeftWindow();
		};
	}
});

var activity = win.activity;

activity.onCreateOptionsMenu = function(e) {
	var menu = e.menu;
	var menuItem = menu.add({
		title : "Add",
		icon : "item1.png",
		showAsAction : Ti.Android.SHOW_AS_ACTION_IF_ROOM
	});
	menuItem.addEventListener("click", function(e) {
		Alloy.createController('add').getView().open();
	});
};

// open the window
win.open();

//load collections
var contacts = Alloy.Collections.contacts;

contacts.fetch();

