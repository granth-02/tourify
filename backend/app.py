from flask import Flask
from flask_cors import CORS
from maps import googleMapsHandler
import time

app = Flask(__name__)
CORS(app)


@app.route("/data")
def index():
    return "Hello, World!"


@app.route("/submit")
def optimus(data):  # TODO : change this
    data = { 
        "places" :[
        "Gateway of India",
        "Marine Drive",
        "Chhatrapati Shivaji Maharaj Terminus (CST)",
        "Siddhivinayak Temple",
        "Haji Ali Dargah",
        "Juhu Beach",
        "Elephanta Caves",
        "Bandra-Worli Sea Link",
        "Film City",
        "Colaba Causeway"
        ],
        "time" : time.time()
    }
    m = googleMapsHandler(data)


if __name__ == "__main__":
    app.run(debug=True)
