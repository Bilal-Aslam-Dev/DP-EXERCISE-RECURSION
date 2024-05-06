const arr = [0, 4, 3, 4, 1]

function logEveryItemInArray(array) {
  function logItem(index) {
    if (index === array.length) return

    console.log(array[index])

    logItem(index + 1)
  }

  logItem(0)
}

logEveryItemInArray(arr)
