from flask import Flask, jsonify
import json
from flask_cors import CORS
from PIL import Image
import os, pytesseract

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