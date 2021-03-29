from firebase import firebase
from datetime import datetime
from gtts import gTTS
import os
import pyrebase
import keyboard
import time

config = {
    'apiKey': "XXXXXXXXXXXXXXXXXXXXXXX",
  'authDomain': "XXXXXXXXXXXX.firebaseapp.com",
  'databaseURL': "https://XXXXXXXXX.firebaseio.com",
  'projectId': "projectforalze",
  'storageBucket': "XXXXXXXXXX.appspot.com",
  'messagingSenderId': "XXXXXXXXXX",
}

#firebase = pyrebase.initialize_app(config)

#auth = firebase.auth()

#userEmail='deviceglint@gmail.com'
#userPass='deviceglint@123'

# Log the user in
#user = auth.sign_in_with_email_and_password(userEmail,userPass)

# Get a reference to the database service
#db = firebase.database()

now = datetime.now()

current_time = now.strftime("%H:%M") 
print(current_time)

firebase = firebase.FirebaseApplication('https://projectforalze.firebaseio.com',None)
result = firebase.get('/data',None)
print(result)


print(len(result))
#op1=result[8]["anumber"]
d=dict()
for i in range(1,len(result)):
	d[result[i]["abranch"]]=result[i]["anumber"]
print(d)


if current_time in d:
	print("its time")
	if(d.get(current_time)=='sleep'):
		mytext = 'go to sleep now'
	if(d.get(current_time)=='medicine'):
		mytext = 'take your medicine now'
	if(d.get(current_time)=='walk'):
		mytext = 'go for a walk '
	if(d.get(current_time)=='eat'):
		mytext = 'eat your food now'
	if(d.get(current_time)=='jog'):
		mytext = 'go for a jog now'
	language = 'en-uk'
	myobj = gTTS(text=mytext, lang=language, slow=False)
	myobj.save("alz1.mp3")
	n=0
	print(mytext)
	while n<4:
		time.sleep(2)
		os.system("alz1.mp3")
		n+=1
		if keyboard.is_pressed("p"): 
			print("pressed p")
			break
        
   		
	


'''print(result[3]["abranch"])
#op1=result["4"]["anumber"]
op1=result[8]["anumber"]
op2=result[8]["abranch"]
print(op1,op2)'''

#print("do task",anumber,"at",abranch) 

#searched_bus = db.child("projectforalze/list").order_by_child("anumber").equal_to("eat").get()
#for bus in searched_bus.each():
    #print(bus.key()) 
