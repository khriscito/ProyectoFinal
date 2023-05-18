from flask_sqlalchemy import SQLAlchemy
import enum


db = SQLAlchemy()


class Role(enum.Enum):
    admin = "admin"
    user = "user"


class RoomStatus(enum.Enum):
    avaible = "avaible"
    occupied = "occupied"
    maintenance = "maintenance"
    occupied_maintenance = "occupied_maintenance"
    not_avaible = "not_Avaible"


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    hotel_name = db.Column(db.String(120), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    role = db.Column(db.Enum(Role), nullable=False, default="user")

    def serialize(self):
        return {
            "hotel_name": self.body_hotel_name,
            "email": self.email,
            "role": self.role.value,
        }


class Rooms(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    number = db.Column(db.String(80), unique=True, nullable=False)
    room_type = db.Column(db.String(120), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    status = db.Column(db.Enum(RoomStatus), unique=False, nullable=False)
    user = db.relationship('User', backref='rooms')
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))

    def serialize(self):
        if self.status == RoomStatus.occupied or self.status == RoomStatus.occupied_maintenance:
            checkin = Checkin.query.filter_by(Rooms_id=self.id).first()

            return {
                "id": self.id,
                "number": self.number,
                "room_type": self.room_type,
                "status": self.status.value,
                "checkin": checkin.serialize()
            }
        return {
            "id": self.id,
            "number": self.number,
            "room_type": self.room_type,
            "status": self.status.value,
        }


class Customer(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=False, nullable=False)
    lastname = db.Column(db.String(120))
    document = db.Column(db.String(80), unique=True, nullable=False)
    occupation = db.Column(db.String(80))
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    email = db.Column(db.String(80))

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "document": self.document,
            "lastname": self.lastname,
            "occupation": self.occupation,
            "email": self.email
        }


class Checkin(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    time_in = db.Column(db.DateTime, nullable=False)
    time_out = db.Column(db.DateTime, nullable=False)
    observations = db.Column(db.String(200))
    Rooms = db.relationship(Rooms)
    Rooms_id = db.Column(db.Integer, db.ForeignKey('rooms.id'), nullable=True)
    customer = db.relationship(Customer)
    customer_id = db.Column(
        db.Integer, db.ForeignKey('customer.id'), nullable=True)

    def serialize(self):
        customer = Customer.query.filter_by(id=self.customer_id).first()
        return {
            "time_in": self.time_in,
            "time_out": self.time_out,
            "observations": self.observations,
            "Room_id": self.Rooms_id,
            "customer": customer.serialize()
        }

    def __repr__(self):
        return f'<User {self.email}>'
