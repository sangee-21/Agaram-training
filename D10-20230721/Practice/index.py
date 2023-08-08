"""
value=int(input("enter number"))
if value%3==0 and value%5==0:
    print("fizzbus")
elif value%3==0:
    print("fizz")
elif value%5==0:
    print("buzz")
else:
    print(number)
"""

"""
animals=["lion","tiger","elephant"]
for x in animals:
    print(x)
"""
"""
numbers=[1,2,3,4,5,6,7,8]
odd=[]
even=[]
for x in numbers:
    if x%2==0:
        even.append(x)
    else:
        odd.append(x)
print(odd)
print(even)
"""
"""
numbers=[1,2,3,4,5,6,7,8,10]
for x in numbers:
    if x%3==0 and x%5==0:
            print("fizzbus",x)
    elif x%3==0:
            print("fizz",x)
    elif x%5==0:
            print("bus")
    else:
            print(x)   
"""

details=[{
    "name":"sangee",
    "age":21
},
{
    "name":"manju",
    "age":12
},
{
    "name":"babina",
    "age":13
}]
total_age=0
for x in details:
    total_age+=x["age"]
print("total",total_age)

