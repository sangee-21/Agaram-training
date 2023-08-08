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
