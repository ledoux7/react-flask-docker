from flask import jsonify
from flask_restful import Resource, Api

from .models import Player as PlayerModel, to_dict


from flask import render_template, Blueprint
from extensions import db
from models import *

api = Api()

class Player(Resource):
    def get(self):
        return jsonify([to_dict(player) for player in PlayerModel.query.all()])

api.add_resource(Player, '/')


#view_blueprint = Blueprint('view', __name__)


#@view_blueprint.route("/")
#def index():
#    return render_template("index.html")

#@view_blueprint.route('/races', methods=['GET'])
#def race():
#    races_from_db = db.session.query(Race.id).all()
#    return render_template('races.html', races_from_db=races_from_db)