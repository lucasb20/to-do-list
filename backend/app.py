from flask import Flask
from flask_cors import CORS
from flask_migrate import Migrate
from routes import Todo, TodoDetail
from db import db

def create_app():
    app = Flask(__name__)

    app.config["PROPAGATE_EXCEPTIONS"] = True
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    app.config["PROPAGATE_EXCEPTIONS"] = True
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db' 

    db.init_app(app)
    CORS(app)
    Migrate(app, db)

    app.add_url_rule(f"/todo/", view_func=Todo.as_view("todos"))
    app.add_url_rule(f"/todo/<int:id>", view_func=TodoDetail.as_view("todoDetail"))

    return app