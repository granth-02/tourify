from dotenv import load_dotenv
import os
from googlemaps import Client, geocoding
import json
import googlemaps

# TODO : LLM integration pending
class googleMapsHandler:
    def __init__(self, data):
        load_dotenv()
        self.apikey = os.getenv("mapsAPIKEY")
        self.data = data
        self.centralnode = 0  # latlong
        self.places = data["places"]
        self.client = Client(key=self.apikey)

    def get_directions(self):
        """
        takes the places mentioned in the data and returns the optimised route using directions api.
        """
        gmaps = googlemaps.Client(key = self.apikey)
        distance_matrix = gmaps.distance_matrix([place['places']['coordinates'] for place in self.data],
                                                [place['location']['coordinate'] for place in self.data])
        distances = [[row['distance']['value'] for row in matrix['rows']] for matrix in distance_matrix['rows']]
        
    def geocode(self):
        """
        returns the lat long for the given list of locations
        """
        loc_geocode_map = {}
        for i in self.places:
            gc = geocoding.geocode(self.client, address=i)
            loc_geocode_map[i] = gc[0]["geometry"]

        # return json.dumps(loc_geocode_map, indent=2)
        return loc_geocode_map

    def gen_payload(self):
        geocodes = self.geocode()
        payload = {"origins":[]}
        for i in geocodes:
            bp = {
                "waypoint": {
                    "location": {
                        "latLng": {
                            "latitude": 0, 
                            "longitude": 0
                        }
                    }
                }
            }
            lat = geocodes[i]["location"]["lat"]
            lng = geocodes[i]["location"]["lng"]
            bp["waypoint"]["location"]["latLng"]["latitude"] = lat
            bp["waypoint"]["location"]["latLng"]["longitude"] = lng
            payload["origins"].append(bp)
        
        return json.dumps(payload,indent=2)

    def get_places(self):
        """
        finds hotels and restraunts around the central node
        """
        ...

    def get_central_node(self):
        """
        finds the central node wrt all the locations passed
        """
        ...


    def aggregate(self):
        """
        returns a dict that has all the information
        """
        return self.data

