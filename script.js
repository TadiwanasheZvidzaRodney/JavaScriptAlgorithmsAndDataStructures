function summation(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
// console.log(summation(2));

function summation(n) {
    return (n * (n + 2)) / 2;
}
// console.log(summation(2));

function fibonacci(n) {
    const fib = [0, 1]
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]
    }
    return fib
}
// console.log(fibonacci(5))

// Big-O = O(n)

function factorial(n) {
    let result = 1
    for (let i = 2; i <= n; i++) {
        result = result * i
    }
    return result
}

// console.log(factorial(0)) // 1
// console.log(factorial(1)) // 1
// console.log(factorial(5)) // 120

function isPrime(n) {
    if (n < 2) {
        return false
    }
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false
        }
    }
    return true
}

// console.log(isPrime(7))

// More Optimal Solution

function isPrime(n) {
    if (n < 2) {
        return false
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false
        }
    }
    return true
}

// console.log(isPrime(5))

function isPowerOfTwo(n) {
    let integer = 0
    for (i = 2; i <= n; i++) {
        if (integer % n != 0) {
            console.log('is not a power of 2')
            integer = integer += n
        }
        if (integer % n == 0 && n == 1) {
            console.log('is a power of 2')
        }
    }
}
//console.log(isPowerOfTwo())❌ //mine!😮‍💨 and the right one below. i wansn't that bad yk

function isPowerOfTwo(n) {
    if (n < 1) {
        return false
    }
    while (n > 1) {
        if (n % 2 !== 0) {
            return false
        }
        n = n / 2
    }
    return true
}
//console.log(isPowerOfTwo(1)) // true
//console.log(isPowerOfTwo(2)) // true
//console.log(isPowerOfTwo(5)) // false

//Big-O = O(logn) // now below is a constant time complexity solution

function isPowerOfTwoBitWise(n) {
    if (n < 1) {
        return false
    }
    return (n & (n - 1)) === 0
}
//console.log(isPowerOfTwo(1)) // true
//console.log(isPowerOfTwo(2)) // true
//console.log(isPowerOfTwo(5)) // false

function recursiveFibonacci(n) {
    if (n < 2) {
        return n
    }
    return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2)
}
//console.log(recursiveFibonacci(5))

function recursiveFactorial(n) {
    if (n === 0) {
        return 1
    }
    return n * recursiveFactorial(n - 1)
}
//console.log(recursiveFactorial(0)) // 1
//console.log(recursiveFactorial(1)) // 1
//console.log(recursiveFactorial(5)) // 120

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i
        }
    }
    return -1
}
//console.log(linearSearch([-5, 20, 10, 4, 6], 20)) // 1
//console.log(linearSearch([-5, 20, 10, 4, 6], 6)) // 4
//console.log(linearSearch([-5, 20, 10, 4, 6], 7)) // -1

function binarySearch(arr, target) {
    let leftIndex = 0
    let rightIndex = arr.length - 1

    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
        if (target === arr[middleIndex]) {
            return middleIndex
        }
        if (target < arr[middleIndex]) {
            rightIndex = middleIndex - 1
        } else {
            leftIndex = middleIndex + 1
        }
    }
    return -1
}
//console.log(binarySearch([-5, 2, 4, 6, 10], 10)) // 4
//console.log(binarySearch([-5, 2, 4, 6, 10], 6)) // 3
//console.log(binarySearch([-5, 2, 4, 6, 10], 20)) // -1

function bubbleSort(arr) {
    let swapped
    do {
        swapped = false
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > (arr[i + 1])) {
                let temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
                swapped = true
            }
        }
    } while (swapped)
}
// const arr = [8, 20, -2, 4, -6]
// bubbleSort(arr) 
//console.log(arr) // [-6, -2, 4, 8, 20]

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let numberToInsert = arr[i]
        let indexOfSortedElement = i - 1
        while (indexOfSortedElement >= 0 && arr[indexOfSortedElement] > numberToInsert) {
            arr[indexOfSortedElement + 1] = arr[indexOfSortedElement]
            indexOfSortedElement = indexOfSortedElement - 1
        }
        arr[indexOfSortedElement + 1] = numberToInsert
    }
}
// const arr = [8, 20, -2, 4, -6]
// insertionSort(arr)
//console.log(arr) // [-6, -2, 4, 8, 20]

function quickSort(arr) {
    if (arr.length < 2) {
        return arr
    }
    let pivot = arr[arr.length - 1]
    let left = []
    let right = []
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}
//const arr = [8, 20, -2, 4, -6]
//console.log(quickSort(arr)) // [-6, -2, 4, 8, 20]

function mergeSort(arr) {
    if (arr.length < 2) {
        return arr
    }
    const mid = Math.floor(arr.length / 2)
    const leftArr = arr.slice(0, mid)
    const rightArr = arr.slice(mid)
    return merge (mergeSort(leftArr), mergeSort(rightArr))
}

function merge(leftArr, rightArr) {
    const sortedArr = []
    while (leftArr.length && rightArr.length) {
        if (leftArr[0] <= rightArr[0]) {
            sortedArr.push(leftArr.shift())
        } else {
            sortedArr.push(rightArr.shift())
        }
    }
    return [...sortedArr, leftArr, ...rightArr]
}
  
//const arr = [8, 20, -2, 4, -6]
//console.log(mergeSort(arr)) // [-6, -2, 4, 8, 20]

// Big-O = O(nlogn) 

function cartesianProduct(arr1, arr2) {
    const result = []
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            result.push([arr1[i], arr2[j]])
        }
    }

    return result
}
//const arr1 = [1, 2]
//const arr2 = [3, 4, 5]
//console.log(cartesianProduct(arr1, arr2))

function climbingStaircase(n) {
    const noOfWays = [1, 2]
    for (let i = 2; i <= n; i++) {
        noOfWays[i] = noOfWays[i - 1] + noOfWays[i - 2]
    }

    return noOfWays[n - 1]
}
//console.log(climbingStaircase(1))
//console.log(climbingStaircase(2))
//console.log(climbingStaircase(3))
//console.log(climbingStaircase(4))
//console.log(climbingStaircase(5))

function towerOfHanoi(n, fromRod, toRod, usingRod) {
    if (n === 1) {
        console.log(`Move disk 1 from ${fromRod} to ${toRod}`)
        return
    } // this our base case
    towerOfHanoi(n-1, fromRod, usingRod, toRod)
    console.log(`Move disk ${n} from ${fromRod} to ${toRod}`)
    towerOfHanoi(n-1, usingRod, toRod, fromRod)
}
towerOfHanoi(3, 'A', 'C', 'B') // shifting rods from A to C using B