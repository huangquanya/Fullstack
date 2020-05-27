

function partition(nums, left, right) {
    if(left >= right) return;
    let i = left;
    let j = right;
    let provit = nums[left];
    while(left < right) {
        // left right 值互换
        // 1. 右边扫描
        // 2. 左边扫描
        while(left < right && nums[right] >= provit) right--;
        nums[left] = nums[right];
        while(left < right && nums[left] <= provit) left++;
        nums[right] = nums[left];
    }
    nums[left] = provit;
    // return left;
    partition(nums, i, left -1);
    partition(nums, left+1, j)
}
const arr = [8, 9, 7, -1, 5, 99 , 0, 0]
// partition(arr, 0, arr.length - 1)
// console.log(arr)
const quickSort = function(arr) {
    partition(arr, 0, arr.length - 1);
}
quickSort(arr);
console.log(arr);
// partition(nums, 0, length - 1)
// partition(nums, 0, length/2 - 1)
// partition(nums, length/2 - 1, length - 1)