//dipake di:
//  match()
//  search()
//  replace()
//  split()

CheatSheet = `
    ~~~ Character classes ~~~
    .	        any character except newline
    \w\d\s	    word, digit, whitespace
    \W\D\S	    not word, digit, whitespace
    [abc]	    any of a, b, or c
    [^abc]	    not a, b, or c
    [a-g]	    character between a & g

    ~~~ Anchors ~~~
    ^abc$	    start / end of the string
    \b\B	    word, not-word boundary

    ~~~ Escaped characters ~~~
    \.\*\\	    escaped special characters
    \t\n\r	    tab, linefeed, carriage return

    ~~~ Groups & Lookaround ~~~
    (abc)	    capture group
    \\1	        backreference to group #1 (backslashnya satu)
    (?:abc)	    non-capturing group
    (?=abc)	    positive lookahead
    (?!abc)	    negative lookahead

    ~~~ Quantifiers & Alternation ~~~
    a*a+a?	    0 or more, 1 or more, 0 or 1
    a{5}a{2,}	exactly five, two or more
    a{1,3}	    between one & three
    a+?a{2,}?	match as few as possible
    ab|cd	    match ab or cd
`;
a = `
Edit the Expression & Text to see matches. Roll over matches or the expression for details. 
PCRE & JavaScript flavors of RegEx are supported. Validate your expression with Tests mode.

<p> Hallo bro </p>
<a href="www.sesuatu.com"> Click Me </a> 

`;
//first 6 character each line
b = a.match(/^.{6}/gm); //[ 'Edit t', 'PCRE &', '<p> Ha', '<a hre' ]
// ^ (diawali oleh) . (all char except newLine) sebanyak {6}
b = a.match;
console.log(b);
