# number=int(input("enter your number"))
# for i in range(number):
#     for j in range(number):
#         print("x",end="")
#     print("")
  

# number=int(input("enter your number"))
# for i in range(1,(number*number)+1):
#     print(i,end="")    
#     if i%number==0:
#         print("\n")
      

# number=int(input("enter your number"))
# for i in range(number*number,0,-1):    
#     if i%number==0:
#         print("\n")
#     print(i,end="")  

# number=int(input("enter your number"))
# for i in range(number):
#     for j in range(i+1):
#         print("x",end="")
#     print("")
  
# new_list=[]  
# a=[1,0,2,3,0,4,0,5,0]
# for each in range(len(a)):
#     # new_list=new_list+[1,0,2,3,0,4,0,5,0] 
#     #     if each==0:
#     #         print(new_list+[0]) 


a=[1,0,2,3,0,4,0,5,0,0,9,0]
new=[]
for i in  a :
    if len(a)!=len(new) :
        if i!=0:
            new=new+[i]
        elif i==0:
            new=new+[i]
            if len(a)!=len(new):
                new=new+[i]
print(new)
