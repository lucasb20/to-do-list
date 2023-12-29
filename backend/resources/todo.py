from flask.views import MethodView
from flask_smorest import Blueprint, abort
from sqlalchemy.exc import SQLAlchemyError
from backend.schemas import TodoSchema, TodoUpdateSchema
from models import TodoModel
from db import db

bp = Blueprint("todos", __name__, description="Operations on todos")

@bp.route("/todo")
class Todo(MethodView):
    @bp.response(200,TodoSchema(many=True))
    def get(self):
        todos = TodoModel.query.all()
        return todos

    @bp.arguments(TodoSchema)
    @bp.response(200,TodoSchema)
    def post(self, todo_data):
        todo = TodoModel(**todo_data)
        try:
            db.session.add(todo)
            db.session.commit()
        except SQLAlchemyError:
            abort(500, message='ERRO')
        return todo

@bp.route("/todo/<id>")
class Todo(MethodView):
    @bp.arguments(TodoUpdateSchema)
    def put(self,todo_data,id):
        todo = TodoModel.query.get(id)
        if todo:
            todo.task = todo_data["task"]
            todo.completed = todo_data["completed"]
        else:
            todo = TodoModel(id=id, **todo_data)

        db.session.add(todo)
        db.session.commit()

        return todo

    def delete(self, id):
        todo = TodoModel.query.get_or_404(id)
        try:
            db.session.delete(todo)
            db.session.commit()
        except SQLAlchemyError:
            abort(500, message='ERRO')
        return todo