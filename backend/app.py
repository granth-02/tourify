from flask import Flask, request
from flask_cors import CORS
from maps import googleMapsHandler

app = Flask(__name__)
CORS(app)

# request format
# data = {
#     "places": [
#         "Gateway of India",
#         "Marine Drive",
#         "Chhatrapati Shivaji Maharaj Terminus (CST)",
#         "Siddhivinayak Temple",
#         "Haji Ali Dargah",
#         "Juhu Beach",
#         "Elephanta Caves",
#         "Bandra-Worli Sea Link",
#         "Film City",
#         "Colaba Causeway",
#     ],
#     "time": time.time(),
# }


@app.route("/data", methods=["GET"])
def index():
    return "Hello, World!"


@app.route("/submit", methods=["POST"])
def optimus():  # TODO : change this
    data = request.get_json()
    data = dict(data)
    print(f"places {data["places"]}")
    print(f"time {data["time"]}")
    m = googleMapsHandler(data)
    resp = m.aggregate()  # send response back to the front end
    return resp


if __name__ == "__main__":
    app.run(debug=True)
