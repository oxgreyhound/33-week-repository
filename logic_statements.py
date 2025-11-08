#!/usr/bin/python3
#logic statements

input_bytes = 128
is_overflown = False

if input_bytes > 129:               #if input_bytes is more than 128
    print("buffer is overflown")
elif input_bytes == 128:            #if input_bytes is equal
    print("you are safe")
else:                               #neither of if or elif
    print("probably safe")

#if and else statements only
if is_overflown:                    #takes in to count if the statement is true or false
    print("buffer is overflown")
else:
    print("buffer is not overflown")