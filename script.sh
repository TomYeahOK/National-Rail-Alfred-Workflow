
query="{query}"

# Remove Whitespace, in case someone searches by station name, e.g. Bristol Temple Meads
queryNoSpace="$(echo -e "{query}" | tr -d '[[:space:]]')"


#Extract departure and destination
#Useful for if you want to fire certain other scripts when searching for specific locations.

depart="${queryNoSpace%/*}"
depart+="/"
destination="${queryNoSpace#*/}"








# Separated out the url, just in case you want to add a feature to change the date of the search
urlBase="http://ojp.nationalrail.co.uk/service/timesandfares/"
urlJoiner="/today/"
urlEnd="/dep"


# Do your thang
open $urlBase$depart$destination$urlJoiner$H$M$urlEnd