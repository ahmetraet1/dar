from flask import Flask, request, jsonify, send_from_directory, session, redirect, url_for
from flask_cors import CORS
import json
import os
import uuid
from datetime import datetime

app = Flask(__name__)
app.secret_key = 'dar-heritage-secret-key-2025'
CORS(app)

# مجلد الملفات الثابتة
static_folder_path = os.path.join(os.path.dirname(__file__), 'static')

# ملفات البيانات
PRODUCTS_FILE = os.path.join(static_folder_path, 'products.json')
EVENTS_FILE = os.path.join(static_folder_path, 'events.json')
LIBRARY_FILE = os.path.join(static_folder_path, 'library.json')

# بيانات تسجيل الدخول
ADMIN_USERNAME = 'darnewsirin'
ADMIN_PASSWORD = 'DDaarr553..'

def load_json_file(filename):
    """تحميل ملف JSON"""
    if os.path.exists(filename):
        try:
            with open(filename, 'r', encoding='utf-8') as f:
                return json.load(f)
        except:
            pass
    return {'products': []} if 'products' in filename else {'events': []} if 'events' in filename else {'library': []}

def save_json_file(filename, data):
    """حفظ ملف JSON"""
    try:
        with open(filename, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
        return True
    except:
        return False

# API المنتجات
@app.route('/api/products', methods=['GET'])
def get_products():
    data = load_json_file(PRODUCTS_FILE)
    return jsonify(data)

@app.route('/api/products', methods=['POST'])
def add_product():
    try:
        product_data = request.json
        product_data['id'] = str(uuid.uuid4())
        product_data['created_at'] = datetime.now().isoformat()
        
        data = load_json_file(PRODUCTS_FILE)
        data['products'].append(product_data)
        
        if save_json_file(PRODUCTS_FILE, data):
            return jsonify({'success': True, 'message': 'تم إضافة المنتج بنجاح'})
        else:
            return jsonify({'success': False, 'message': 'فشل في حفظ المنتج'}), 500
    except Exception as e:
        return jsonify({'success': False, 'message': str(e)}), 500

@app.route('/api/products/<product_id>', methods=['DELETE'])
def delete_product(product_id):
    try:
        data = load_json_file(PRODUCTS_FILE)
        data['products'] = [p for p in data['products'] if p.get('id') != product_id]
        
        if save_json_file(PRODUCTS_FILE, data):
            return jsonify({'success': True, 'message': 'تم حذف المنتج بنجاح'})
        else:
            return jsonify({'success': False, 'message': 'فشل في حذف المنتج'}), 500
    except Exception as e:
        return jsonify({'success': False, 'message': str(e)}), 500

# API الفعاليات
@app.route('/api/events', methods=['GET'])
def get_events():
    data = load_json_file(EVENTS_FILE)
    return jsonify(data)

@app.route('/api/events', methods=['POST'])
def add_event():
    try:
        event_data = request.json
        event_data['id'] = str(uuid.uuid4())
        event_data['created_at'] = datetime.now().isoformat()
        
        data = load_json_file(EVENTS_FILE)
        data['events'].append(event_data)
        
        if save_json_file(EVENTS_FILE, data):
            return jsonify({'success': True, 'message': 'تم إضافة الفعالية بنجاح'})
        else:
            return jsonify({'success': False, 'message': 'فشل في حفظ الفعالية'}), 500
    except Exception as e:
        return jsonify({'success': False, 'message': str(e)}), 500

@app.route('/api/events/<event_id>', methods=['DELETE'])
def delete_event(event_id):
    try:
        data = load_json_file(EVENTS_FILE)
        data['events'] = [e for e in data['events'] if e.get('id') != event_id]
        
        if save_json_file(EVENTS_FILE, data):
            return jsonify({'success': True, 'message': 'تم حذف الفعالية بنجاح'})
        else:
            return jsonify({'success': False, 'message': 'فشل في حذف الفعالية'}), 500
    except Exception as e:
        return jsonify({'success': False, 'message': str(e)}), 500

# API المكتبة
@app.route('/api/library', methods=['GET'])
def get_library():
    data = load_json_file(LIBRARY_FILE)
    return jsonify(data)

@app.route('/api/library', methods=['POST'])
def add_library_item():
    try:
        library_data = request.json
        library_data['id'] = str(uuid.uuid4())
        library_data['created_at'] = datetime.now().isoformat()
        
        data = load_json_file(LIBRARY_FILE)
        data['library'].append(library_data)
        
        if save_json_file(LIBRARY_FILE, data):
            return jsonify({'success': True, 'message': 'تم إضافة العنصر للمكتبة بنجاح'})
        else:
            return jsonify({'success': False, 'message': 'فشل في حفظ العنصر'}), 500
    except Exception as e:
        return jsonify({'success': False, 'message': str(e)}), 500

@app.route('/api/library/<item_id>', methods=['DELETE'])
def delete_library_item(item_id):
    try:
        data = load_json_file(LIBRARY_FILE)
        data['library'] = [l for l in data['library'] if l.get('id') != item_id]
        
        if save_json_file(LIBRARY_FILE, data):
            return jsonify({'success': True, 'message': 'تم حذف العنصر بنجاح'})
        else:
            return jsonify({'success': False, 'message': 'فشل في حذف العنصر'}), 500
    except Exception as e:
        return jsonify({'success': False, 'message': str(e)}), 500

# تسجيل الدخول
@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form.get('username')
        password = request.form.get('password')
        
        if username == ADMIN_USERNAME and password == ADMIN_PASSWORD:
            session['logged_in'] = True
            return redirect('/admin')
        else:
            return '''
            <!DOCTYPE html>
            <html lang="ar" dir="rtl">
            <head>
                <meta charset="UTF-8">
                <title>خطأ في تسجيل الدخول</title>
                <style>
                    body { font-family: Arial; text-align: center; padding: 50px; background: #f8f9fa; }
                    .error { color: #dc3545; background: #f8d7da; padding: 20px; border-radius: 10px; margin: 20px auto; max-width: 400px; }
                </style>
            </head>
            <body>
                <div class="error">
                    <h2>خطأ في تسجيل الدخول</h2>
                    <p>اسم المستخدم أو كلمة المرور غير صحيحة</p>
                    <a href="/login">المحاولة مرة أخرى</a>
                </div>
            </body>
            </html>
            '''
    
    return '''
    <!DOCTYPE html>
    <html lang="ar" dir="rtl">
    <head>
        <meta charset="UTF-8">
        <title>تسجيل الدخول - دار التراث الفلسطيني</title>
        <style>
            body { font-family: Arial; background: linear-gradient(135deg, #2c5530 0%, #8B4513 100%); min-height: 100vh; display: flex; align-items: center; justify-content: center; margin: 0; }
            .login-form { background: white; padding: 40px; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.3); max-width: 400px; width: 100%; }
            .login-form h2 { color: #2c5530; text-align: center; margin-bottom: 30px; }
            .form-group { margin-bottom: 20px; }
            .form-group label { display: block; margin-bottom: 5px; color: #2c5530; font-weight: bold; }
            .form-control { width: 100%; padding: 12px; border: 2px solid #e9ecef; border-radius: 8px; font-size: 16px; }
            .form-control:focus { outline: none; border-color: #2c5530; }
            .btn { width: 100%; background: linear-gradient(135deg, #2c5530 0%, #8B4513 100%); color: white; border: none; padding: 12px; border-radius: 8px; font-size: 16px; cursor: pointer; }
            .btn:hover { transform: translateY(-2px); box-shadow: 0 5px 15px rgba(44, 85, 48, 0.3); }
        </style>
    </head>
    <body>
        <div class="login-form">
            <h2>تسجيل الدخول</h2>
            <form method="POST">
                <div class="form-group">
                    <label>اسم المستخدم</label>
                    <input type="text" name="username" class="form-control" required>
                </div>
                <div class="form-group">
                    <label>كلمة المرور</label>
                    <input type="password" name="password" class="form-control" required>
                </div>
                <button type="submit" class="btn">دخول</button>
            </form>
        </div>
    </body>
    </html>
    '''

# لوحة الإدارة
@app.route('/admin')
def admin():
    if not session.get('logged_in'):
        return redirect('/login')
    return send_from_directory(static_folder_path, 'simple-admin.html')

# تسجيل الخروج
@app.route('/logout')
def logout():
    session.clear()
    return redirect('/login')

# الصفحة الرئيسية والملفات الثابتة
@app.route('/')
def index():
    return send_from_directory(static_folder_path, 'index.html')

@app.route('/<path:path>')
def serve_static(path):
    if os.path.exists(os.path.join(static_folder_path, path)):
        return send_from_directory(static_folder_path, path)
    else:
        return send_from_directory(static_folder_path, 'index.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5004, debug=True)

