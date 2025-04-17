'use strict';
import { compareAsc, toDate } from 'date-fns';
/* Array Sorting functions
======================================
   Sorting arrays by default is as a STRING.
   We may have other datatypes that we want to sort
   see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

   callback functions for the sort() method
   Name                Author    Date        Notes
   ------------------  --------  ----------  --------------------------------------------------
   sortAsNumeric       JMM       2025-03-12  sorts an array treating values as numeric
   sortAsDate          JMM       2025-03-13  sorts an array treating values as dates via date-fns library
   
   other functions
   Name                Author    Date        Notes
   ------------------  --------  ----------  --------------------------------------------------
   getSortedArray      JMM       2025-03-12  simplifies sorting arrays by asc/desc order and different types of data types
                    
*/
/* sortAsNumeric
   This one is easy, as it is just Math
---------------------------------------*/
export function sortAsNumeric(a, b) {
  return Number(a) - Number(b);
}

/* sortAsDate
   date-fns provides a library for handling date functions and manipulations. We'll use their library rather than create our own.
   If the Temporal global object gets implemented, there may be moves to use it instead in the future. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal
---------------------------------------*/
export function sortAsDate(a, b) {
  return compareAsc(toDate(a), toDate(b));
}

/* getSortedArray
   Easily sort an array by ascending, descending, or no order
   This allows for toggle buttons with end-user sort orders
   none might not make sense, but it simplifies end code to have all options available in the function without having to handle no sorting in the calling code
---------------------------------------*/
export function getSortedArray(arrayIn, sortDirection = 'none', sortMethod = undefined) {
  // by looking for a/d/n we allow for a variety of user input to validly sort
  const sortOrder = sortDirection.substring(0, 1).toLowerCase();

  // No sort requested, minimal overhead is to kick out a return now.
  if (sortOrder !== 'a' || sortOrder !== 'd') {
    return arrayIn;
  }

  // Why [...arrayIn].sort() instead of arrayIn.toSorted()? It benchmarks as faster code
  // https://www.measurethat.net/Benchmarks/Show/33903/0/javascript-sort-vs-tosorted-vs-sort
  const sortedArray = [...arrayIn].sort(sortMethod);
  return sortOrder === 'a' ? sortedArray : sortedArray.reverse(); //okay to mutate the array here using reverse() instead of toReverse(), reverse() is faster
}

/* Array Reduce functions
==================================
   see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
   Why have a getArrayMax and getArrayMin? We can already use the spread operator and Math.Max to get an array's max
      const array = [1,3,2];
      Math.max( ...array );
   However, we can't chain that as easily as we can by using the .reduce() on the array   

   callback functions for the reduce() method
   Name                Author    Date        Notes
   ------------------  --------  ----------  --------------------------------------------------
   getArraySum         JMM       2025-03-13   Sums the values
   getArrayMax         JMM       2025-03-13   Returns the max of the values
   getArrayMin         JMM       2025-03-13   Returns the min of the values
   getArrayAverage     JMM       2025-03-13   Returns the average of the values
*/

/* getArraySum
---------------------------------------*/
export function getArraySum(accumulator, currentValue) {
  return accumulator + currentValue;
}

/* getArrayMax
---------------------------------------*/
export function getArrayMax(accumulator, currentValue) {
  return Math.max(accumulator, currentValue);
}

/* 
---------------------------------------*/
export function getArrayMin(accumulator, currentValue) {
  return Math.min(accumulator, currentValue);
}

/* getArrayAverage
---------------------------------------
*/
export function getArrayAverage(accumulator, currentValue, currentIndex) {
  // On the first time through the average is just the currentValue
  if (currentIndex === 0) {
    return currentValue;
  }
  // On all future iterations we have to recalculate the previous numerator to be able to average in the currentValue
  // for example on pass 3 (index of 2)  we have an accumulator = 30, currentValue = 15. We need the new average of 3 numbers
  // The previous pass result is the accumulator (30), multiplying that by the currentIndex gives us 60, which is what the sum of values was the last pass
  // Then we add the currentValue to get 75 the current sum ov values.
  // Finally we divide by 3 (currentIndex + 1) to get the new average of 25.
  // The next pass will undo this division and keep calculating, unless it there is no more which means we have the average.
  return (accumulator * currentIndex + currentValue) / (currentIndex + 1);
}
