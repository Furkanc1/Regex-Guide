# Title Regex Email Validation Tutorial

Looking for a tutorial on what regex is and how to use it? look no further because here are the answers you seek.

## Summary

Today we will run through what Regex is, and how it is used in terms of validating emails. We'll cover its uses and how to implement it + providing a code snippet for better understanding
P.S. The example used in each section will be the same line of code, reused for clarity and easy maneuverability. 

## Table of Contents

- [Anchors](#anchors)
- [Quantifiers](#quantifiers)
- [Grouping Constructs](#grouping-constructs)
- [Bracket Expressions](#bracket-expressions)
- [Character Classes](#character-classes)
- [The OR Operator](#the-or-operator)
- [Flags](#flags)
- [Character Escapes](#character-escapes)

# Regex Components:

## Anchors
#### Example of Email Validation Regex:
### ^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$

Anchors are used to set a boundary, which determine where the in the input string that the pattern should match.

Broken down:

- Using the " `^` " symbol, we are pinpointing specficially the **START** of the input string.

- Using the " `$` " symbol, we are pinpointing specifically the **END** of the input string

In our case the beggining ( ^ ) is *before the @ symbol* and the ending ( $ ) is *after the @ symbol* .


## Quantifiers
### ^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$

Quantifiers are used when deciding how many characters or " [Groups] " are in a regex pattern.
- Using the " `+` " symbol will essentially means *One or More*
- Using the " `*` " symbol will essentially mean *Zero or More*

In our case, the + before the *@* symbol means that There must be atleast 1 *[group]* or *character* before the @ symbol to be considered a valid Email
**EX:**
"`[\w\]`" This character class or *[group]* matches any word character: letter, digit, or underscore0 **AND**  "`[.-]`" dot, or hyphen.

Otherwise:  (input string not related to Email = " `*` " which will **not** require atleast one character or group)

Conclusion: The regex " ^[\w\.-]+@ " checks for the existence of a valid username which would consist of word-characters, dots, or hyphens ~ followed by the "@" symbol at the beginning of a line.

## Grouping Constructs
### ^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$

In our case, We dont use Grouping when trying to return a valid email adress, however here is an explenation of how it works:

- Grouping is represented by **parenthesis** '(...)' which are essentially container which hold certain parameters. Inside these parenthesis we can insert a token, character, or some input which we are in need of.

**EX:**
( Puppy | Kitty ) chow
- This would return (puppy Chow) and/or (Ktty Chow) . 

## Bracket Expressions
### ^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$

Bracket expressions are important for regex, and specifically Email Validation. We can see how it is being used in the example above.

Bracket Expressions are used to define a set of characters.
**EX's:**
- [eqiou] = Matches with **Vowels**
- [a-z] = Matches with any **Lowercase Letter**
- [A-Z] = Matches with any **Uppercase Letter**
- **LINK FOR MORE REFERENCES**: 
- https://plainenglish.io/blog/regular-expressions-brackets-f2d6f69ffe13 

## Character Classes
Character classes, similar to Bracket Classes are a way to dive deeper into the brackets and represent a certain amount of characters a particular way.

**These are represented by backslashes.**

**EX:**
- \d = (any digit [0-9] )
- \w = [a-zA-Z0-9_] which when broken down means:
- a-z (lowercase letters)
- A-Z (uppercase letters)
- \d (0-9)~~(see above)
- " `_ ` " (underscore value)

Essentially a more efficient way to create Bracket Expressions
## The OR Operator
The OR Operator was seen in the example
-  [Grouping Constructs](#grouping-constructs)

This is represented by the `|` Symbol which means **OR**.

**EX:**
- Cat | Dog = matches Cat OR Dog

## Flags:

Flags in regex are additional parameters that modify how the pattern is matched. Common flags include "i" for case-insensitive matching and "g" for global matching (finding all matches, not just the first one).

**EX:**

- /i
- /g
## Character Escapes

Character escapes are used to match a specific character that has a special meaning in regex. They are represented by a backslash \ followed by the character:

**EX:**

 - "` \.` " when used inside a pattern, matches a literal dot.

## Author:
Furkan C, a fullstack engineer in the making, creating and learning code one line at a time.

## Repository Link:
- https://github.com/Furkanc1

