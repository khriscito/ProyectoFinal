"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from werkzeug.security import generate_password_hash, check_password_hash

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route("/Register", methods=['POST']) 
def register():
    body = request.json
    email = body.get('email', None)
    password = body.get('password', None)   
    name = body.get('name', None)
    if email is None or name is None or password is None:
        return {"error": "Todos los campos requeridos"}, 400

    encripted_password = generate_password_hash(password) 
    new_user = User(email=email, password = encripted_password, name=name, is_active = True)
    db.session.add(new_user)
    try:
        db.session.commit()
        return {"msg":"usuario creado con éxito!"}
    except Exception as error:
        db.session.rollback()
        return{"error": error}