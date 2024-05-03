from dotenv import load_dotenv
import os


# TODO : LLM integration pending
class googleMapsHandler:
    def __init__(self, data):
        load_dotenv()
        self.apikey = os.getenv("mapsAPIKEY")
        self.data = data
        self.centralnode = 0  # latlong

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
        ...
