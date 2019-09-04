import random

def getlotto():
    winner = [1, 15, 19, 23, 28, 42]

    lotto = sorted(random.sample(range(1, 46), 6))

    set(lotto) #=> 집합(중복원소 제거, 집합 연산자)

    # print(set(winner) & set(lotto))

    cnt = len(set(winner) & set(lotto))

    rank = ''
    if cnt == 6:
        rank = '1등'
    elif cnt == 5:
        rank = '3등'
    elif cnt == 4:
        rank = '4등'
    elif cnt == 3:
        rank = '5등'
    else:
        rank = '꽝'

    print(f'{cnt}, {rank}')


n = 0

while n < 1000:
    getlotto()
    n += 1