from flask import Flask, request
import logging 
from middleware import MwTracker

tracker=MwTracker()
app = Flask(__name__)


@app.route("/cart", methods=["POST"])
def home():
    return {
        "session_id": "<session_id>",
        "items": [{"item_id": "<item_id>", "quantity": "<quantity>"}],
    }


@app.route("/add", methods=["POST"])
def about():
    return {"added": "<items added>"}


@app.route("/remove", methods=["POST"])
def contact():
    return {"removed": "<items removed>"}


if __name__ == "__main__":
    app.run()
