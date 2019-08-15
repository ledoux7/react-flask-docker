
from flask import json, jsonify, Blueprint
from extensions import db
from models import *
#from .models import Player as PlayerModel, to_dict
#from backend.utils.munging import *

players_blueprint = Blueprint('players', __name__)
results_blueprint = Blueprint('results', __name__)
#qualifying_blueprint = Blueprint('qualifying', __name__)
#laptimes_blueprint = Blueprint('laptimes', __name__)
#pitstops_blueprint = Blueprint('pitstops', __name__)
#tyre_blueprint = Blueprint('tyre', __name__)

@results_blueprint.route('/api/results', methods=['GET'])
def results():
    results = db.session.query(Results).all()
    arr = []
    for result in results:
        arr.append(result.serialize())

    return jsonify({"data": arr})

@players_blueprint.route('/api/players', methods=['GET'])
def players():

    return jsonify([to_dict(player) for player in Players.query.all()])

    #players = db.session.query(Players).all()
    #arr = []
    #for player in players:
    #    arr.append(player.serialize())

    #return jsonify({"data": arr})