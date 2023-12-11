from flask import Flask, request
from email_sender import send_email
import logging
import os

if os.environ.get("ENV", "dev") == "prod":
    from middleware import MwTracker
    tracker = MwTracker()

app = Flask(__name__)

@app.route("/health", methods=["GET"])
def health():
    return {"status": "healthy"}, 200

@app.route("/send", methods=["POST"])
def home():
    if request.method == "POST":
        if request.is_json:
            email = request.json["email"]
            send_email(email)
            logging.info("Email sent to %s", email)
            return {"email": email}
        else:
            return {"status": "Invalid JSON format"}, 400
    else:
        return {"status": "Method Not Allowed"}, 405


if __name__ == "__main__":
    app.run(port=5050, debug=True)
