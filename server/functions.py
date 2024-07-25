import json
from random import randint



with open("arabic_alphabet.json", encoding="UTF-8") as f:
  data = json.load(f)
'''
f = open('arabic_alphabet.json', encoding="UTF-8")
data = json.load(f)
'''

def get_random_letter():
  #random_let = random.randint(0,len(data))
  #random_let = data["alphabet"]
  #print("random letter: "+random_let)

  rand_index = randint(0, len(data['alphabet'])-1)
  #return data[rand_index]['alphabet']
  return data['alphabet'][rand_index]

#example for sound data['alphabet'][rand_index]['sound']

def return_json():
  return data

ALLOWED_EXTENSIONS = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'])

def allowed_file(filename):
  return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS