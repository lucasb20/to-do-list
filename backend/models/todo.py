from backend.db import db

class TodoModel(db.Model):
    __tablename__ = "Todos"

    id = db.Column(db.Integer, primary_key=True)
    task = db.Column(db.String(100), unique=True, nullable=False)
    completed = db.Column(db.Boolean, nullable=False)