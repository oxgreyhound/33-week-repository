#!/usr/bin/python3
#while loop

x = 0

while x < 12:   #while loop adding 2 to 0 for every iteration until it reaches 12
    x = x + 2
    print(x)

#boolean while loop

while True:
    user_input = input("input here:")   #user input
    if user_input == "greyhound":       #if the user input is greyhound the while loop will print "correct"
        print("correct")
        break                           #break so it wont loop forever