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






class Results(db.Model, MethodsMixin):
    __tablename__ = 'results'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    constructorRef = db.Column(db.String(120))
    driverRef = db.Column(db.String(120))
    season = db.Column(db.Integer)
    roundId = db.Column(db.Integer)
    grid = db.Column(db.Integer)
    laps = db.Column(db.Integer)
    position = db.Column(db.Integer)
    points = db.Column(db.Integer)
    status = db.Column(db.String(120))
    raceName = db.Column(db.String(120))

    def __init__(self, **kwargs):
        keys = ['id', 'constructorRef', 'driverRef', 'season', 'roundId', 'grid', 'laps', 'position', 'points', 'status', 'raceName']
        for key in keys:
            setattr(self, key, kwargs.get(key))





def to_dict(obj):
    if isinstance(obj.__class__, DeclarativeMeta):
        # an SQLAlchemy class
        fields = {}
        for field in [x for x in dir(obj) if not x.startswith('_') and x != 'metadata']:
            data = obj.__getattribute__(field)
            try:
                json.dumps(data)  # this will fail on non-encodable values, like other classes
                if data is not None:
                    fields[field] = data
            except TypeError:
                pass
        # a json-encodable dict
        return fields


#def adapt_numpy_int64(numpy_int64):
#    """ Adapting numpy.int64 type to SQL-conform int type using psycopg extension, see [1]_ for more info.
#     References
#    ----------
#    .. [1] http://initd.org/psycopg/docs/advanced.html#adapting-new-python-types-to-sql-syntax
#    """
#    return AsIs(numpy_int64)

#register_adapter(np.int64, adapt_numpy_int64) 