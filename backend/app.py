from flask import Flask
from flask_cors import CORS
from maps import googleMapsHandler

app = Flask(__name__)
CORS(app)


@app.route("/data")
def index():
    return "Hello, World!"


@app.route("/submit")
def optimus(data):  # TODO : change this
    m = googleMapsHandler(data)


if __name__ == "__main__":
    app.run(debug=True)
