lists=["cater","catter","catch"]
# def common_prefix(lists):
#     min_lengt=min(len(l)for l in lists)

#     for i in range(min_lengt):
#         if 

# print(common_prefix(lists))       



# word=lists[0]


# res=""
# for i in range(1,len(lists)-1):

#     for j in word:

#         if j == lists[i][1::]:

#             res+=j
#         else:
#             break

# print(res)



# word=lists[0]

# res=""

# for i in word:
#     for w in lists:
#         for ch in w:
#             if ch==i:
#                 res+=ch
#             else:
#                 break


# print(res)


word=lists[0]

check=""
res=""

for ch in word:
    check+=ch
    res=lists(map(lambda w :check if check in w else w,check))


print(res)