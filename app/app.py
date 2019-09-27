from flask import Flask,render_template

#Flaskオブジェクトの生成
app = Flask(__name__)



#「/」へアクセスがあった場合に、「index.html」を返す
@app.route("/")
def index():
    return render_template("index.html")


#app.pyをターミナルから直接呼び出した時だけ、app.run()を実行する
if __name__ == "__main__":
    app.run(debug=True)
