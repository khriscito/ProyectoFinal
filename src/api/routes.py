"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException

from werkzeug.security import generate_password_hash, check_password_hash
from api.models import db, User, Rooms,Customer,Checkin,RoomStatus,Role
from flask_jwt_extended import JWTManager,create_access_token,get_jwt_identity,jwt_required
from datetime import datetime


api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200


@api.route('/login', methods=['POST'])
def get_login():
    body = request.json
    body_email= body.get('email',None)
    body_password= body.get('password',None)
    if body_email is None or body_password is None:
        return{"Error":"no ha colocado su correo o contraseña"}
    user=User.query.filter_by(email=body_email).first()
    token=create_access_token(identity=user.id)
    return jsonify({'token':token})

@api.route('/register', methods=['POST'])
def get_register():
    body = request.json
    body_hotel_name= body.get('hotel_name',None)
    body_email =  body.get('email',None)
    if body_email is None:
        return{"error": "Debe colocar un email"}, 400
    email_exists = User.query.filter_by(email=body_email).first()
    if email_exists:
        return {"Error": "Ya existe un email "}
    body_password= body.get('password',None)
    if body_password is None:
        return{"error": "Debe colocar una contraseña"}, 400

    new_user = User(hotel_name=body_hotel_name, email=body_email, password=body_password, is_active=True, role="admin") 
    db.session.add(new_user)
    try:
        db.session.commit()
        return jsonify({"data": "Usuario ha sido creado con exito"}), 201
    except Exception as error:
        return jsonify({"msg":error.args[0]})

@api.route('/customer', methods=['POST'])
def get_register_customer():
    body = request.json
    body_document =body.get('document',None)
    if body_document is None:
        return{"error": "El documento no puede ir vacio"}
    customer = Customer.query.filter_by(document=body_document).first()
    if costumer is not none:
            return jsonify(customer.serialize())
    body_name = body.get('name',None)
    if body_name is None:
        return{"error": "El nombre no puede ir vacio"}
    body_lastname= body.get('lastname',None)
    body_occupation= body.get('occupation',None)
    body_email = body.get('email',None)

    new_custumer = Custumer(name=body_name, document= body_document, lastname=body_lastname, occupation=body_occupation, email=body_email, is_active= True) 
    db.session.add(new_custumer)
    try:
            db.session.commit()
            return jsonify({"data": "Usuario ha sido creado con exito"}), 201
    except Exception as error:
        return jsonify({"msg":error.args[0]})
    
@api.route('/room', methods=['POST'])
@jwt_required()
def create_room():
    body = request.json
    user_id= get_jwt_identity()
    body_number= body.get('number', None)
    if body_number is None:
        return{"error":"Es necesario un número de habitación"}
    body_room_type= body.get('room_type', None)
    if body_room_type is None:
        return{"error":"Es necesario colocar el tipo de habitación"}
    body_status= body.get('status', None)
    if body_status is None:
        return{"error":"Es necesario colocar el estado de la habitación"}
    
    
    new_room = Rooms( number=body_number, room_type=body_room_type, status=body_status,is_active= True,user_id= user_id) 
    db.session.add(new_room)
    try:
        db.session.commit()
        return jsonify({"data": "La habitacion ha sido creada con exito"}), 201
    except Exception as error:
        return jsonify({"msg":error.args[0]})



@api.route('/rooms',methods=['GET'])
@jwt_required()
def get_room():
    user_id= get_jwt_identity()
    rooms=Rooms.query.filter_by(user_id=user_id).all()
    return jsonify({'rooms':[room.serialize()for room in rooms]})


@api.route('/room/<int:room_id>', methods=['PATCH'])
@jwt_required()
def edit_room(room_id):
    room = Rooms.query.get_or_404(room_id)
    room_status =request.json.get('status', None)
    if room_status not in RoomStatus.__members__:
        return jsonify({"error": f"No existe {room_status} en los status permitidos"}),400
    room.status=room_status
    try:
        db.session.commit()
        return jsonify({'room': room.serialize()})
    except Exception as error:
        return jsonify({"msg":error.args[0]})


@api.route('/checkin', methods=['POST'])
@jwt_required()
def checkin():
    
    body= request.json
    user_id= get_jwt_identity()
    customer_id=body.get('customer_id',None)
    if customer_id is None:
        return {"error":"es necesario el id del cliente"},400
    room_id= body.get('room_id',None)
    if room_id is None:
        return {"error":"es necesario el id del usuario"},400
    room=Rooms.query.get(room_id)
    if room is None:
        return {"error":"La habitacion no existe"}, 404
    time_in= datetime.now()
    time_out= body.get("time_out",None)
    if time_out is None:
        return{"error":"La fecha de salida no puede estar vacia"},400
    observations= body.get("observations",None)

    new_checkin = Checkin(customer_id=customer_id, Rooms_id=room_id, time_in=time_in,time_out=time_out, observations=observations) 
    db.session.add(new_checkin)
    try:
        room.status=RoomStatus.occupied.value
        db.session.commit()
        return jsonify({"data": "La estancia ha sido creada con exito"}), 201
    except Exception as error:
        return jsonify({"msg":error.args[0]})
