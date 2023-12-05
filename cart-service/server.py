from flask import Flask, request, jsonify
import requests
import logging
import os
from pymongo import MongoClient

if os.environ.get("ENV", "dev") == "prod":
    from middleware import MwTracker

    tracker = MwTracker()
    db_host = "mongo"
    db_port = 27017
else:
    db_host = "localhost"
    db_port = 5053

app = Flask(__name__)
app.secret_key = "asdfji281lf9jf0fj02"

# Schema for the cart
# {
#    "_id": "fafji10jrrja-af-fj",
#    "session_id": "asdfji281lf9jf0fj02",
#    "items": [
#       {"itemID": "<itemID>", "quantity": "<quantity>", "price": "<price>"},
#       {"itemID": "<itemID>", "quantity": "<quantity>", "price": "<price>"},
#              ]
# }


# Create a MongoDB client and connect to the database
client = MongoClient(db_host, db_port)
db = client["cart_db"]
carts = db["carts"]


@app.route("/cart/<session_id>", methods=["GET"])
def home(session_id):
    logging.info("Cart Request received")

    db_result = carts.find_one({"sessionID": session_id})
    if db_result is None:
        return {"cart": None}, 404

    return {
        "cart": {
            "sessionID": db_result["sessionID"],
            "items": db_result["items"],
        }
    }, 200


@app.route("/add", methods=["POST"])
def about():
    session_id = request.json["sessionID"]
    item = request.json["item"]

    cart = carts.find_one({"sessionID": session_id})
    if cart:
        items = cart["items"]
        for i, cart_item in enumerate(items):
            if cart_item["itemID"] == item["itemID"]:
                items[i]["quantity"] = int(items[i]["quantity"]) + int(item["quantity"])
                break
        else:
            items.append(item)
        carts.update_one({"sessionID": session_id}, {"$set": {"items": items}})
    else:
        carts.insert_one({"sessionID": session_id, "items": [item]})

    return {"sessionID": session_id, "itemAdded": item}, 200


if __name__ == "__main__":
    app.run(port=5051, debug=True)
