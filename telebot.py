import requests
from decouple import config
from pprint import pprint as pp


chat_id = ''
text = 'ethereum forever'

base_url = 'https://api.telegram.org'
token = config('TOKEN')

url = f'{base_url}/bot{token}/getUpdates'

res = requests.get(url)
data = res.json()

count_every_id = []

for i in range(len(data['result'])):
    count_every_id.append(data['result'][i]['message']['from']['id'])

# print(count_every_id)


# first_chat_id = data['result'][0]['message']['from']['id']


# final_url = f'{base_url}/bot{token}/sendMessage?chat_id={first_chat_id}&text={text}'
# send_every_url = f'{base_url}/bot{token}/sendMessage?chat_id={first_chat_id}&text={text}'

# # requests.get(final_url)

for i in range(len(count_every_id)):
    send_every_url = f'{base_url}/bot{token}/sendMessage?chat_id={count_every_id[i]}&text={text}'
    requests.get(send_every_url)

"""
getUpdates 요청을 통해 받아온 응답에서 id를 뽑아내어 sendMessage를 통해 메세지 보내기

한 사람에게만 보내기(첫번째로 메세지 보낸 사람)

나에게 메세지 보낸 모든 사람에게 보내기
"""
