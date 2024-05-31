function reverseString(str) {
  function handleReverseStrWithIndex(k, index) {
    if (index < 0) return "" // can be optimized

    return k[index] + handleReverseStrWithIndex(k, index - 1)
  }

 return handleReverseStrWithIndex(str, str.length - 1)
}

const case1 = reverseString('cba')
console.log(case1)

//// DRY RUN ////

// reverseString('cba') = "abc"
// handleReverseStrWithIndex('cba', 2) => "abc"
// k[2] = 'a' + handleReverseStrWithIndex('cba', 1) = bc => "abc"
// k[1] = 'b' + handleReverseStrWithIndex('cba', 0) = c => "bc" 
// k[0] = 'c' + handleReverseStrWithIndex('cba', -1) => "c" 
// ""