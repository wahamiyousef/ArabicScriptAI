from flask import Flask, jsonify, request
from flask_cors import CORS
from PIL import Image
import os, pytesseract
from werkzeug.utils import secure_filename

import functions

pytesseract.pytesseract.tesseract_cmd = "c:\\Program Files\\Tesseract-OCR\\tesseract.exe"

app = Flask(__name__)
cors = CORS(app, origins='*')

dir = os.path.dirname(os.path.abspath(__file__))
img = Image.open(dir + "\images\\test5.png")
img.load()
#img.show()
text = pytesseract.image_to_string(img, lang="ara", config='--oem 3 --psm 6')
print("text: "+text)
#img = dir + '\\images\\test.png'
#img = dir + "\\images\\test.png"
#img2 = dir + "\\images\\test3.png"
#text = pytesseract.image_to_string(Image.open(img))\ 
#arabtext = pytesseract.image_to_string(Image.open(img2), lang="ara")


@app.route('/')
def index():
  return text #arabtext + "test"
print(text)
#print(arabtext +"test")
  #print(pytesseract.image_to_string(Image.open(dir + '/images/test.png')))



@app.route('/api/letters/random', methods=['GET'])
def random_letter():
  random_letter = functions.get_random_letter()
  return random_letter

@app.route('/api/letters', methods=['GET'])
def letters():
  return_json = functions.return_json()
  return return_json

'''
@app.route('/api/upload', methods=['POST'])
def upload_file():
  if 'file_to_upload' not in request.files:
    response = jsonify({
      "message": 'No file part in the request',
      "status": 'failed'
    })
    response.status_code = 400
    return response

  files = request.files.getlist('file_to_upload')
    
  errors = {}
  success = False
    
  for file in files:      
    if file and functions.allowed_file(file.filename):
      filename = secure_filename(file.filename)
      file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
      success = True
    else:
      response = jsonify({
        "message": 'File type is not allowed',
        "status": 'failed'
      })
      return response
      
  if success and errors:
    errors['message'] = 'File(s) successfully uploaded'
    errors['status'] = 'failed'
    response = jsonify(errors)
    response.status_code = 500
    return response
  if success:
    response = jsonify({
      "message": 'Files successfully uploaded',
      "status": 'successs'
    })
    response.status_code = 201
    return response
  else:
    response = jsonify(errors)
    response.status_code = 500
    return response



@app.route('/api/upload', methods=['POST'])
def upload_file():
  if 'file_to_upload' not in request.files:
    return jsonify(status=0, message="No file part"), 400
  file = request.files['file_to_upload']
  if file.filename == '':
    return jsonify(status=0, message="No selected file"), 400
  # Save the file or process it here
  file.save(os.path.join('/images', file.filename))
  return jsonify(status=1, message="File uploaded successfully")

  '''

@app.route('/api/upload', methods=['POST'])
def uploadImg():
  files = request.files
  file = files.get('file_to_upload')
  print(file)
  """
  CODE TO HANDLE FILE
  """
  return jsonify({
    'success': True,
    'file': 'Received'
  })


#print(str(random_letter)+"hi")


'''
@app.route("/api/users", methods=['GET'])
def users():
  return jsonify(
    {
      "users": [
        'john',
        'jack',
        'jake'
      ]
    }
  )
'''

if __name__ == "__main__":
  app.run(debug=True, port=8080)