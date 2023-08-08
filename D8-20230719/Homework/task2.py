
a=input("enter the food")
b=input("enter the food")
food={"milk":1.02,"pop_corn":2.5,"bread":2.5}
if (a=="milk" and b=="pop_corn") or (a=="pop_corn" and b=="milk"):
    print(food["milk"]+food["pop_corn"])
elif (a=="pop_corn" and b=="bread") or (a=="bread" and b=="pop_corn"):
    print(food["pop_corn"]+food["bread"])
elif (a=="milk" and b=="bread") or (a=="bread" and b=="milk"):
    print(food["milk"]+food["bread"])
else:
    print("your item is not available")