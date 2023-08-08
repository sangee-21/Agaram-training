# def function_name():
#     print("i am called")
# function_name()

# def function_name():
#     a="karka"
#     b="academy"
#     print(a + " " + b)
# function_name()

# def combine_name(a,b):
#     print(a + " " + b)
# combine_name("karka","academy")

# def combine_name(a,b):
#     print(a + " " + b)
# a=input("enter name")
# b=input("enter name")
# combine_name(a,b)

# def function_name(gender):
#     if gender=="male":
#         print("blue")
#     if gender=="female":
#         print("pink")
# gender=input("enter gender")
# function_name(gender)

def find_odd_even(num):
        if num%2==0:
            print(num,"is a even number")
        else:
            print(num,"is a odd number")
                   

num1=int(input("enter number"))
num2=int(input("enter number"))
def function_name(num1,num2):
    if num1>num2:
        find_odd_even(num1)
    elif num2>num1:
        find_odd_even(num2)
    elif num1==num2:
        print("both are equal")
function_name(num1,num2)        