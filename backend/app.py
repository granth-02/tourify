from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

initial_data = {
    "places": [],
    "time": None
}

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
