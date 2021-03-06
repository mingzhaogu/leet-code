// Given a string S of '(' and ')' parentheses, we add the minimum number of parentheses ('(' or ')', and in any positions)
// so that the resulting parentheses string is valid.

// Formally, a parentheses string is valid if and only if:
    // It is the empty string, or
    // It can be written as AB (A concatenated with B), where A and B are valid strings, or
    // It can be written as (A), where A is a valid string.
    // Given a parentheses string, return the minimum number of parentheses we must add to make the resulting string valid.

// Example 1:
    // Input: "())"
    // Output: 1

// Example 2:
    // Input: "((("
    // Output: 3

// Example 3:
    // Input: "()"
    // Output: 0

// Example 4:
    // Input: "()))(("
    // Output: 4

// Note:
    // S.length <= 1000
    // S only consists of '(' and ')' characters.

var minAddToMakeValid = function (S) {
    let openCount = 0;
    let additionalParentheses = 0;

    for (let i = 0; i < S.length; i++) {
        switch (S[i]) {
            case '(':
                openCount++;
                break;
            case ')':
                openCount ? openCount-- : additionalParentheses++;
                break;
            default:
                break;
        }
    }

    return additionalParentheses + openCount;
};

// console.log("Example 1: ", minAddToMakeValid("())"));
// console.log("Example 2: ", minAddToMakeValid("((("));
// console.log("Example 3: ", minAddToMakeValid("()"));
// console.log("Example 4: ", minAddToMakeValid("()))(("));