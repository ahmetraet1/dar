import os
import sys
# DON'T CHANGE THIS !!!
sys.path.insert(0, os.path.dirname(os.path.dirname(__file__)))

from flask import Flask, send_from_directory, request, jsonify, session, redirect, url_for
from flask_cors import CORS
from src.models.user import db
from src.routes.user import user_bp
import json
import uuid
from datetime import datetime
from functools import wraps

app = Flask(__name__, static_folder=os.path.join(os.path.dirname(__file__), 'static'))
app.config['SECRET_KEY'] = 'dar-heritage-secret-key-2025'
CORS(app)

app.register_blueprint(user_bp, url_prefix='/api')

# Database configuration
app.config['SQLALCHEMY_DATABASE_URI'] = f"sqlite:///{os.path.join(os.path.dirname(__file__), 'database', 'app.db')}"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)

# بيانات تسجيل الدخول
ADMIN_USERNAME = "darnewsirin"
ADMIN_PASSWORD = "DDaarr553.."

# إنشاء ملف المنتجات إذا لم يكن موجوداً
products_file = os.path.join(os.path.dirname(__file__), 'static', 'products.json')
if not os.path.exists(products_file):
    with open(products_file, 'w', encoding='utf-8') as f:
        json.dump({"products": []}, f, ensure_ascii=False, indent=2)

# إنشاء ملف إعدادات الموقع
settings_file = os.path.join(os.path.dirname(__file__), 'static', 'settings.json')
if not os.path.exists(settings_file):
    default_settings = {
        "contact": {
            "phone": "+90 553 828 62 35",
            "email": "info@dar-heritage.com",
            "address": "إسطنبول، تركيا"
        },
        "social": {
            "facebook": "https://facebook.com/dar-heritage",
            "instagram": "https://instagram.com/dar-heritage",
            "twitter": "https://twitter.com/dar-heritage"
        },
        "whatsapp": {
            "number": "905538286235",
            "enabled": True
        },
        "content": {
            "home": {
                "title": {
                    "ar": "دار - مركز التراث الفلسطيني",
                    "tr": "Dar - Filistin Miras Merkezi",
                    "en": "Dar - Palestinian Heritage Center"
                },
                "subtitle": {
                    "ar": "نحافظ على التراث الفلسطيني بعمق الأصالة ونعزز الفخر بالهوية",
                    "tr": "Filistin mirasını özgünlüğün derinliğiyle koruyoruz ve kimlik gururunu güçlendiriyoruz",
                    "en": "We preserve Palestinian heritage with deep authenticity and strengthen identity pride"
                }
            },
            "about": {
                "title": {
                    "ar": "من نحن",
                    "tr": "Hakkımızda",
                    "en": "About Us"
                },
                "content": {
                    "ar": "مركز دار للتراث الفلسطيني هو مؤسسة ثقافية تهدف إلى الحفاظ على التراث الفلسطيني وتعزيز الهوية الثقافية.",
                    "tr": "Dar Filistin Miras Merkezi, Filistin mirasını korumayı ve kültürel kimliği güçlendirmeyi amaçlayan bir kültür kurumudur.",
                    "en": "Dar Palestinian Heritage Center is a cultural institution aimed at preserving Palestinian heritage and strengthening cultural identity."
                }
            }
        }
    }
    with open(settings_file, 'w', encoding='utf-8') as f:
        json.dump(default_settings, f, ensure_ascii=False, indent=2)

with app.app_context():
    db.create_all()

# دالة للتحقق من تسجيل الدخول
def login_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if 'logged_in' not in session or not session['logged_in']:
            return jsonify({"error": "Unauthorized", "redirect": "/login"}), 401
        return f(*args, **kwargs)
    return decorated_function

# صفحة تسجيل الدخول
@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        data = request.get_json()
        username = data.get('username')
        password = data.get('password')
        
        if username == ADMIN_USERNAME and password == ADMIN_PASSWORD:
            session['logged_in'] = True
            session['username'] = username
            return jsonify({"status": "success", "redirect": "/admin"})
        else:
            return jsonify({"error": "اسم المستخدم أو كلمة المرور غير صحيحة"}), 401
    
    return send_from_directory(app.static_folder, 'login.html')

# تسجيل الخروج
@app.route('/logout')
def logout():
    session.clear()
    return redirect('/login')

# التحقق من حالة تسجيل الدخول
@app.route('/api/auth/check')
def check_auth():
    if 'logged_in' in session and session['logged_in']:
        return jsonify({"authenticated": True, "username": session.get('username')})
    return jsonify({"authenticated": False}), 401

# API للمنتجات
@app.route('/api/products', methods=['GET'])
def get_products():
    try:
        with open(products_file, 'r', encoding='utf-8') as f:
            data = json.load(f)
        return jsonify(data)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/api/products', methods=['POST'])
@login_required
def add_product():
    try:
        data = request.json
        data['id'] = str(uuid.uuid4())
        data['created_at'] = datetime.now().isoformat()
        
        with open(products_file, 'r', encoding='utf-8') as f:
            products_data = json.load(f)
        
        products_data['products'].append(data)
        
        with open(products_file, 'w', encoding='utf-8') as f:
            json.dump(products_data, f, ensure_ascii=False, indent=2)
        
        return jsonify({"status": "success", "product": data})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/api/products/<product_id>', methods=['PUT'])
@login_required
def update_product(product_id):
    try:
        data = request.json
        
        with open(products_file, 'r', encoding='utf-8') as f:
            products_data = json.load(f)
        
        for i, product in enumerate(products_data['products']):
            if product['id'] == product_id:
                products_data['products'][i] = {**product, **data}
                break
        
        with open(products_file, 'w', encoding='utf-8') as f:
            json.dump(products_data, f, ensure_ascii=False, indent=2)
        
        return jsonify({"status": "success"})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/api/products/<product_id>', methods=['DELETE'])
@login_required
def delete_product(product_id):
    try:
        with open(products_file, 'r', encoding='utf-8') as f:
            products_data = json.load(f)
        
        products_data['products'] = [p for p in products_data['products'] if p['id'] != product_id]
        
        with open(products_file, 'w', encoding='utf-8') as f:
            json.dump(products_data, f, ensure_ascii=False, indent=2)
        
        return jsonify({"status": "success"})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# API للإعدادات
@app.route('/api/settings', methods=['GET'])
def get_settings():
    try:
        with open(settings_file, 'r', encoding='utf-8') as f:
            data = json.load(f)
        return jsonify(data)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/api/settings', methods=['POST'])
@login_required
def update_settings():
    try:
        data = request.json
        
        with open(settings_file, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
        
        return jsonify({"status": "success"})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# صفحة لوحة الإدارة
@app.route('/admin')
def admin_panel():
    if 'logged_in' not in session or not session['logged_in']:
        return redirect('/login')
    return send_from_directory(app.static_folder, 'admin.html')

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    static_folder_path = app.static_folder
    if static_folder_path is None:
        return "Static folder not configured", 404

    if path != "" and os.path.exists(os.path.join(static_folder_path, path)):
        return send_from_directory(static_folder_path, path)
    else:
        return send_from_directory(static_folder_path, 'index.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5003, debug=True)
