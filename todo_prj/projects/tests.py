import json
import requests
from rest_framework import status

response_token = requests.post(url='http://127.0.0.1:8000/api-token-auth/',
                               data={'username': 'admin', 'password': '123'})
assert response_token.status_code == status.HTTP_200_OK

response_JWT = requests.post(url='http://127.0.0.1:8000/api/token/',
                             headers={'content-type': 'application/json'},
                             data=json.dumps({"username": "admin", "password": "123"}))
assert response_token.status_code == status.HTTP_200_OK

response_some_protect = requests.get(url='http://127.0.0.1:8000/projects/1/',
                                     headers={'Authorization': f'Bearer {response_JWT.json().get("access")}'})
assert response_token.status_code == status.HTTP_200_OK

response_refresh = requests.post(url='http://127.0.0.1:8000/api/token/refresh/',
                                 headers={'content-type': 'application/json'},
                                 data=json.dumps({'refresh': response_JWT.json().get('refresh')}))
assert response_token.status_code == status.HTTP_200_OK

