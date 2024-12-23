from flask import Flask, jsonify
import requests
import random

app = Flask(__name__)

@app.route('/get-character', methods=['GET'])
def get_character():
    # Gera um ID aleatório entre 1 e 826
    character_id = random.randint(1, 826)
    api_url = f'https://rickandmortyapi.com/api/character/{character_id}'

    # Faz a requisição para a API do Rick and Morty
    response = requests.get(api_url)

    if response.status_code == 200:
        data = response.json()
        return jsonify({'image': data['image']}) # Retorna apenas a URL da imagem
    else:
        return jsonify({'erros': 'Character not found'}), 404
    
if __name__ == '__main__':
    app.run(debug=True)