from marshmallow import Schema, fields

class TodoBase(Schema):
    task = fields.Str(required=True)
    completed = fields.Bool(required=True)

class TodoSchema(TodoBase):
    id = fields.Str(dump_only=True)

class TodoUpdateSchema(TodoBase):
    pass