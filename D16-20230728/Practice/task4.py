# user=input("enter the sentence")
# new={}
# words=user.split()
# for word in words:
#     if word in new:
#         new[word]+=1
#     else:
#         new[word]=1
# print(new)



# str = "the quick brown fox jumps over the lazy dog the quick brown fox the"
# list_str = str.split()
# result_dict={}

# for wrd in list_str:

#     if wrd in result_dict:
#         result_dict[wrd]+=1
#     else:
#         result_dict[wrd]=1

# print(result_dict)

num_list=[2,5,8,1,9,3,7]
large_value=0
small_value=list[0]
for x in num_list:
    if x>large_value:
        large_value=x
    if x<small_value:
        small_value=x 
    final=large_value-small_value
print(final,"(",large_value,"-"small_value,")") 