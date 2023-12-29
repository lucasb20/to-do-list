from flask.views import MethodView
from flask_smorest import Blueprint, abort
from backend.schemas import TodoSchema, TodoUpdateSchema

bp = Blueprint("todos", __name__, description="Operations on todos")

@bp.route("/todo")
class Todo(MethodView):
    @bp.response(200,TodoSchema(many=True))
    def get(self):
        pass

    @bp.arguments(TodoSchema)
    @bp.response(200,TodoSchema)
    def post(self, todo_data):
        pass

@bp.route("/todo/<id>")
class Todo(MethodView):
    @bp.arguments(TodoUpdateSchema)
    def put(self,todo_data,id):
        pass

    def delete(self, id):
        pass
