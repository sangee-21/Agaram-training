"""
a=int(input("enter number"))
b=int(int(input("enter number")))
c=input("enter mathematical operators")
if c=="addition":
    print(a+b)
elif c=="substraction":
    print(a-b)
elif c=="multiplication":
    print(a*b)
elif c=="division":
    print(a/b)
"""
"""
salary=int(input("enter salary"))
if salary<10000:
    print(salary*20/100+salary*5/100+salary)
elif salary>=10000 and salary<20000:
    print(salary*25/100+salary*7/100+salary)
elif salary>=20000:
    print(salary*30/100+salary*8/100+salary)
"""
"""
a=int(input("enter number"))
b=int(input("enter number"))
c=int(input("enter number"))
d=int(input("enter number"))
e=int(input("enter number"))
value1=(a+b+c)*d
total=value1*e
if total==0:
    print("even number")
else:
    print("odd number")
"""
"""
maths=int(input("enter number"))
physics=int(input("enter number"))
chemistry=int(input("enter number"))
value1=(maths+physics+chemistry)
value2=(maths+physics)
if (maths>=65 and physics>=55 and chemistry>=50):
    if value1>=190 or value2>=140:
        print("you are eligible")
    else:
        print("you are not eligible")
"""
electricity_unit=int(input("enter unit"))
electricity_cost=int(input("enter cost per unit"))
total=(electricity_unit*electricity_cost)
if electricity_unit<100:
    print(total*0.18)
elif electricity_unit>=100:
    add=(total+50)
    print(add*0.18)
elif electricity_unit>=500 and electricity_unit<1000:
    add=(total*0.5)
    gst=(total+add)*0.18
    print(total+gst)