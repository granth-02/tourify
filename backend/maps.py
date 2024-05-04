from dotenv import load_dotenv
import os
from googlemaps import Client, geocoding
import json
import requests


class googleMapsHandler:
    def __init__(self, data):
        load_dotenv()
        self.apikey = os.getenv("mapsAPIKEY")
        self.data = data
        self.centralnode = 0  # latlong
        self.places = data["places"]
        self.client = Client(key=self.apikey)

    def geocode(self, debug=False):
        """
        returns the lat long for the given list of locations
        """
        loc_geocode_map = {}
        for i in self.places:
            gc = geocoding.geocode(self.client, address=i)
            loc_geocode_map[i] = gc[0]["geometry"]

        if debug:
            return json.dumps(loc_geocode_map, indent=2)
        return loc_geocode_map

    def gen_payload(self, debug=False):
        geocodes = self.geocode()
        payload = []
        for i in geocodes:
            bp = {"waypoint": {"location": {"latLng": {"latitude": 0, "longitude": 0}}}}
            lat = geocodes[i]["location"]["lat"]
            lng = geocodes[i]["location"]["lng"]
            bp["waypoint"]["location"]["latLng"]["latitude"] = lat
            bp["waypoint"]["location"]["latLng"]["longitude"] = lng
            payload.append(bp)

        if debug:
            return json.dumps(payload, indent=2)
        return payload

    def get_route_matrix(self, debug=False):
        endpoint = "https://routes.googleapis.com/distanceMatrix/v2:computeRouteMatrix"
        p = self.gen_payload()
        payload = {"origins": p, "destinations": p}
        headers = {
            "Content-Type": "application/json",
            "X-Goog-Api-Key": self.apikey,
            "X-Goog-FieldMask": "originIndex,destinationIndex,duration,distanceMeters,status,condition,travelAdvisory.transitFare",
        }
        resp = requests.post(endpoint, json=payload, headers=headers)
        route_mat = resp.text
        if debug:
            return json.dumps(route_mat, indent=2)
        return route_mat

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
