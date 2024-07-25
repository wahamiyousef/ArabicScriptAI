from flask import Flask, jsonify, request
from flask_cors import CORS
from PIL import Image
import os, pytesseract
from werkzeug.utils import secure_filename

import functions

import base64
from io import BytesIO

pytesseract.pytesseract.tesseract_cmd = "c:\\Program Files\\Tesseract-OCR\\tesseract.exe"

app = Flask(__name__)
cors = CORS(app, origins='*')

dir = os.path.dirname(os.path.abspath(__file__))
img = Image.open(dir + "\images\\test5.png")
img.load()

'''
tempFile = 
starter = tempFile.find(',')
image_data = tempFile[starter+1:]
image_data = bytes(image_data, encoding="ascii")
im = Image.open(BytesIO(base64.b64decode(image_data)))
im.save('images/image.png')
'''

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


@app.route('/api/upload', methods=['POST'])
def uploadImg():
  files = request.files
  file = files.get('file_to_upload')

  if file:
    file_content = file.read().decode('utf-8')

    #img = Image.open(file_content)
    #img.load()

    starter = file_content.find(',')
    image_data = file_content[starter+1:]
    image_data = bytes(image_data, encoding="ascii")
    im = Image.open(BytesIO(base64.b64decode(image_data)))
    im.save('images/rand.png')

    text = pytesseract.image_to_string(im, lang="ara", config='--oem 3 --psm 6')
    print("Letter: "+text)

    return jsonify({
        'success': True,
        'file': 'Received'
        'file': 'Received',
        'text': text
      })
  else:
    return jsonify({
      'success': False,
      'message': 'No file uploaded'
    }), 400



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