var 	query = "{query}";
var 	depart, 
		destination,
		url, 
		urlBase, 
		urlJoiner, 
		urlEnd = "";





// Remove Whitespace, in case someone searches by station name, e.g. Bristol Temple Meads

query = query.replace(/\s/g, '');


//Extract departure and destination
//Useful for if you want to fire certain other scripts when searching for specific locations.

depart = query.split('/')[0];
destination = query.split('/')[1];






// National Rail site likes things in 15 minute slots
// So find the next quarter-hour
eval $(date +Y=%Y\;m=%m\;d=%d\;H=%H\;M=%M)
if   [[ "$M" < "15" ]] ; then M=15
elif [[ "$M" < "30" ]] ; then M=30
elif [[ "$M" < "45" ]] ; then M=45
else M=00
fi




// Separated out the url, just in case you want to add a feature to change the date of the search
urlBase 	="http://ojp.nationalrail.co.uk/service/timesandfares/";
urlJoiner	="/today/";
urlEnd		="/dep";

// Build URL
url = urlbase + depart + "/" + destination + urlJoiner + urlEnd;


//Do your thang

open url