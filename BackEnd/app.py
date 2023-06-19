import json

from flask import Flask, request, jsonify
from flask_mysqldb import MySQL
from flask_cors import CORS

app = Flask(__name__)

databaseCredentials = open("Credentials.txt")
lines = databaseCredentials.readlines()
print(lines)

app.config['MYSQL_HOST'] = lines[0].strip()
app.config['MYSQL_USER'] = lines[1].strip()
app.config['MYSQL_PASSWORD'] = lines[2].strip()
app.config['MYSQL_DB'] = lines[3].strip()
stringPortal = lines[4].strip()
print(stringPortal)
intPortalNumber = int(stringPortal)
app.config['MYSQL_PORT'] = intPortalNumber

mysql = MySQL(app)
CORS(app)


@app.route('/')
def hello_world():  # put application's code here
    return {
        'Name': "geek",
        "Age": "22",
        "programming": "python"
    }


@app.route('/department/addDepartment', methods=['POST'])
def get_result_list():

    if request.method == 'POST':
        data = request.get_json(force=True)
        keyword = data["searchInputReact"]
        print(keyword)
        return 'success', 200

@app.route('/department/getDepartments', methods=['GET'])
def get_department_list():

    if request.method == 'GET':
        cursor = mysql.connection.cursor()
        cursor.execute('''Select * from Departments''')
        results = cursor.fetchall()
        #dict_obj = {'row': results}
        #print("This is dict Json dumps" + json.dumps(dict_obj))
        #print(json.dumps(results))
        department = []
        content = {}
        for row in results:
            content = {'id':row[0], 'department':row[1]}
            department.append(content)
            content = {}
        print(department)
        print("Json here " + json.dumps(department))

        return jsonify(department)


if __name__ == '__main__':
    app.run(debug=True)
