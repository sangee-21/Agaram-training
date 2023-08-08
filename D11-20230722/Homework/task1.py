grocery_items = [
    {"item": "Apples", "price": 2.50},
    {"item": "Bananas", "price": 1.70},
    {"item": "Milk", "price": 3.20},
    {"item": "Bread", "price": 2.00},
    {"item": "Eggs", "price": 2.80},
    {"item": "Cheese", "price": 5.50},
    {"item": "Tomatoes", "price": 1.90},
    {"item": "Potatoes", "price": 2.10},
    {"item": "Onions", "price": 1.50},
    {"item": "Chicken", "price": 8.00}
]

budget_limit = int(input("Enter the amount you have"))
selected_item = input("Which Item You Want to buy")

for item in grocery_items:

   if item["item"]==selected_item:
        max_quantity = int(budget_limit / item["price"]) 
        remaining_cost = budget_limit % item["price"] 
        total_cost = item["price"]  * max_quantity
        print(remaining_cost)
        if max_quantity > 0:
             print(item["item"] , int(max_quantity),"units - Total Cost: $",total_cost)
             if remaining_cost>0 :
                 print("Remaining Amount You Have",remaining_cost)
        else : 
            print("Sorry You Didn't have enough amount to buy an item")

