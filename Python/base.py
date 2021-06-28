# age = input('input your age')
# if int(age) > 2000:
#     print('older')
# else:
#     print('young')

# names = ['wr', 'wz', 'wp', 'wd']
# for name in names:
#     print(name)
# sum = 0
# for x in range(101):
#     sum += x
# print(sum)
# d = {'Michael': 95, 'Bob': 75, 'Tracy': 85}
# d['Michael']

def power(x, n=2):
    s = 1
    while n > 0:
        n -= 1
        s *= x
    return s


print(power(5))
