
from flask import render_template, Blueprint
from extensions import db
from models import *

#view_blueprint = Blueprint('view', __name__)


#@view_blueprint.route("/")
#def index():
#    return render_template("index.html")

#@view_blueprint.route('/results', methods=['GET'])
#def results():
#    results_from_db = db.session.query(Results.id).all()
#    return render_template('results.html', results_from_db=results_from_db)