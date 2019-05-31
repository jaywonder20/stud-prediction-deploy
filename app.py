from flask import Flask, render_template, request
from sklearn.externals import joblib
import pandas as pd
import numpy as np



app = Flask(__name__)

mul_reg = open("multiple_linear_model.pkl", "rb") 
ml_model = joblib.load(mul_reg)


#@app.route('/test')
#def test():
#    return 'Flask is being used for Development'


@app.route('/')
def home():
    return render_template('home.html')

@app.route('/predict', methods=['GET','POST'])
def predict():
    if request.method == 'POST':
        try:

            first_name = (request.form['first_name'])
            last_name = (request.form['last_name'])
            Gender = float(request.form['Gender'])
            Age = float(request.form['Age'])
            Location = float(request.form['Location'])
            Pstatus = float(request.form['Pstatus'])
            Medu = float(request.form['Medu'])
            Fedu = float(request.form['Fedu'])
            traveltime = float(request.form['traveltime'])
            studytime = float(request.form['studytime'])
            failures = float(request.form['failures'])
            schoolsup = float(request.form['schoolsup'])
            famsup = float(request.form['famsup'])
            paid = float(request.form['paid'])
            activities = float(request.form['activities'])
            nursery = float(request.form['nursery'])
            higher = float(request.form['higher'])
            internet = float(request.form['internet'])
            famrel = float(request.form['famrel'])
            freetime = float(request.form['freetime'])
            health = float(request.form['health'])
            absences = float(request.form['absences'])
            pred_args = [Gender, Age, Location, Pstatus, Medu, Fedu, traveltime, studytime, failures, schoolsup, famsup, paid, activities, nursery, higher, internet, famrel, freetime, health, absences]
            pred_args_arr = np.array(pred_args)
            pred_args_arr = pred_args_arr.reshape(1, -1)
            #mul_reg = open("multiple_linear_model.pkl", "rb")
            #ml_model = joblib.load(mul_reg)
            model_prediction = ml_model.predict(pred_args_arr)
            model_prediction = round(float(model_prediction))
        except ValueError:
            return "Please check if the values are entered correctly"
    return render_template('predict.html', prediction = model_prediction, first_name=first_name, last_name=last_name)        

if __name__ == '__main__':
    app.run()    
