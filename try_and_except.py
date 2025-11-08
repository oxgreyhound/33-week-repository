#!/usr/bin/python3
#try and except

#with a integer
int_input = input("add a number to 60: ")

try:
    print(60 + int(int_input))
except:
    print("not a valid number")

#with a string
str_input = input("add a word after greyhound: ")

try:
    print("greyhound" + (str_input))
except:
    print("nice")