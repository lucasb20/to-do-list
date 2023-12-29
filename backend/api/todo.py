from flask.views import MethodView
from flask_smorest import Blueprint, abort

bp = Blueprint("todos", __name__, description="Operations on todos")

@bp.route("/todo")
class Todo(MethodView):
    def get(self):
        pass

    def post(self):
        pass

@bp.route("/todo/<id>")
class Todo(MethodView):
    def put(self):
        pass
    
    def delete(self):
        pass
