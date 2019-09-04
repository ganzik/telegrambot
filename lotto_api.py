import requests
from pprint import pprint as pp

url = 'https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=874'
res = requests.get(url)

# json을 python dictionary로 파싱
data = res.json()

winner = []

# winner.append(data['drwtNo1'])
# winner.append(data['drwtNo2'])
# winner.append(data['drwtNo3'])
# winner.append(data['drwtNo4'])
# winner.append(data['drwtNo5'])
# winner.append(data['drwtNo6'])

for i in range(1, 7):
    winner.append(data[f'drwtNo{i}'])
    print(i)



print(winner)