from flask import Flask, request, jsonify
import requests
import logging
import os
from pymongo import MongoClient
from flask_cors import CORS

if os.environ.get("ENV", "dev") == "prod":
    from middleware import MwTracker

    tracker = MwTracker()
    db_host = "mongo"
    db_port = 27017
else:
    db_host = "localhost"
    db_port = 5053

app = Flask(__name__)
CORS(app)
app.secret_key = "asdfji281lf9jf0fj02"

# Schema for the cart
# {
#     "sessionID": "1234",
#     "cart": [
#         {
#             "productID": 1,
#             "productCategory": "Snacks and Munchies",
#             "productTitle": "Johns Chips",
#             "productPrice": "100",
#             "productImage": "/image/johns-chips.jpg",
#             "quantity": 1,
#         },
#         {
#             "productID": 2,
#             "productCategory": "Fruits",
#             "productTitle": "Organic Apples",
#             "productPrice": "50",
#             "productImage": "/image/organic-apples.jpg",
#             "quantity": 1,
#         },
#     ],
# }


# Create a MongoDB client and connect to the database
client = MongoClient(db_host, db_port)
db = client["cart_db"]
carts = db["carts"]


@app.route("/api/health", methods=["GET"])
def health():
    return {"status": "healthy"}, 200


@app.route("/api/cart/session/<session_id>", methods=["GET"])
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

@app.route("/api/cart/session/<session_id>/add", methods=["POST"])
def add_to_cart(session_id):
    


@app.route("/api/cart/session/<session_id>/checkout", methods=["POST"])
def checkout():
    print(request.json)
    url = "http://email-service:5000/send"
    data = {"email": "test@test.com"}
    response = requests.post(url, json=data)
    return {"email": response.json()["email"]}, 200


if __name__ == "__main__":
    app.run(port=5051, debug=True)
