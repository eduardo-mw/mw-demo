from flask import Flask, request

app = Flask(__name__)


@app.route("/cart", methods=["POST"])
def home():
    return {
        "session_id": "<session_id>",
        "items": [{"item_id": "<item_id>", "quantity": "<quantity>"}],
    }


@app.route("/add", methods=["POST"])
def about():
    return {"status": "good"}


@app.route("/remove", methods=["POST"])
def contact():
    return {"status": "good"}


if __name__ == "__main__":
    app.run()
