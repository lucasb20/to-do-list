from flask import Flask
from flask_cors import CORS
from flask_smorest import Api
from flask_migrate import Migrate
from backend.resources import bp as TodoBlueprint
from backend.db import db

def create_app():
    app = Flask(__name__)

    app.config["PROPAGATE_EXCEPTIONS"] = True
    app.config["API_TITLE"] = "Stores REST API"
    app.config["API_VERSION"] = "v1"
    app.config["OPENAPI_VERSION"] = "3.0.3"
    app.config["OPENAPI_URL_PREFIX"] = "/"
    app.config["OPENAPI_SWAGGER_UI_PATH"] = "/swagger-ui"
    app.config["OPENAPI_SWAGGER_UI_URL"] = "https://cdn.jsdelivr.net/npm/swagger-ui-dist/"

    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    app.config["PROPAGATE_EXCEPTIONS"] = True
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db' 

    db.init_app(app)
    CORS(
        app,
        origins=["http://localhost:5173",]
    )
    Migrate(app, db)
    api = Api(app)

    api.register_blueprint(TodoBlueprint)

    return app