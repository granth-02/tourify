import requests
import json
from maps import googleMapsHandler

# Define your API key and the endpoint URL
mapsAPIKEY=''

url = 'https://routes.googleapis.com/distanceMatrix/v2:computeRouteMatrix'

m = googleMapsHandler({ 'places' : ['Marine Drive', 'Colaba Market', 'Gateway of India Mumbai', 'Thane Railway Station']})

payload = m.gen_payload()

passer = {
    "origins" : payload,
    "destinations" : payload
}

header = {
    "Content-Type" : 'application/json',
    'X-Goog-Api-Key' : mapsAPIKEY,
    'X-Goog-FieldMask': 'originIndex,destinationIndex,duration,distanceMeters,status,condition,travelAdvisory.transitFare'

}

# Prepare the request payload

response = requests.post(url, params={"key": mapsAPIKEY}, json=passer, headers=header)

# Make the API request
print(response.text)
# # Check if the request was successful
# if response.status_code == 200:
#     data = response.json()
#     # Process the response data here
#     print(json.dumps(data, indent=2))  # Print the response data for further processing
# else:
#     print('Error: Unable to fetch data. Status code:', response.status_code)