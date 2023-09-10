import requests

# Pobieranie danych pogodowych
def get_weather():
    API_KEY = "912c622485ebcccfe6e75ebb3dc2de10"
    CITY = "Tenerife"
    URL = f"https://api.openweathermap.org/data/2.5/weather?q={CITY}&appid={API_KEY}"
    response = requests.get(URL)
    return response.json()

