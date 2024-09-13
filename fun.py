

data=[0,0,1,0,0,0,2,0,1,0,0,0,0,0,2,2]

count=[]

temp=1
i=0
j=i+1

while(j<len(data)):

    if data[i]==data[j]:
        temp+=1
        j=j+1
    else:
        count.append(temp)
        temp=1
        i=j
        j=i+1
print(count)



