import os

from dotenv import load_dotenv


class Config:
    load_dotenv()
    SECRET_KEY = os.environ.get('SECRET_KEY')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    DB_USERNAME = os.environ.get('DB_USERNAME')
    DB_PASSWORD = os.environ.get('DB_PASSWORD')
    DB_ENDPOINT = os.environ.get('DB_ENDPOINT')
    # SQLALCHEMY_DATABASE_URI = 'postgresql://' + DB_USERNAME + ':' + \
    #                           DB_PASSWORD + '@' + DB_ENDPOINT + '/postgres'
    SQLALCHEMY_DATABASE_URI = 'postgresql://postgres:postgres@localhost/site_db'
    MAIL_SERVER = 'smtp.googlemail.com'
    MAIL_PORT = 587
    MAIL_USE_TLS = True
    MAIL_USERNAME = os.environ.get('EMAIL_USER')
    MAIL_PASSWORD = os.environ.get('EMAIL_PASS')
    JWT_ACCESS_LIFESPAN = {'hours': 24}
    JWT_REFRESH_LIFESPAN = {'days': 30}
    PRAETORIAN_ROLES_DISABLED = True


class ProductionConfig(Config):
    pass


class StagingConfig(Config):
    DEBUG = True


class DevelopmentConfig(Config):
    DEBUG = True
    DEVELOPMENT = True
