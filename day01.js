//1. Write a blog on Difference between HTTP1.1 vs HTTP2
// http stands for hyper text transfer protocol
// http->A protocol used by clients (e.g. web browsers) to request resources from servers (e.g. web servers).
//---------------------------HTTP1.1--------------
// 1. this was the prevalent format of HTTP until recently.
// 2. It is a text-based protocol and has some inefficiencies in it, especially when requesting lots of resources like a typical web page.
// 3.HTTP/1.1 messages can be unencrypted (here web site addresses start http://) 
// 4. otherwise encrypted with HTTPS (where web site address start with https://).
// 5.The client uses the start of the URL to decide which protocol to use, usually defaulting to (http://) if not provied.

// -----------------------HTTP2---------------------
// 1.HTTP/2 - a new version of HTTP released in 2015.
// 2.which addresses some of the performance issues by moving away from a text based protocol to a binary protocol where each byte is clearly defined.
// 3.this is easier to parse for clients and servers, leaves less room for errors and also allows multiplexing
// 4.HTTP/2, like HTTP/1.1, is available over unencrypted (http://) and encrypted (https://) channels but web browsers only support it over HTTPS
// 5.However not all clients support HTTP/2 so you should support HTTP/1.1 over HTTPS and HTTP/2 over HTTPS where possible

//2. Write a blog about objects and its internal representation in Javascript
// java script object is a complex data type .
// for object need to use this "{}" curly brackets or braces
// in object need to represent key and value
// the value in object should be in string data type
// to add the new key in object is [object name.key="value"]
// only we can access the value by using "key"
// can access the object by using dot and bracket notation
// to print obj value is[object name]
// also can access by using for in loop for both key and value
// object is the only easiest method of access the value in java script    






