sentence=input("Enter the sentence: ")
    
def find_longest_word(words):
    words=words.split()
    longest_word=""
    for word in words:
        if len(word)>len(longest_word):
            longest_word=word
    return longest_word

final=find_longest_word(sentence)
print(final,"is the longest word")


list=[2,3,5,4,7,9,8,1]
sum=9
def find_sum(num):
    pairs=""
    for i in range(len(num)):
        for j in range(i+1,len(num)):
            if num[i]+num[j]==sum:
                 pairs=pairs+str((num[i],num[j]))+","
    return pairs
final=find_sum(list)
print(final)

def count(word):
        sum=0
        for char in word:
            vowal="aeiouAEIOU"
            if char in vowal:
                sum=sum+1
        return sum
                

                
def max_vowal(line):
    words=[]
    
    max_vowal_count=0
    max_vowal_word=""
    words=line.split()
    
    for word in words:
        vowal_count=count(word)
        if vowal_count>max_vowal_count:
            max_vowal_count=vowal_count
            max_vowal_word=word
    print(max_vowal_word)
    print(max_vowal_count)
sentance=input("enter the sentance:")
max_vowal(sentance)

