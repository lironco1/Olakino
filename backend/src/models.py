import sqlalchemy.dialects.postgresql as pg
from flask import current_app
from flask_login import UserMixin
from itsdangerous import TimedJSONWebSignatureSerializer as Serializer
from sqlalchemy.ext.mutable import MutableDict

from src import db
from src.utils.enums.health_enums import DiseasesEnum
from src.utils.enums.health_enums import PreferencesEnum
from src.utils.enums.health_enums import SymptomsEnum
from src.utils.enums.user_type_enum import UserTypeEnum
from src.utils.enums.workout_enums import GoalsEnum, TrainingMethodEnum, WorkoutTypeEnum
from src.utils.fixtures.tips_json import tips_json


class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(128), unique=False, nullable=False)
    last_name = db.Column(db.String(128), unique=False, nullable=False)
    email = db.Column(db.String(256), unique=True, nullable=False)
    password = db.Column(db.String(512), nullable=False)
    type = db.Column(pg.ARRAY(db.Enum(UserTypeEnum, create_constraint=False,
                                      native_enum=False)))
    goal = db.Column(db.Enum(GoalsEnum), unique=False, nullable=True)
    training_method = db.Column(db.Enum(TrainingMethodEnum), unique=False, nullable=True)
    workout_type = db.Column(db.Enum(WorkoutTypeEnum), unique=False, nullable=True)
    daily_meals = db.Column(MutableDict.as_mutable(db.PickleType), nullable=True)
    workout_routine = db.Column(MutableDict.as_mutable(db.PickleType), nullable=True)
    health_status = db.relationship("HealthStatus", uselist=False, backref="user")

    @classmethod
    def lookup(cls, email):
        return cls.query.filter_by(email=email).one_or_none()

    @classmethod
    def identify(cls, user_id):
        return cls.query.get(user_id)

    @property
    def identity(self):
        return self.id

    @property
    def rolenames(self):
        return []

    def get_reset_token(self, expires_sec=1800):
        serializer = Serializer(current_app.config['SECRET_KEY'], expires_sec)
        return serializer.dumps({'user_id': self.id}).decode('utf-8')

    @staticmethod
    def verify_reset_token(token):
        serializer = Serializer(current_app.config['SECRET_KEY'])
        try:
            user_id = serializer.loads(token)['user_id']
        except Exception:
            return None
        return User.query.get(user_id)

    def __repr__(self):
        return f"User('{self.first_name}', '{self.email}')"


class HealthStatus(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    age = db.Column(db.Integer, unique=False, nullable=False)
    gender = db.Column(db.String(16), unique=False, nullable=False)
    weight = db.Column(db.Integer, unique=False, nullable=False)
    height = db.Column(db.Integer, unique=False, nullable=False)
    symptoms = db.Column(pg.ARRAY(db.Enum(SymptomsEnum, create_constraint=False,
                                          native_enum=False)))
    diseases = db.Column(pg.ARRAY(db.Enum(DiseasesEnum, create_constraint=False,
                                          native_enum=False)))
    preferences = db.Column(pg.ARRAY(db.Enum(PreferencesEnum, create_constraint=False,
                                             native_enum=False)))
    excluded = db.Column(pg.ARRAY(db.String), nullable=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))


class Tips(db.Model):
    __tablename__ = 'tips'
    id = db.Column(db.Integer, primary_key=True)
    tips = db.Column(db.JSON, unique=False, nullable=False)


def init_db():
    if Tips.query.count() == 0:
        tips = Tips(tips=tips_json)
        db.session.add(tips)
        db.session.commit()
