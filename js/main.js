function cena(image) {
	start = image.src.lastIndexOf("/") + 1;
	end = image.src.lastIndexOf(".");
	
	phone = image.src.substring(start, end);
	
	switch(phone) {
		case "iphone%2011%20pro":
			console.log("Cena u dinarima za iPhone 11 pro(White) je: " + 1400*117.55);
			break;
		case "iphone%2011":
			console.log("Cena u dinarima za iPhone 11 pro(Black) je: " + 1100*117.55);
			break;
		case "iphone%20x":
			console.log("Cena u dinarima za iPhone X je: " + 880*117.55);
			break;
		case "samsung%20s10":
			console.log("Cena u dinarima za Samsung S10 je: " + 900*117.55);
			break;
		case "samsung%20s10e":
			console.log("Cena u dinarima za Samsung S10e je: " + 550*117.55);
			break;
		case "samsung%20s9":
			console.log("Cena u dinarima za Samsung S9 je: " + 880*117.55);
			break;
	}
}