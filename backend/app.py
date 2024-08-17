from flask import Flask
from flask_cors import CORS
from flask_migrate import Migrate
from resources import TodoBlueprint
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

    api.register_blueprint(TodoBlueprint)

    return app