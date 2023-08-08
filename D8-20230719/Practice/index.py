age=int(input("enter your age"))
if age<3:
    print("free ticket")
elif age>=3 and age<=12:
    print("pay $10")
elif age>=65:
    print("pay $12")
else:
    print("pay $15")


