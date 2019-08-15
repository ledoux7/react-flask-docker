from flask import Flask
from flask_cors import CORS

from api.list_of_apis import *
from config import Config
from extensions import db

def create_app(config):
    app = Flask(__name__)
    CORS(app)
    app.config.from_object(config)
    register_blueprint(app)
    register_extensions(app)
    return app

def register_blueprint(app):
    #app.register_blueprint(view_blueprint)
    app.register_blueprint(players_blueprint)
    #app.register_blueprint(results_blueprint)

def register_extensions(app):
    #api.init_app(app)
    db.init_app(app)

app = create_app(Config)


# Run the application
if __name__ == '__main__':
    app = create_app(Config)
    app.run(host='0.0.0.0', port=80, debug=True, threaded=True)
