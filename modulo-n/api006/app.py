from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
# Endpoint POST
@app.route('/process', methods=['POST'])
def process_data():
    data = request.json # Captura os dados enviados pelo front-end
    user_input = data.get('input') # Obtém o valor do campo 'input'
    response = f"Você digitou: {user_input}" # Processa os dados
    return jsonify({"message": response}) # Retorna a resposta como JSON
# Endpoint GET
@app.route('/fetch-data', methods=['GET'])
def fetch_data():
    response = 'Dados retornados com sucesso via GET!'
    return jsonify({"message": response})
if __name__ == '__main__':
    app.run(debug=True)