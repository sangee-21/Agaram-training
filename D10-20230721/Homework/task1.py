"""
numbers=[1,2,3,4,5,6,7,8,9]
even=0
odd=0
for x in numbers:
    if x%2==0:
        even+=1
    else:
        odd+=1
print("number of even numbers",even)
print("numberof odd numbers",odd)
"""

mixed_list=[1,2.0,"hai","@",5,6,7,8,9]
integer_count=0
for x in mixed_list:
    if type(x)==int:
        integer_count=integer_count+1
print("number of real numbers",integer count)