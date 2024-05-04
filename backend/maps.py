from dotenv import load_dotenv
from place_converter import place
import os


# TODO : LLM integration pending
class googleMapsHandler:
    def __init__(self, data):
        load_dotenv()
        self.apikey = os.getenv("mapsAPIKEY")
        self.data = data
        self.centralnode = 0  # latlong
        self.places = []
        self.time_stamp = data["time"]
        for i in data["places"]:
            self.places.append(place(i))

    def get_directions(self):
        """
        takes the places mentioned in the data and returns the optimised route using directions api.
        """
        ...

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


