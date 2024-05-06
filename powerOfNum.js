function powerOfNum(num, power) {
    if (power === 1) return num
  
    return num * powerOfNum(num, power - 1)
  }
  
  console.log(powerOfNum(2, 4))
  