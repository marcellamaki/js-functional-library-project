fi = (function () {
  return {
    //methods go here
    each: function (list, callback, context) {
      callback = callback.bind(context);
      //passes each element to the callback function
      //test if it's an object or an array
      // if it's an array, do a for loop and call the callback on each element with the bind context
      // if it's an object, use a for in loop
      // return the original list

      if (Array.isArray(list)) {
        for (let i = 0; i < list.length; i++) {
          callback(list[i]);
        }
      } else {
        for (var key in list) {
          callback(list[key]);
        }
      } return list;
    },

    map: function (list, callback, context){
      callback = callback.bind(context);
      //making a changed copy
      // each element gets passed to the callback function, and is modified
      // this modified value is added to the the new array (a copy of the original)
      //return the new array
      var newArray = [];
      if (Array.isArray(list)) {
      for (var i = 0; i < list.length; i++) {
        newArray.push(callback(list[i]));
      }
    } else {
      for (var key in list) {
        newArray.push(callback(list[key]));
      }
    } return newArray;
  },

    reduce: function (list, callback, memo, context) {
      callback = callback.bind(context);
      var total;
      // memo is whatever starting value for the function (we pass in as an argument)
      // loops through the list, with the callback being the function that determines what we are doing with each element on the list
      // if no memo value, the first element of the list should be subbed in as the memo value
      // returns memo
      if (memo === 0 || memo) {
        total = memo;
       for (var i = 0; i < list.length; i++) {
         total += callback(memo, list[i], i, list)
       }
     } else {
       var memo = list[0];
       for (var i = 1; i < list.length; i++) {
         total += callback(memo, list[i], i, list)
       }
     } return total;
   },

    find: function(list, callback, context) {
      // callback = callback.bind(context);
      for (var i = 0; i < list.length; i++) {
        if (callback(list[i])) {
          return list[i];
        }
      }
  },

    filter: function(list, callback, context) {
      callback = callback.bind(context);
      var newArray = [];
      for (var i = 0; i < list.length; i++) {
      if (callback(list[i])) {
        newArray.push(list[i]);
      }
    } return newArray;
  },

    sortBy: function(list, callback, context) {
      // callback = callback.bind(context);
      //returns a sorted copy of the list
      if (typeof list[0] !== 'object' || (typeof callback === 'function')){
      var object = {};
      for (var i = 0; i < list.length; i++) {
        object[list[i]] = callback(list[i])
      }
      var sortedValues = Object.values(object).sort(function (a, b) {
                  if (a < b) {
                    return -1;
                  }
                  if (a > b) {
                    return 1;
                  }
                  return 0;
                }
                );
      for (var i = 0; i < sortedValues.length; i++) {
        sortedValues[i]
        debugger
        for (var key in object) {
          if (object[key] === sortedValues[i]) {
            sortedValues[i] = key
          }
        }
      } return sortedValues;
    } else {
      // go through and get all the values based on the param we pass in
      // sort those values into an array
      // map the object where the value is equal to the current value in the array
      var newArray = [];
      for (var i = 0; i < list.length; i++) {
        newArray.push(list[i][callback])
      }
        newArray.sort();
        for (var i = 0; i < newArray.length; i++) {
          newArray[i]
          for (var j = 0; j < list.length; j++) {
            if (list[j][callback] === newArray[i]) {
              newArray[i] = list[j];
            }
          }
        } return newArray;
    }
  },

    size: function(list) {
      if (Array.isArray(list)){
        return list.length;
      } else {
        return Object.keys(list).length;
      }
    },

    first: function(array, n) {
      if (n) {
        var newArray = [];
        for (var i = 0; i < n ; i++) {
          newArray.push(array[i])
        } return newArray;
      } else {
        return array[0];
      }
    },

    last: function(array, n) {
      if (n) {
        var newArray = [];
        for (var i = array.length - n; i < array.length; i++) {
          newArray.push(array[i])
        } return newArray;
      } else {
        return array[array.length - 1];
      }
    },

    compact: function(array) {
      var newArray = [];
      for (var i = 0; i < array.length; i++) {
        if (!!array[i]) {
          newArray.push(array[i])
        }
      } return newArray;
    },

    flatten: function(array, [shallow]) {
      var newArray = [];
      if (shallow) {
        //flatten one level
        for (var i = 0; i < array.length; i++) {
          if (typeof array[i] === 'array') {
            for (var j = 0; j < array[i].length; j++) {
              newArray.push(array[i][j])
            }
          } else {
            newArray.push(array[i]);
          }
        } return newArray;
      }
    },

    uniq: function (array, isSorted, callback) {
      var newArray = [];
      if (callback) {
        for (var i = 0; i < array.length; i++) {
          newArray.push(callback(array[i]));
        }
        newArray = newArray.sort();
      }

      if (!isSorted) {
        newArray = array.sort();
      } else {
        newArray = array;
      }

        var result = [];
        for (var i = 0; i < newArray.length; i++) {
          if (newArray[i] !== newArray[i +1]){
            result.push(newArray[i])
          }
        } return result;
      },

    keys: function (object) {
      var newArray = [];
      for (var key in object) {
        newArray.push(key);
      } return newArray;
    },

    values: function (object) {
      var newArray = [];
      for (var key in object) {
        newArray.push(object[key]);
      } return newArray;
    },

    functions: function (object) {
      var newArray = [];
      for (var key in object) {
        if (typeof object[key] === 'function') {
          newArray.push(key)
        }
      } return newArray;
    }



}})();
