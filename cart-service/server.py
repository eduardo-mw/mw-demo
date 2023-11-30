from flask import Flask

app = Flask(__name__)


@app.route("/")
def home():
    return {"status": "good"}


@app.route("/about")
def about():
    return {"status": "good"}


@app.route("/contact")
def contact():
    return {"status": "good"}


if __name__ == "__main__":
    app.run()
