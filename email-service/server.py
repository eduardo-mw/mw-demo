from flask import Flask, request

app = Flask(__name__)


@app.route("/send", methods=["POST"])
def home():
    if request.method == "POST":
        if request.is_json:
            email = request.json["email"]
            return {"email": email}
        else:
            return {"status": "Invalid JSON format"}, 400
    else:
        return {"status": "Method Not Allowed"}, 405


if __name__ == "__main__":
    app.run()
