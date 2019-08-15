import os



#MYSQL_USER = "root"# os.getenv('POSTGRES_USER')
#MYSQL_PASSWORD = os.getenv('MYSQL_ROOT_PASSWORD')
#MYSQL_HOST = "db" #os.getenv('POSTGRES_HOST')
#MYSQL_DB = os.getenv('MYSQL_DATABASE')
#MYSQL_PORT = 3306

MYSQL_USER = "root"# os.getenv('POSTGRES_USER')
MYSQL_PASSWORD = "root" #os.getenv('MYSQL_ROOT_PASSWORD')
MYSQL_HOST = "db" #os.getenv('POSTGRES_HOST')
MYSQL_DB = "NBA" #os.getenv('MYSQL_DATABASE')
MYSQL_PORT = 3306

#SQLALCHEMY_DATABASE_URI = "mysql+pymysql://{username}:{password}@{hostname}:{port}/{dbname}"\
#						  .format(username = MYSQL_USER, password = MYSQL_PASSWORD, \
#						   hostname = MYSQL_HOST, port = str(MYSQL_PORT), dbname = MYSQL_DB)



class Config(object):
    DEBUG = True
    TESTING = True
    #SQLALCHEMY_DATABASE_URI ='mysql+pymysql://root:root@db:3306/NBA'

    SQLALCHEMY_DATABASE_URI = "mysql+pymysql://{username}:{password}@{hostname}:{port}/{dbname}" \
						  .format(username = MYSQL_USER, password = MYSQL_PASSWORD, \
						   hostname = MYSQL_HOST, port = str(MYSQL_PORT), dbname = MYSQL_DB)

    #app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://username:password@localhost/db_name'
    SQLALCHEMY_TRACK_MODIFICATIONS = False