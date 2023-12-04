from flask import Flask, request
import requests
import logging
import os

if os.environ.get("ENV", "dev") == "prod":
    from middleware import MwTracker

    tracker = MwTracker()

app = Flask(__name__)


@app.route("/cart", methods=["POST"])
def home():
    logging.info("Cart Request received")

    # TODO: Move this to the appropriate endpoint when made
    try:
        email_status = requests.post(
            "http://email-service:5000/send", json={"email": "johndoe@gmail.com"}
        ).json()
    except Exception as e:
        logging.error("Error while sending email: %s", e)
        email_status = {"email": e}

    return {
        "session_id": "<session_id>",
        "items": [{"item_id": "<item_id>", "quantity": "<quantity>"}],
        "email-status": email_status,
    }


@app.route("/add", methods=["POST"])
def about():
    logging.info("Add Request received")
    return {"added": "<items added>"}


@app.route("/remove", methods=["POST"])
def contact():
    logging.info("Remove Request received")
    return {"removed": "<items removed>"}


if __name__ == "__main__":
    app.run()
