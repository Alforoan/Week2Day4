
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def hello():
    return 'Hello, World!'

@app.route('/base')
def new_base():
    return render_template('base.html')

@app.route('/climbing')
def new_climbing():
    return render_template('climbing.html')

@app.route('/guitar')
def new_guitar():
    return render_template('guitar.html')

@app.route('/movies')
def new_movies():
    return render_template('movies.html')

if __name__ == '__main__':
    app.run(debug=True)

