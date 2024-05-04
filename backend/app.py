from flask import Flask, request, jsonify
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


@app.route('/test', methods=['GET', 'POST'])
def handle_data():
    global initial_data  # Ensure we're accessing the global variable
    if request.method == 'GET':
        return jsonify(initial_data)
    elif request.method == 'POST':
        data = request.json
        initial_data['places'] = data['places']
        initial_data['time'] = data['time']
        print("Data received from React:", data)  # Print the received data for debugging
        return 'Data updated successfully', 200

if __name__ == '__main__':
    app.run(debug=True)
