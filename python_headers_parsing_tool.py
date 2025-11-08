#!/usr/bin/python3

#http://localhost:3000/#/search
import httpx

website = input("Enter server to parse headers:\n")

res = httpx.get(website)

print(f"\nStatus: {res.status_code}\n")
print("Headers:")

for header, value in res.headers.items():
    print(f"{header}: {value}")
