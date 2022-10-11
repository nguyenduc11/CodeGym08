function lastIndexOf(arr, elt, start) {
  for (let i = start - 1; i >= 0; i--) {
    if (arr[i] === elt) {
      return i;
    }
    return -1;
  }
}
