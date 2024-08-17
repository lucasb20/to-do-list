from flask.views import MethodView
from flask import jsonify, request, abort
from sqlalchemy.exc import SQLAlchemyError
from schemas import TodoSchema, TodoUpdateSchema
from marshmallow.exceptions import ValidationError
from models import TodoModel
from db import db

class Todo(MethodView):
    def get(self):
        todos = TodoModel.query.all()
        return jsonify(TodoSchema(many=True).dump(todos)), 200

    def post(self):
        try:
            todo = TodoSchema().load(request.get_data())
        except ValidationError as e:
            return jsonify(e.messages), 404

        try:
            db.session.add(todo)
            db.session.commit()
        except SQLAlchemyError:
            abort(500, message='ERRO')
        return jsonify(TodoSchema().dump(todo)), 200

class TodoDetail(MethodView):
    def put(self, id):
        try:
            todo = TodoUpdateSchema().load(request.get_data())
        except ValidationError as e:
            return jsonify(e.messages), 404
        
        todo = TodoModel.query.get(id)
        if todo:
            todo.task = todo["task"]
            todo.completed = todo["completed"]
        else:
            todo = TodoModel(id=id, **todo)

        db.session.add(todo)
        db.session.commit()

        return jsonify(TodoSchema().dump(todo)), 200

    def delete(self, id):
        todo = TodoModel.query.get_or_404(id)
        try:
            db.session.delete(todo)
            db.session.commit()
        except SQLAlchemyError:
            abort(500, message='ERRO')
        return jsonify(TodoSchema().dump(todo)), 200