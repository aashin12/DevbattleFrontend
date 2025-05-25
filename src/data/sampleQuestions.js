
export const sampleQuestions = {
  Arrays: [
    {
      id: 1,
      title: "Two Sum",
      difficulty: "Easy",
      description:
        `Given an array of integers and a target value, your task is to identify two distinct indices in the array such that the elements at those indices add up exactly to the target. You may assume that there will always be exactly one valid solution, and you must return the indices of the two numbers in the form of a list or array.

The order of indices in the result does not matter. Indices should be 0-based.

📥 Input Format:
A single line of inputs
The first input will be an integer n, the size of the array.
The second input will contain n integers, representing the array elements.
The third input will be an integer target, which is the required sum.

📤 Output Format:
Return the two indices (in any order) as an array or list. For example: [0, 1]

🔒 Constraints:
2 <= n <= 10^5
-10^9 <= arr[i] <= 10^9
It is guaranteed that exactly one valid pair exists.

🧪 Example 1:

Input:
6 2 7 11 15 4 9 9

Output:
[0, 1]

Explanation:
arr[0] + arr[1] = 2 + 7 = 9

🧪 Example 2:

Input:
3 3 2 4 6

Output:
[1, 2]

Explanation:
arr[1] + arr[2] = 2 + 4 = 6`,
      testCases: [
        {
          input: "2 3 3 6",
          expected: "[0,1]"
        },
        {
          input: "3 3 2 4 6",
          expected: "[1,2]"
        },
        {
          input: "6 2 7 11 15 4 9 9",
          expected: "[0,1]"
        }
      ]

    },
    {
      id: 2,
      title: "Maximum Subarray Sum",
      difficulty: "Medium",
      description:
        `Given an array of integers, find the contiguous subarray (containing at least one number) which has the largest sum, and return the sum.

You need to find the subarray (i.e., a sequence of consecutive elements from the array) that produces the maximum sum among all possible subarrays.

This is a classic problem that can be efficiently solved using Kadane’s Algorithm.

📥 Input Format:
The first line contains an integer n, the number of elements in the array.
The second line contains n space-separated integers, representing the elements of the array.

📤 Output Format:
A single integer representing the maximum sum of a contiguous subarray.

🔒 Constraints:
1 <= n <= 10^5
-10^4 <= arr[i] <= 10^4

🧪 Example 1:

Input: 9 -2 1 -3 4 -1 2 1 -5 4

Output: 6

Explanation:
The subarray with the maximum sum is [4, -1, 2, 1], which adds up to 6.

🧪 Example 2:

Input: 5 1 2 3 4 5

Output: 15

Explanation:
The entire array is the subarray with the maximum sum.

🧪 Example 3:

Input: 5 -1 -2 -3 -4 -5

Output: -1

Explanation:
All elements are negative, so the maximum subarray is just [-1].`,

      testCases: [
        {
          input: "5 -1 -2 -3 -4 -5",
          expected: "-1"
        },
        {
          input: "5 1 2 3 4 5",
          expected: "15"
        },
        {
          input: "9 -2 1 -3 4 -1 2 1 -5 4",
          expected: "6"
        }
      ]
    },
    {
      id: 3,
      title: "Find the Minimum Number in an Array",
      difficulty: "Medium",
      description: `You are given an array of integers. Your task is to find and return the minimum element in the array.

The array can include positive, negative, and zero values. This is a basic problem for practicing array iteration and comparison operations.

📥 Input:
A single line of space-separated integers.
The first integer n represents the number of elements in the array.
The next n integers are the elements of the array.

📤 Output:
A single integer, the minimum number in the array.

🔍 Constraints:
1 ≤ n ≤ 10^5
-10^6 ≤ arr[i] ≤ 10^6

🧪 Example 1:

Input: 5 4 2 -8 1 3

Explanation:
The array is [4, 2, -8, 1, 3]
The minimum number is -8

Output: -8

🧪 Example 2:

Input: 4 10 5 12 8

Explanation:
The array is [10, 5, 12, 8]
The minimum number is 5

Output:5
`,
      testCases: [
        {
          input: "5 1 3 6 2 9",
          expected: "1"
        },
        {
          input: "4 3 2 7 8",
          expected: "2"
        },
        {
          input: "6 2 1 8 0 3 4",
          expected: "0"
        }
      ]
    },
    {
      id: 4,
      title: "Calculate the Sum of Elements in an Array",
      difficulty: "Easy",
      description: `Given an array of integers, your task is to find the sum of all elements in the array.
This is a simple problem that helps build confidence in reading input and performing accumulative operations using arrays.

📥 Input:
A single line of space-separated integers.
The first integer n is the number of elements in the array.
The next n integers represent the elements of the array.

📤 Output:
A single integer, the total sum of all array elements.

🔍 Constraints:
1 ≤ n ≤ 10^5
-10^6 ≤ arr[i] ≤ 10^6

🧪 Example 1:

Input: 4 1 2 3 4

Explanation:
Array = [1, 2, 3, 4]
Sum = 1 + 2 + 3 + 4 = 10

Output: 10

🧪 Example 2:

Input: 3 -2 -1 6

Explanation:
Array = [-2, -1, 6]
Sum = 3

Output: 3`,
      testCases: [
        {
          input: "4 2 3 4 5",
          expected: "14"
        },
        {
          input: "5 3 2 7 1 2",
          expected: "15"
        },
        {
          input: "6 5 4 3 0 2 7",
          expected: "21"
        }
      ]

    },
    {
      id: 5,
      title: "Count Even and Odd Numbers in an Array",
      difficulty: "Medium",
      description: `You are given an array of integers. Write a program that counts how many even numbers and how many odd numbers exist in the array.
This is a good practice problem for using conditionals and counters in array traversal.

📥 Input:
A single line of space-separated integers.
The first integer n represents the number of elements in the array.
The next n integers represent the array elements.

📤 Output:
Two integers separated by a space: the count of even numbers followed by the count of odd numbers.

🔍 Constraints:
1 ≤ n ≤ 10^5
-10^6 ≤ arr[i] ≤ 10^6

🧪 Example 1:

Input: 5 1 2 3 4 5

Explanation:
Array = [1, 2, 3, 4, 5]
Even numbers = 2, 4 → Count = 2
Odd numbers = 1, 3, 5 → Count = 3

Output: 2 3

🧪 Example 2:

Input: 4 6 8 10 12

Explanation:
All numbers are even → Count = 4
Odd Count = 0

Output: 4 0`,
      testCases: [
        {
          input: "5 2 3 2 1 4",
          expected: "3 2"
        },
        {
          input: "4 3 2 7 1",
          expected: "1 3"
        },
        {
          input: "6 5 4 3 0 1 7",
          expected: "2 4"
        }
      ]
    },

    // Add more array questions here
  ],
  Strings: [
    {
      id: 1,
      title: "Check for Palindrome",
      difficulty: "Medium",
      description: `🧠 Problem Statement:

A palindrome is a string that reads the same forward and backward. Your task is to determine whether a given string is a palindrome. This problem tests your understanding of string manipulation and basic condition checking.
You should ignore casing and assume that the input will not contain spaces or special characters.

📥 Input Format:
A single line containing the string s.

📤 Output Format:
Print "True" if the string is a palindrome, otherwise print "False".

🧪 Example 1:

Input:
madam

Output:
True

🧪 Example 2:

Input:
hello

Output:
False`,
      testCases: [
        {
          input: "madam",
          expected: "true"
        },
        {
          input: "Hello",
          expected: "false"
        },
        {
          input: "eye",
          expected: "true"
        }
      ]

    },
    {
      id: 2,
      title: "Count Vowels and Consonants",
      difficulty: "Easy",
      description: `🧠 Problem Statement:

In this task, you're given a lowercase English word. Your job is to count how many vowels and how many consonants it contains. Vowels are 'a', 'e', 'i', 'o', 'u', and all other alphabets are consonants.
This exercise will strengthen your ability to loop through characters and make logical decisions.

📥 Input Format:
A single string s (all lowercase).

📤 Output Format:
Print two space-separated integers: the number of vowels and the number of consonants.

🧪 Example 1:

Input:
education

Output:
5 4

🧪 Example 2:

Input:
bottle

Output:
2 4`,
      testCases: [
        {
          input: "education",
          expected: "5 4"
        },
        {
          input: "bottle",
          expected: "2 4"
        },
        {
          input: "rhythm",
          expected: "0 6"
        }
      ]

    },
    {
      id: 3,
      title: "Reverse Each Word in a Sentence",
      difficulty: "Easy",
      description: `🧠 Problem Statement:

 You are given a sentence consisting of multiple words separated by spaces. Your task is to reverse each individual word in place, while keeping the order of the words unchanged.
This problem helps practice string splitting, manipulation, and reassembly.

📥 Input Format:
A single line containing a string s (a sentence with one or more words separated by spaces).

📤 Output Format:
Return the sentence with each word reversed, separated by a single space.

🧪 Example 1:

Input:
hello world

Output:
olleh dlrow

🧪 Example 2:

Input:
my name is aashin

Output:
ym eman si nihsaa
`,
      testCases: [
        {
          input: "hello world",
          expected: "olleh dlrow"
        },
        {
          input: "my name is aashin",
          expected: "ym eman si nihsaa"
        },
        {
          input: "welcome to programming",
          expected: "emoclew ot gnimmargorp"
        }
      ]
    },
    {
      id: 4,
      title: "Anagram Check",
      difficulty: "Medium",
      description: `🧠 Problem Statement:

Two strings are considered anagrams if they contain the same characters in the same frequencies but possibly in different orders. Write a program that checks whether two input strings are anagrams of each other.
You must compare the frequency of characters to determine equality.

📥 Input Format:
Two strings s1 and s2, entered on two separate lines.

📤 Output Format:
Print "True" if they are anagrams, otherwise print "False".

🧪 Example 1:

Input:
listen
silent

Output:
True

🧪 Example 2:

Input:
school
shoot

Output:
False`,
      testCases: [
        {
          input: "listen\nsilent",
          expected: "true"
        },
        {
          input: "school\nshoot",
          expected: "false"
        },
        {
          input: "spar\nrasp",
          expected: "true"
        }
      ]
    },
    {
      id: 5,
      title: " Find the Most Frequent Character",
      difficulty: "Easy",
      description: `🧠 Problem Statement:

Given a string, determine which character appears most frequently. If multiple characters have the same maximum frequency, return the alphabetically first one.
This problem enhances your ability to count character frequencies and handle ties using basic sorting or conditional logic.

📥 Input Format:
A single string s.

📤 Output Format:
Print the character that appears most frequently in the string.

🧪 Example 1:

Input:
teststring

Output:
t

🧪 Example 2:

Input:
aabbccdd

Output:
a`,
      testCases: [
        {
          input: "teststring",
          expected: "t"
        },
        {
          input: "aabbccdd",
          expected: "a"
        },
        {
          input: "eye",
          expected: "e"
        }
      ]
    },

    // Add questions here
  ],
  LinkedLists: [
    {
      id: 1,
      title: "Find the Length of a Linked List",
      difficulty: "Easy",
      description: `🧠 Problem Statement:

You are given a singly linked list. Your task is to determine its length — i.e., the number of nodes in the list.

📥 Input Format:
The linked list is provided as space-separated integers. The end of the list is represented by -1 (sentinel value). You must not count -1.

📤 Output Format:
Print a single integer — the number of nodes in the list.

🧪 Example 1:

Input:
1 2 3 4 5 -1

Output:
5

🧪 Example 2:

Input:
10 20 -1

Output:
2`,
      testCases: [
        {
          input: "1 2 3 4 5 -1",
          expected: "5"
        },
        {
          input: "10 20 -1",
          expected: "2"
        },
        {
          input: "-1",
          expected: "0"
        }
      ]

    },
    {
      id: 2,
      title: " Search in a Linked List",
      difficulty: "Easy",
      description: `🧠 Problem Statement:

Given a singly linked list and a target value, check whether the value exists in the list.

📥 Input Format:
- First line: Linked list as space-separated integers, ending with -1.
- Second line: Target value to search.

📤 Output Format:
Print "true" if the value is found, otherwise "false".

🧪 Example 1:

Input:
1 2 3 4 5 -1
4

Output:
true

🧪 Example 2:

Input:
5 10 15 20 -1
6

Output:
false`,

      testCases: [
        {
          input: "1 2 3 4 5 -1\n4",
          expected: "true"
        },
        {
          input: "5 10 15 20 -1\n6",
          expected: "false"
        },
        {
          input: "-1\n10",
          expected: "false"
        }
      ]
    },
    {
      id: 3,
      title: "Reverse a Linked List",
      difficulty: "Medium",
      description: `🧠 Problem Statement:

You are given a singly linked list. Your task is to reverse the list and print the elements in the new order.

📥 Input Format:
A single line of space-separated integers ending with -1.

📤 Output Format:
Print the reversed linked list as space-separated integers.

🧪 Example 1:

Input:
1 2 3 4 5 -1

Output:
5 4 3 2 1

🧪 Example 2:

Input:
10 20 -1

Output:
20 10`,

      testCases: [
        {
          input: "1 2 3 4 5 -1",
          expected: "5 4 3 2 1"
        },
        {
          input: "10 20 -1",
          expected: "20 10"
        },
        {
          input: "-1",
          expected: ""
        }
      ]
    },
    {
      id: 4,
      title: "Detect Loop in a Linked List ",
      difficulty: "Hard",
      description: `🧠 Problem Statement:

You are given a representation of a linked list with nodes and next pointers. Some pointers might form a cycle (loop). Your task is to determine if a loop exists in the list.

📥 Input Format:
You are given space-separated integers ending with -1. After that, you are given the position (0-based index) of the node to which the last node should point. If there's no loop, input -1.

📤 Output Format:
Print "true" if a cycle is present, otherwise "false".

🧪 Example 1:

Input:
1 2 3 4 5 -1
2

Output:
true

🧪 Example 2:

Input:
1 2 3 4 5 -1
-1

Output:
false`,

      testCases: [
        {
          input: "1 2 3 4 5 -1\n2",
          expected: "true"
        },
        {
          input: "1 2 3 4 5 -1\n-1",
          expected: "false"
        },
        {
          input: "-1\n-1",
          expected: "false"
        }
      ]
    },
    {
      id: 5,
      title: "Find the Maximum Element in a Linked List",
      difficulty: "Easy",
      description: `🧠 Problem Statement:

You are given a singly linked list. Your task is to find and return the maximum element in the list.

📥 Input Format:
The linked list is provided as space-separated integers. The end of the list is represented by -1 (sentinel value). You must not count -1.

📤 Output Format:
Print a single integer — the maximum value in the list.

🧪 Example 1:

Input:
1 2 3 4 5 -1

Output:
5

🧪 Example 2:

Input:
10 30 20 -1

Output:
30
`,

      testCases: [
        { input: "1 2 3 4 5 -1", expected: "5" },
        { input: "10 30 20 -1", expected: "30" },
        { input: "100 50 75 -1", expected: "100" }
      ]
    },

  ],
  Stacks_Queues: [
    {
id: 1,
title: "Implement Stack Using Array",
difficulty: "Easy",
description: `🧠 Problem Statement:
      
Your task is to implement a stack using an array. Perform the following operations:
 - "push x": Push integer x onto the stack.
 - "pop": Remove and print the top element of the stack. If the stack is empty, print "Stack is empty".
      
 📥 Input Format:
 A series of space-separated operations ending with the word "end".
      
 📤 Output Format:
 Print output of each "pop" operation on a new line.
      
 🧪 Example 1:
      
 Input:
 push 1 push 2 push 3 pop pop pop pop end
      
 Output:
  3
  2
  1
  Stack is empty`,
      testCases: [
        { input: "push 1 push 2 pop pop end", expected: "2\n1" },
        { input: "push 5 push 10 pop pop pop end", expected: "10\n5\nStack is empty" },
        { input: "pop end", expected: "Stack is empty" }
      ]


    },
    {
      id: 2,
      title: "Reverse a String Using Stack",
      difficulty: "Easy",
      description: `🧠 Problem Statement:

Given a string, use a stack to reverse the string and print it.

📥 Input Format:
A single line string (no spaces).

📤 Output Format:
Print the reversed string.

🧪 Example 1:

Input:
hello

Output:
olleh

🧪 Example 2:

Input:
stack

Output:
kcats`,
      testCases: [
        { input: "hello", expected: "olleh" },
        { input: "stack", expected: "kcats" },
        { input: "a", expected: "a" }
      ]


    },
    {
      id: 3,
      title: "Check Balanced Parentheses",
      difficulty: "Easy",
      description: `🧠 Problem Statement:

Given a string containing only parentheses characters (i.e., '()', '{}', '[]'), check if the parentheses are balanced.

📥 Input Format:
A single line string.

📤 Output Format:
Print "Balanced" or "Not Balanced".

🧪 Example 1:

Input:
([])

Output:
Balanced

🧪 Example 2:

Input:
([)]

Output:
Not Balanced`,
      testCases: [
        { input: "([])", expected: "Balanced" },
        { input: "((()))", expected: "Balanced" },
        { input: "([)]", expected: "Not Balanced" }
      ]


    },
    {
      id: 4,
      title: "Implement Queue Using Array",
      difficulty: "Easy",
      description: `🧠 Problem Statement:

Your task is to implement a queue using an array. Perform the following operations:
- "enqueue x": Add integer x to the queue.
- "dequeue": Remove and print the front element of the queue. If the queue is empty, print "Queue is empty".

📥 Input Format:
A series of space-separated operations ending with the word "end".

📤 Output Format:
Print output of each "dequeue" operation on a new line.

🧪 Example 1:

Input:
enqueue 1 enqueue 2 enqueue 3 dequeue dequeue dequeue dequeue end

Output:
1
2
3
Queue is empty`,
      testCases: [
        { input: "enqueue 5 enqueue 10 dequeue dequeue dequeue end", expected: "5\n10\nQueue is empty" },
        { input: "dequeue end", expected: "Queue is empty" },
        { input: "enqueue 1 dequeue end", expected: "1" }
      ]


    },
    {
      id: 5,
      title: "First Non-Repeating Character in Stream",
      difficulty: "Medium",
      description: `🧠 Problem Statement:
      
      You are given a stream of lowercase characters. For each character added, print the first non-repeating character so far. If none exists, print -1.
      
      📥 Input Format:
      A single line string of lowercase letters (no spaces).
      
      📤 Output Format:
      A space-separated string of outputs after each character.
      
      🧪 Example 1:
      
      Input:
      aabc
      
      Output:
      a a b b
      
      🧪 Example 2:
      
      Input:
      abcabc
      
      Output:
      a a a b b b`,
      testCases: [
        { input: "aabc", expected: "a -1 b b" },
        { input: "abcabc", expected: "a a a b c -1" },
        { input: "aabbcc", expected: "a -1 b -1 c -1" }
      ]

    },
  ],
  Searching_Sorting: [
    {
      id: 1,
      title: "Linear Search in an Array",
      difficulty: "Easy",
      description: `🧠 Problem Statement:
    
    Given an array of integers and a target value, use linear search to find the index of the target. If the target is not found, return -1.
    
    📥 Input Format:
    First line contains space-separated integers ending with -1 (the array).
    Second line contains the target integer.
    
    📤 Output Format:
    Print the index (0-based) of the target value, or -1 if not found.
    
    🧪 Example 1:
    
    Input:
    5 3 9 1 4 -1
    9
    
    Output:
    2
    
    🧪 Example 2:
    
    Input:
    2 4 6 8 10 -1
    7
    
    Output:
    -1`,
      testCases: [
        { input: "5 3 9 1 4 -1\n9", expected: "2" },
        { input: "2 4 6 8 10 -1\n7", expected: "-1" },
        { input: "1 2 3 -1\n2", expected: "1" }
      ]
    }
    ,
    {
      id: 2,
      title: "Binary Search in a Sorted Array",
      difficulty: "Easy",
      description: `🧠 Problem Statement:
    
    You are given a sorted array and a target element. Use binary search to find and print the index of the target, or -1 if it's not present.
    
    📥 Input Format:
    First line: Sorted integers in ascending order ending with -1.
    Second line: Target value to search for.
    
    📤 Output Format:
    Print the index (0-based) or -1.
    
    🧪 Example 1:
    
    Input:
    1 3 5 7 9 -1
    5
    
    Output:
    2
    
    🧪 Example 2:
    
    Input:
    1 2 4 6 8 -1
    3
    
    Output:
    -1`,
      testCases: [
        { input: "1 3 5 7 9 -1\n5", expected: "2" },
        { input: "1 2 4 6 8 -1\n3", expected: "-1" },
        { input: "10 20 30 40 -1\n10", expected: "0" }
      ]
    }
    ,
    {
      id: 3,
      title: "Count Frequencies of Elements",
      difficulty: "Easy",
      description: `🧠 Problem Statement:
    
    Given a list of integers, count the frequency of each element and print them in ascending order of element values.
    
    📥 Input Format:
    Single line of space-separated integers ending with -1.
    
    📤 Output Format:
    Each line should contain "<element>: <frequency>" in ascending order of elements.
    
    🧪 Example 1:
    
    Input:
    1 2 2 3 1 4 -1
    
    Output:
    1: 2
    2: 2
    3: 1
    4: 1`,
      testCases: [
        { input: "1 2 2 3 1 4 -1", expected: "1: 2\n2: 2\n3: 1\n4: 1" },
        { input: "5 5 5 -1", expected: "5: 3" },
        { input: "2 1 2 3 3 -1", expected: "1: 1\n2: 2\n3: 2" }
      ]
    }
    ,
    {
      id: 4,
      title: "Sort an Array in Ascending Order",
      difficulty: "Easy",
      description: `🧠 Problem Statement:
    
    Given an array of integers, sort them in ascending order.
    
    📥 Input Format:
    Single line of space-separated integers ending with -1.
    
    📤 Output Format:
    Sorted elements in one line, separated by space.
    
    🧪 Example 1:
    
    Input:
    5 2 9 1 -1
    
    Output:
    1 2 5 9`,
      testCases: [
        { input: "5 2 9 1 -1", expected: "1 2 5 9" },
        { input: "10 5 0 -1", expected: "0 5 10" },
        { input: "3 3 3 -1", expected: "3 3 3" }
      ]
    }
    ,
    {
      id: 5,
      title: "Find the Largest Element",
      difficulty: "Easy",
      description: `🧠 Problem Statement:
    
    Given an array of integers, find and print the largest element.
    
    📥 Input Format:
    Single line of space-separated integers ending with -1.
    
    📤 Output Format:
    Print the largest number in the array.
    
    🧪 Example 1:
    
    Input:
    4 1 9 3 -1
    
    Output:
    9
    
    🧪 Example 2:
    
    Input:
    7 7 7 -1
    
    Output:
    7`,
      testCases: [
        { input: "4 1 9 3 -1", expected: "9" },
        { input: "7 7 7 -1", expected: "7" },
        { input: "10 20 5 6 -1", expected: "20" }
      ]
    }
    ,
  ],
  HashMaps: [
    {
      id: 1,
      title: "Check for Duplicate Elements",
      difficulty: "Easy",
      description: `🧠 Problem Statement:
    
    Given an array of integers, check whether it contains any duplicate elements.
    
    📥 Input Format:
    A line of space-separated integers ending with -1.
    
    📤 Output Format:
    Print "Yes" if duplicates exist, otherwise "No".
    
    🧪 Example 1:
    
    Input:
    1 2 3 4 5 -1
    
    Output:
    No
    
    🧪 Example 2:
    
    Input:
    1 2 3 2 5 -1
    
    Output:
    Yes`,
      testCases: [
        { input: "1 2 3 4 5 -1", expected: "No" },
        { input: "1 2 3 2 5 -1", expected: "Yes" },
        { input: "7 7 7 7 -1", expected: "Yes" }
      ]
    }
    ,
    {
      id: 2,
      title: "Frequency of a Given Element",
      difficulty: "Easy",
      description: `🧠 Problem Statement:
    
    Given a list of integers and a target element, determine how many times the target appears.
    
    📥 Input Format:
    First line: space-separated integers ending with -1.
    Second line: the target element.
    
    📤 Output Format:
    Print the frequency count of the target element.
    
    🧪 Example 1:
    
    Input:
    1 2 2 3 4 -1
    2
    
    Output:
    2
    
    🧪 Example 2:
    
    Input:
    5 5 5 5 -1
    5
    
    Output:
    4`,
      testCases: [
        { input: "1 2 2 3 4 -1\n2", expected: "2" },
        { input: "5 5 5 5 -1\n5", expected: "4" },
        { input: "1 3 5 7 -1\n2", expected: "0" }
      ]
    }
    ,
    {
      id: 3,
      title: "First Non-Repeating Element",
      difficulty: "Medium",
      description: `🧠 Problem Statement:
    
    Given a list of integers, print the first element that occurs only once. If all are repeating, print -1.
    
    📥 Input Format:
    Single line of space-separated integers ending with -1.
    
    📤 Output Format:
    Print the first non-repeating integer or -1.
    
    🧪 Example 1:
    
    Input:
    1 2 2 3 1 4 -1
    
    Output:
    3
    
    🧪 Example 2:
    
    Input:
    5 5 6 6 -1
    
    Output:
    -1`,
      testCases: [
        { input: "1 2 2 3 1 4 -1", expected: "3" },
        { input: "5 5 6 6 -1", expected: "-1" },
        { input: "9 8 9 7 -1", expected: "8" }
      ]
    }
    ,
    {
      id: 4,
      title: "Most Frequent Element",
      difficulty: "Easy",
      description: `🧠 Problem Statement:
    
    Given an array of integers, find the element that appears most frequently. If there are multiple, return any one of them.
    
    📥 Input Format:
    A single line of space-separated integers ending with -1.
    
    📤 Output Format:
    Print the most frequent element.
    
    🧪 Example 1:
    
    Input:
    1 2 2 3 1 2 -1
    
    Output:
    2
    
    🧪 Example 2:
    
    Input:
    5 5 6 6 6 -1
    
    Output:
    6`,
      testCases: [
        { input: "1 2 2 3 1 2 -1", expected: "2" },
        { input: "5 5 6 6 6 -1", expected: "6" },
        { input: "9 8 7 9 8 9 -1", expected: "9" }
      ]
    }
    ,
    {
      id: 5,
      title: "Are Two Arrays Anagrams?",
      difficulty: "Medium",
      description: `🧠 Problem Statement:
    
    You are given two arrays. Check whether one is an anagram of the other (i.e., same elements with the same frequencies, regardless of order).
    
    📥 Input Format:
    First line: space-separated integers ending with -1.
    Second line: another array ending with -1.
    
    📤 Output Format:
    Print "Yes" if they are anagrams, otherwise "No".
    
    🧪 Example 1:
    
    Input:
    1 2 3 4 -1
    4 3 2 1 -1
    
    Output:
    Yes
    
    🧪 Example 2:
    
    Input:
    1 2 3 -1
    1 2 2 -1
    
    Output:
    No`,
      testCases: [
        { input: "1 2 3 4 -1\n4 3 2 1 -1", expected: "Yes" },
        { input: "1 2 3 -1\n1 2 2 -1", expected: "No" },
        { input: "5 5 6 -1\n6 5 5 -1", expected: "Yes" }
      ]
    }
    ,
  ]
  // Add other categories similarly
};