var infraRed = require('com.geraudbourdin.infrared');

function transmit(e){
	// Sequence from globalcache database. (https://irdatabase.globalcache.com/)
	var sequenceBrute = "36127,1,1,96,32,16,32,16,16,16,16,48,48,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,32,16,16,32,16,16,16,4624";
	infraRed.transmit(sequenceBrute);
}

function prontoHexTransmit(e){
	// Sequence in prontoHex format (http://www.remotecentral.com/).
	var prontoHex = "0000 0072 0000 0014 0060 0020 0010 0020 0010 0010 0010 0010 0030 0030 0010 0010 0010 0010 0010 0010 0010 0010 0010 0010 0010 0010 0010 0010 0010 0010 0010 0010 0010 0010 0010 0010 0020 0010 0010 0020 0010 0010 0010 1210";
	infraRed.prontoHexTransmit(prontoHex);
}

function prontoHexConvert(e){
	// convert prontoHex pattern to consumer ir pattern.
	var prontoHex = "0000 0072 0000 0014 0060 0020 0010 0020 0010 0010 0010 0010 0030 0030 0010 0010 0010 0010 0010 0010 0010 0010 0010 0010 0010 0010 0010 0010 0010 0010 0010 0010 0010 0010 0010 0010 0020 0010 0010 0020 0010 0010 0010 1210";
	var decPatern = infraRed.hex2dec(prontoHex);
	alert("ProntoHex code :\n"+prontoHex+"\nConverted to:\n"+decPatern);
}

$.index.open();
