userDtails = [{
    "name" : "saravana",
    "e_mail" : "saravana@gmail.com",
    "password" : "saravan@123",
},
{
    "name" : "benish",
    "e_mail" : "benish@gmail.com",
    "password" : "benish@123",
},
{
    "name" : "kabeesh",
    "e_mail" : "kabeesh@gmail.com",
    "password" : "kabeesh@123",
},
{
    "name" : "naathan",
    "e_mail" : "naathan@gmail.com",
    "password" : "naathan@123",
}]

login_register=input("enter login or register")
def facebook(a,b):
    if a=="login":
        email=(input("enter your email"))
        password=(input("enter your password"))
        for x in b:
            if email==x["e_mail"] and password==x["password"]:
                print(x["name"])
    elif a=="register":        
        name=input("enter your name")
        email=input("enter your email")
        password=input("enter your password")
        c_password=input("enter your c_password")
        if (password==c_password):
            print("you are registered succesfuly")
            b.append({"name","email","password"})
        else:
            print("invalid password") 
facebook(login_register,userDtails)
