let a = [15, 2, 7, 44, 11, 5];

//bubble sort star
// function bubble_Sort(a, n) {
//   let i, j, temp;

//   for (i = 0; i < n; i++) {
//     for (j = 0; j < n - i - 1; j++) {
//       if (a[j] > a[j + 1]) {
//         temp = a[j];
//         a[j] = a[j + 1];
//         a[j + 1] = temp;

//       }

//       }
//     }
//     return a;
// }

// let lent = a.length;
// console.log(lent);

// let x=bubble_Sort(a, lent);

// console.log(x);

//bubble sort end

//Linear  search start

function liner_Search(A, n, x) {
  let i;

  for (i = 0; i < n; i++) {
    if (A[i] == x) {
      return i;
    }
  }
  i = -1;
  return i;
}

let n = a.length;

let liner_Data = liner_Search(a, n, 2);
console.log(liner_Data);

//Linear  search end

//Linear  search Start
let arr = [1, 2, 3, 5, 6, 7, 8, 33, 44, 55, 66, 77];

function binary_Search(arr, x) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] == x) {
      return mid;
    } else if (arr[mid] < x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

let binary_Data = binary_Search(arr, 33);
console.log(binary_Data);

//Binary  search end 

//   Slecttion sort start 

let arr2=[5,9,99,33,7,2,1]

function slection_sort(arr2,n){
  let min,temp,i,j;

  for(i=0;i<n-1;i++){
    min=i;
    for(j=i+1;j<n;j++){
      if(arr2[j]<arr2[min]){
        min=j
        console.log('j value',arr2[j]);
        
      }
    }

    if(min != i){
      temp=arr2[i];
      console.log('temp' ,arr2[i])      
      arr2[i]=arr2[min];
      console.log('min', arr2[i]);      

      arr2[min]=temp
    }
  }
  
return arr2
}

let len= arr2.length;

let selection_data = slection_sort(arr2,len)
console.log(selection_data);




//   Slecttion sort End





