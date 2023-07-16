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
        print("Here is the data that we got ")
        print(data)
        val = data[0]
        print(val)
        value = val["departmentName"]
        print("Here is the value " + value)
        cursor = mysql.connection.cursor()
        query_string = "insert into departments (department) values (%s)"
        cursor.execute(query_string, [value])
        mysql.connection.commit()
        results = cursor.fetchall()
        number = cursor.rowcount
        print(jsonify(results))
        print(number)
        return jsonify(results)


@app.route('/department/getDepartments', methods=['GET'])
def get_department_list():
    if request.method == 'GET':
        cursor = mysql.connection.cursor()
        cursor.execute('''Select * from Departments''')
        results = cursor.fetchall()
        # dict_obj = {'row': results}
        # print("This is dict Json dumps" + json.dumps(dict_obj))
        # print(json.dumps(results))
        department = []
        content = {}
        for row in results:
            content = {'id': row[0], 'department': row[1]}
            department.append(content)
            content = {}
        print(department)
        print("Json here " + json.dumps(department))

        return jsonify(department)


@app.route('/employees/getEmployees/search', methods=['GET'])
def get_employees_list():
    if request.method == 'GET':
        args = request.args
        value = args.get("departmentID", default=0, type=str)
        print("Value here -------------------" + value)
        cursor = mysql.connection.cursor()
        query_String = "SELECT employeeID, firstName, lastName from employees where DepartmentID = (%s)"
        cursor.execute(query_String, [value])
        results = cursor.fetchall()
        print(results)
        employees = []
        for row in results:
            print(row)
            content = {'employeeID': row[0], 'firstName': row[1], 'lastName': row[2]}
            employees.append(content)
            content = {}
        return jsonify(employees)


@app.route('/resources/addResource', methods=['POST'])
def add_resource_information():
    if request.method == 'POST':
        data = request.get_json(force=True)
        print("Here is the data that we got ")
        print(data)
        val = data[0]
        print(val)
        department = val["departmentID"]
        print("dept " + department)
        employee = val["employeeID"]
        print("employee " + employee)
        section = val["section"]
        print("section " + section)
        information = val["information"]
        print("information " + information)
        cursor = mysql.connection.cursor()
        query_string = "insert into resources(departmentID, createdByEmployeeID, departmentSection, resourceInfo) values (%s, %s, %s, %s)"
        cursor.execute(query_string, [department, employee, section, information])
        mysql.connection.commit()
        results = cursor.fetchall()
        number = cursor.rowcount
        print(jsonify(results))
        print(number)
        return jsonify(results)


@app.route('/resources/search', methods=['GET'])
def get_search_list():
    if request.method == 'GET':
        args = request.args
        print("in Here----")
        print(args)
        search = args.get("seek", default=0, type=str)
        print(search)
        print("Value here -------------------" + search)
        if ' ' in search:
            different = search.split(",")
        cursor = mysql.connection.cursor()
        query_String = "SELECT * FROM resources WHERE resourceInfo LIKE %s"
        print(query_String)
        cursor.execute(query_String, ["%" + search + "%"])
        results = cursor.fetchall()
        print(results)
        searchResult = []
        for row in results:
            print(row)
            content = {'resourceID': row[0], 'departmentID': row[1], 'createdByEmployeeID': row[2],
                       'departmentSection': row[3], 'resourceInfo': row[4]}
            searchResult.append(content)
            content = {}
        return jsonify(searchResult)


if __name__ == '__main__':
    app.run(debug=True)
