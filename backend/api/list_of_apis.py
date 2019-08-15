
from flask import json, jsonify, Blueprint
from extensions import db
from models import *
from sqlalchemy.ext.declarative import DeclarativeMeta

players_blueprint = Blueprint('players', __name__)


@players_blueprint.route('/api/players', methods=['GET'])
def players():

    return jsonify([to_dict(player) for player in Players.query.all()])

    #players = db.session.query(Players).all()
    #arr = []
    #for player in players:
    #    arr.append(player.serialize())

    #return jsonify({"data": arr})

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