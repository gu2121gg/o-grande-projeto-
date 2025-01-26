import re
def Main():
	key=input("Input your key please:")
	steamkeyregex=re.match('[a-zA-Z0-9]{4,6}\-?[a-zA-Z0-9]{4,6}\-?[a-zA-Z0-9]{4,6}', key)
	if steamkeyregex is None:
	  
	  print("Invalid key detected")
	  
	else:
	  
	  print("Valid key detected")
	  
Main()