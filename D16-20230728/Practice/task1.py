list1=[10,30,50,70,90,110]
list2=[15,35,55,65,95,100]
for x in range(len(list1)):
    if list1[x] > list2[x]:
        print(list1[x] ,"is greater than",list2[x])
    elif list2[x] > list1[x]:
        print(list2[x],"is greater than",list1[x])
      
    