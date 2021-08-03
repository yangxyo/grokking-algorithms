/*
 *  二分查找
 *  param 递增的数组, 要查找的元素
 *  return index 或 null
 */
function binarySearch(list, item) {
  let low = 0
  let high = list.length - 1
  while (low <= high) {
    mid = Math.floor((low + high) / 2)
    guess = list[mid]
    if (item === guess) {
      return mid
    } else if (item < guess) {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }
  return null
}

// 练习
// 1.1 假设有一个包含128个名字的有序列表，你要使用二分查找在其中查找一个名字，请问最多需要几步才能找到？
// log128  7 步
// 1.2 上述的列表长度翻倍，最多需要多少步？
// 8 步
// 使用大O表示法给出下述各种情形的运行时间。
// 1.3 在电话簿中根据名字查找电话号码。
// logn
// 1.4 　在电话簿中根据电话号码找人。（提示：你必须查找整个电话簿。）
// n
// 阅读电话簿中每个人的电话号码。
// n
// 阅读电话簿中姓名以 A 打头的人的电话号码。这个问题比较棘手，它涉及第4章的概念。答案可能让你感到惊讶！
// n
