import os

MYSQL_USER = "root"# os.getenv('POSTGRES_USER')
MYSQL_PASSWORD = "root" #os.getenv('MYSQL_ROOT_PASSWORD')
MYSQL_HOST = "db" 
MYSQL_DB = "NBA" #os.getenv('MYSQL_DATABASE')
MYSQL_PORT = 3306

class Config(object):
    DEBUG = True
    TESTING = True

    SQLALCHEMY_DATABASE_URI = "mysql+pymysql://{username}:{password}@{hostname}:{port}/{dbname}" \
						  .format(username = MYSQL_USER, password = MYSQL_PASSWORD, \
						   hostname = MYSQL_HOST, port = str(MYSQL_PORT), dbname = MYSQL_DB)

    SQLALCHEMY_TRACK_MODIFICATIONS = False