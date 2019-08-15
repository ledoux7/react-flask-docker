import json

from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.ext.declarative import DeclarativeMeta

from extensions import db
from sqlalchemy.inspection import inspect
#from psycopg2.extensions import register_adapter, AsIs
import numpy as np

#db = SQLAlchemy()

class MethodsMixin(object):
    """
    This class mixes in some common Class table functions like
    delete and save
    """
    def save(self):
        db.session.add(self)
        db.session.commit()
        return self.id

    def update(self):
        db.session.commit()
        return self.id

    def delete(self):
        ret = self.id
        db.session.delete(self)
        db.session.commit()
        return ret

    def serialize(self):
        return {c: getattr(self, c) for c in inspect(self).attrs.keys()}

    def serialize_list(self, lis):
        return [m.serialize() for m in lis]


class Players(db.Model, MethodsMixin):
    __tablename__ = 'players'
    firstname = db.Column(db.String(100), nullable=False, primary_key=True)
    lastname = db.Column(db.String(100), nullable=False)
    PTS = db.Column(db.Float, nullable=False)


    def __init__(self, **kwargs):
        keys = ["firstname","lastname","PTS"]
        for key in keys:
            setattr(self, key, kwargs.get(key))

    def __repr__(self):
        return '<Player %r>' % self.firstname + ' ' + self.lastname







