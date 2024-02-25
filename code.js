function quicksort(arr) {
    if (arr.length < 2) return arr;

    let p = pivot(arr, 0, arr.length-1);
    let [lo, hi, leftFlag, rightFlag] = flags(p, 0, arr.length-1);

    while (lo < hi) {
        if (leftFlag && rightFlag) {
            let leftHi = p-1, rightLo = p+1;
            let leftP = pivot(arr, lo, leftHi);
            let rightP = pivot(arr, rightLo, hi);

            [lo, hi, leftFlag, rightFlag] = flags(leftP, lo, hi);
            [lo, hi, leftFlag, rightFlag] = flags(rightP, lo, hi);
        }
        else if (rightFlag) {
            p = pivot(arr, lo, hi);
            [lo, hi, leftFlag, rightFlag] = flags(p, lo, hi);
        }
        else {
            p = pivot(arr, lo, hi);
            [lo, hi, leftFlag, rightFlag] = flags(p, lo, hi);
        }
    }
    return arr;
}

function pivot(arr, lo, hi) {
    let p = lo;
    for (let i = lo + 1; i <= hi; i++) 
        if (arr[i] < arr[lo]) {
            ++p; 
            [arr[p], arr[i]] = [arr[i], arr[p]];
        } 
    [arr[lo], arr[p]] = [arr[p], arr[lo]];
    return p;
}

function flags(p, lo, hi) {
    let leftFlag, rightFlag;
    (p == hi) ? (hi--, rightFlag = false) : rightFlag = true;
    (p == lo) ? (lo++, leftFlag = false) : leftFlag = true;
    return [lo, hi, leftFlag, rightFlag];
}
