# Chapter Summary

### Hash Tables
- maps keys to values for efficient lookup
	- O(1) best case, O(N) worst case
- implemented using an array nested with linked lists at each index
- to look up value by key, hash the key and go to that index of the hash table,
	looking for the value that hashes to that same key
	- Trade offs:
		- low collision:
			- less values stored in each linked list making lookup by key faster
			- larger table, more keys and more empty linked lists
		- high collision:
			- less empty linked lists, more efficient use of space
			- lookup by key will be slower, more likely to run in to O(N) lookup time case
- alternative: implement with BST
	- O(log n) lookup time
	- potential space savings
	- iterate through the keys in order

### ArrayLists and ResizableArrays
- dynamic resizing, some languages have fixed length arrays
	- when a user adds an element that would be outside of the length of the array, it grows by a resizing factor
	- O(n) time to resize, happens so rarely that the amortized insertion time is O(1)
		- (n/2 + n/4 + n/8 + 2 + 1) < N
		- average insertion time is O(1)
- O(1) access to elements

### Strings

assume you are concatenating n strings, all with length x
- on each concatenation, a new copy of the string is created and each char is copied over, one by one
- each iteration requires us to copy the (iteration number) * x chars
	- ex. 2nd iteration requires 2x copies while third requires 3x copies
	- this results in O(x + 2x + 3x + ... + nx) copies
	- reduces to O(xn^2) time

StringBuffer can help avoid this problem
- creates resizable array to hold the chars from each string
- copies back to a string after all chars from all input strings have been added