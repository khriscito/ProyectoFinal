"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, send_from_directory
from flask_migrate import Migrate
from flask_swagger import swagger
from flask_cors import CORS
from api.utils import APIException, generate_sitemap
from api.models import db
from api.routes import api
from api.admin import setup_admin
from api.commands import setup_commands
from flask_jwt_extended import JWTManager

#from models import Person

ENV = os.getenv("FLASK_ENV")
static_file_dir = os.path.join(os.path.dirname(os.path.realpath(__file__)), '../public/')
app = Flask(__name__)
app.url_map.strict_slashes = False
app.config['JWT_SECRET_KEY'] = os.environ.get('FLASK_KEY_APP')
jwt=JWTManager(app) 

# database condiguration
db_url = os.getenv("DATABASE_URL")
if db_url is not None:
    app.config['SQLALCHEMY_DATABASE_URI'] = db_url.replace("postgres://", "postgresql://")
else:
    app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:////tmp/test.db"

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
MIGRATE = Migrate(app, db, compare_type = True)
db.init_app(app)

# Allow CORS requests to this API
CORS(app)

# add the admin
setup_admin(app)

# add the admin
setup_commands(app)

# Add all endpoints form the API with a "api" prefix
app.register_blueprint(api, url_prefix='/api')

# Handle/serialize errors like a JSON object
@app.errorhandler(APIException)
def handle_invalid_usage(error):
    return jsonify(error.to_dict()), error.status_code

# generate sitemap with all your endpoints
@app.route('/')
def sitemap():
    if ENV == "development":
        return generate_sitemap(app)
    return send_from_directory(static_file_dir, 'index.html')


# @app.route('/login', methods=['POST'])
# def get_login():
#     body = request.json
#     body_email= body.get('email',None)
#     body_password= body.get('password',None)
#     if body_email is None or body_password is None:
#         return{"Error":"no ha colocado su correo o contraseña"}
#     user=User.query.filter_by(email=body_email).first()
#     token=create_access_token(identity=user.id)
#     return jsonify({'token':token})

# @api.route('/register', methods=['POST'])
# def get_register():
#     body = request.json
#     body_hotel_name= body.get('hotel_name',None)
#     body_email =  body.get('email',None)
#     if body_email is None:
#         return{"error": "Debe colocar un email"}, 400
#     email_exists = User.query.filter_by(email=body_email).first()
#     if email_exists:
#         return {"Error": "Ya existe un email "}
#     body_password= body.get('password',None)
#     if body_password is None:
#         return{"error": "Debe colocar una contraseña"}, 400

#     new_user = User(hotel_name=body_hotel_name, email=body_email, password=body_password) 
#     db.session.add(new_user)
#     try:
#         db.session.commit()
#         return jsonify({"data": "Usuario ha sido creado con exito"}), 201
#     except Exception as error:
#         return jsonify({"msg":error.args[0]})

# @app.route('/customer', methods=['POST'])
# def get_register_customer():
#     body = request.json
#     body_document =body.get('document',None)
#     if body_document is None:
#         return{"error": "El documento no puede ir vacio"}
#     customer = Customer.query.filter_by(document=body_document).first()
#     if costumer is not none:
#             return jsonify (costumer.serialize())
#     body_name = body.get('name',None)
#     if body_name is None:
#         return{"error": "El nombre no puede ir vacio"}
#     body_lastname= body.get('lastname',None)
#     body_occupation= body.get('occupation',None)
#     body_email = body.get('email',None)

#     new_costumer = Costumer(name=body_name, document= body_document, last_name=body_lastname, occupation=body_occupation, email=body_email) 
#     db.session.add(new_costumer)
#     db.session.commit()
#     return jsonify({"data": "Usuario ha sido creado con exito"}), 201
    


# any other endpoint will try to serve it like a static file
@app.route('/<path:path>', methods=['GET'])
def serve_any_other_file(path):
    if not os.path.isfile(os.path.join(static_file_dir, path)):
        path = 'index.html'
    response = send_from_directory(static_file_dir, path)
    response.cache_control.max_age = 0 # avoid cache memory
    return response


# this only runs if `$ python src/main.py` is executed
if __name__ == '__main__':
    PORT = int(os.environ.get('PORT', 3001))
    app.run(host='0.0.0.0', port=PORT, debug=True)
