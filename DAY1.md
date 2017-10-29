# DAY1
## 2017/10/29
### #1. 배열과 리스트 비교
- 배열
  - 읽기 : O(1)
  - 삽입 : O(n)
  - 삭제 : O(n)
- 리스트
  - 읽기 : O(n)
  - 삽입 : O(1)
  - 삭제 : O(1)
- 자료에 접근하는 방식은 두가지가 있다.
  1. 임의접근 (배열)
  2. 순차접근 (리스트)
- **배열은 임의접근에 좋고, 리스트는 삽입과 삭제에 좋다!**

### #2. 선택정렬
```javascript
var findSmallest = function(arr) {
  var smallest = arr[0];
  var smallest_index = 0;
  for(i = 0;i < arr.length; i++) {
    if(arr[i] < smallest) {
      smallest = arr[i];
      smallest_index = i;
    }
  }
  return smallest_index;
};
var selectionSort = function(arr) {
  newArr = [];
  for(i = 0;i < arr.length; i++) {
    var smallest = findSmallest(arr);
    newArr.append(arr.pop(smallest));
  }
  return newArr;
};
````
### #3. 재귀
- 3-1. 재귀함수.
  - 기본단계와 재귀단계로 나누어진다.
  - 기본단계 : 함수가 자기자신을 다시 호출하지 않는 경우에 대한 부분
  - 재귀단계 : 자기자신을 호출하는 부분

    Ex)
    ```javascript
    var countDown = function(i) {
      console.log(i);
      if(i <= 1) {      //기본단계
        return;
      } else {
        countDown(i-1); //재귀단계
      }
    };
    ```
- 3-2. 스택(Stack) **재귀에서 특히 중요!**
  - 호출스택
    - 특징 : 편리하지만, 메모리를 많이 소모한다.
### #4. 퀵 정렬
- 4-1. 분할정복 : 정해둔 '기본단계'가 나올 떄까지 재귀하는 것.
