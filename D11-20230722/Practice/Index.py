"""
monthly_gold_rate=[{
    "month":"january",
    "rate":2000,
    "Jwells":[{
        "name":"chain",
        "making_chrg":12
    },
    {
        "name":"ring",
        "making_chrg":5
    },
    {
        "name":"bangle",
        "making_chrg":8
    }]
},
{
    "month":"february",
    "rate":4000,
    "jwells":[{
        "name":"chain",
        "making_chrg":13
    },
    {
        "name":"ring",
        "making_chrg":7
    },
    {
        "name":"bangle",
        "making_chrg":10
    }]
},
{
    "month":"march",
    "rate":16000,
    "jwells":[{
        "name":"chain",
        "making_chrg":15
    },
    {
        "name":"ring",
        "making_chrg":6
    }
}]]

maximum_rate=monthly_gold_rate[0]["rate"]
minimum_rate=monthly_gold_rate[0]["rate"]
for x in monthly_gold_rate:
    if x["rate"]<=minimum_rate
        minimum_rate=x["rate"]
    elif x["rate"]>=maximum_rate:
        maximum_rate=x["rate"]
print(minimum_rate)
print(maximum_rate)
"""
usee_details=[{
    "name":"ajay",
    "marks":[80,90,70,60,40]
},
{
    "name":"sangee",
    "marks":[90,90,100,80,85]
},
{
    "name":"abarna",
    "marks":[35,70,65,80,85]
}]
for student in user_details:
    print(student['marks'])
    total = 0
    for x in student['marks']: 
        total = total + x
    print(total)