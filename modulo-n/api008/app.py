from flask import Flask, request, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)

@app.route('/search', methods=['POST'])
def search_character():
    data = request.json  # Recebe os dados JSON enviados
    name = data.get('name')
    character_id = data.get('id')
    
    # Verifica se pelo menos um dos campos foi preenchido
    if not name and not character_id:
        return jsonify({"error": "Preencha pelo menos um dos campos."}), 400

    url = "https://rickandmortyapi.com/api/character/"

    # Busca por ID, se for fornecido
    if character_id:
        try:
            response = requests.get(f"{url}{character_id}")
            response.raise_for_status()
            character_data = response.json()
            return jsonify({
                "name": character_data["name"],
                "image": character_data["image"]
            })
        except requests.exceptions.RequestException:
            return jsonify({"error": "Personagem não encontrado."}), 404

    # Busca por nome, se fornecido
    if name:
        try:
            response = requests.get(url, params={"name": name})
            response.raise_for_status()
            results = response.json().get('results', [])
            if results:
                character_data = results[0]
                return jsonify({
                    "name": character_data["name"],
                    "image": character_data["image"]
                })
            else:
                return jsonify({"error": "Personagem não encontrado."}), 404
        except requests.exceptions.RequestException:
            return jsonify({"error": "Erro ao acessar a API."}), 500

if __name__ == '__main__':
    app.run(debug=True)
