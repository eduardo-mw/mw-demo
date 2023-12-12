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


def get_cart(session_id):
    db_result = carts.find_one({"sessionID": session_id})
    return db_result


def update_cart(session_id, cart):
    carts.update_one({"sessionID": session_id}, {"$set": {"cart": cart}})
    return True


@app.route("/api/health", methods=["GET"])
def health():
    return {"status": "healthy"}, 200


@app.route("/api/cart/session/<session_id>", methods=["GET"])
def cart_get(session_id):
    session_cart = get_cart(session_id)
    if session_cart is None:
        return {"sessionID": session_id, "cart": None}, 404

    return {
        "sessionID": session_cart["sessionID"],
        "cart": session_cart["cart"],
    }, 200


# Todo: Implement adding functionality
@app.route("/api/cart/session/<session_id>/add", methods=["POST"])
def cart_add(session_id):
    session_cart = get_cart(session_id)

    # If sesion cart is empty add the product to the cart as the first item
    if session_cart is None:
        carts.insert_one({"sessionID": session_id, "cart": [request.json["product"]]})
        print(session_cart)
        data = get_cart(session_id)
        data.pop("_id")
        return data, 200

    # If session cart is not empty, check if the product is already in the cart and update the quantity
    else:
        cart = session_cart["cart"]
        product = request.json["product"]
        product_in_cart = False
        for item in cart:
            if item["productID"] == product["productID"]:
                item["quantity"] += product["quantity"]
                product_in_cart = True
                break
        if not product_in_cart:
            cart.append(product)
        update_cart(session_id, cart)

    data = get_cart(session_id)
    data.pop("_id")
    return data, 200


# Todo: Implement removing functionality
@app.route("/api/cart/session/<session_id>/remove", methods=["POST"])
def cart_remove(session_id):
    return {"status": "Not Implemented"}, 501


@app.route("/api/cart/session/<session_id>/checkout", methods=["POST"])
def cart_checkout():
    print(request.json)
    url = "http://email-service:5000/send"
    data = {"email": "test@test.com"}
    response = requests.post(url, json=data)
    return {"email": response.json()["email"]}, 200


if __name__ == "__main__":
    app.run(port=5051, debug=True)
