from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager

app = Flask(__name__)
app.config['SECRET_KEY'] = 'your_secret_key'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False  # เพิ่มบรรทัดนี้เพื่อปิดคำเตือน
db = SQLAlchemy(app)
login_manager = LoginManager(app)
login_manager.login_view = 'login'

@app.route('/')
def home():
    return "Hello, Flask!"

from app import routes
#from app import app  # ไม่จำเป็นต้องนำเข้า app ซ้ำ

if __name__ == "__main__":
    app.run(debug=True)