# Chapter Summary

### Linked Lists
- data structure that represents a sequence of nodes
- Two types:
	- singly linked: each node points to the next node in the list
	- doubly linked: gives each node pointers to the next and previous node
- Pros:
	- add and remove items from the beginning of list in constant time
- Cons:
	- does not provide constant time access to an index
		- finding kth element takes k iterations
- Runner technique
	- used in many linked list problems
	- iterate through the linked list with two pointers
		- simultaneous
		- one pointer is faster than the other (fixed amount)
- a number of linked list problems have inherently recursive solutions