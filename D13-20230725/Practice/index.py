"""
fruits=["APPLE","orange","grapes"]
fruits.insert(1,"pineapple")
print(fruits)

fruits=["APPLE","orange","grapes"]
fruits.append("dragon")
print(fruits)

row1=["anish","ajay"]
row2=["kumari","vinish"]
two_rows=row1+row2
print(two_rows)

details={
    "name":"sangee",
    "place":"vadasery",
}
details["phone"]=100
print(details)
details.update({"email":"sangee@gmail.com","district":"kanya kumari"})
print(details)
"""

freinds_details=[{
    "name":"Murugeswari",
    "place":"Krishnancoil",
    "hobbies":["drawing","gardening","reading"]
},    
{
    "name":"rofiya",
    "place":"vadasery",
    "hobbies":["listeningmusic","reading","sleeping"]
},    

{
    "name":"lingam",
    "place":"rosmiyapuram",
    "hobbies":["movies","music","travelling"]
},
{
    "name":"saravanan",
    "place":"manalikarai",
    "hobbies":["games","movies","games"]
}]
new_friend={
    "name":"manju",
    "place":"vadasery",
    "hobbies":["movies","games"]
}

# freinds_details.append(new_friend)
# print(freinds_details)
# for x in freinds_details:
#     x["hobbies"].append("coding")
# print(freinds_details)
# name=[]
# for x in freinds_details:
#     for a in x["hobbies"]:
#         if a=="drawing":
#             name.append(x["name"])
# print(name)
# hobbies=[]      
# for x in freinds_details:
#     hobbies=hobbies+x["hobbies"]
# print(hobbies)
     
hobbies=[]
for x in freinds_details:
    for a in x["hobbies"]:
        if a not in hobbies:
            hobbies.append(a)
print(hobbies)
for x in freinds_details:
    if  "drawing"  in  x["hobbies"]:
        x["eligible"]=True
    else:
         x["eligible"]=False
print(freinds_details)           


# for name in freinds_details:
#     hobbies=name["hobbies"]
#     position=0
#     for hobby in hobbies:

        
#         if hobby=="drawing":
#           hobbies[position]="designing"
#         position=position+1
        
# print(freinds_details)

