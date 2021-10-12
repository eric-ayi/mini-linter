const _ = {
  clamp(number, lower, upper){
    let lowerClampedValue = Math.max(number, lower)
    let clampedValue = Math.min(lowerClampedValue, upper)
    return clampedValue;
  },
  inRange(num,start,end){
    if (end === undefined){
      end = start
      start = 0
    }
      if (start > end){
        let temp = start;
        start = end;
        end = temp;
      }
    var isInRange = start <= num && num < end;
          return isInRange;
    }, 
    words(string){
      return string.split(' ');
    },
    pad(string,length){
      if (length > string.length){
        let padAmtStart = Math.floor((length - string.length)/2);
        let padAmtEnd = length - padAmtStart - string.length;
        return (' '.repeat(padAmtStart) + string + ' '.repeat(padAmtEnd));

      }else {
        return string;
      }
    },
    has(object, key){
      let hasValue = object[key];
      if(hasValue !== undefined){
        return true;
      }return false;
    },
    invert(object){
      const invertedObject = { };
      for (key in object){
        let temp = key;
        key = object[key];
        object[key] = temp;
        invertedObject[key]=object[key];
      }
      return invertedObject;
    },
    findKey(object, checkValue){
      for (key in object){
        let objKey = object[key];
        let returnValue = checkValue(objKey);
        if (returnValue){
          return key;
        } 
    }
    undefined;
    return undefined;
    },
    drop(arr,number){
      if (number === undefined){
        let newArr = arr.slice(1);
        return newArr;
      }else{
        let newArr = arr.slice(number);
        return newArr;
      }
    },
    dropWhile(arr, predicate){
      const cb = (element, index) => {
        return !predicate(element, index,arr);
      };
      let dropNumber = arr.findIndex(cb);
      let droppedArray = this.drop(arr, dropNumber);
      return droppedArray;
    },
    chunk(arr,size){
      let newArray = [ ];
      if (size === undefined){
        size = 1;
      }
        for (let i = 0; i < arr.length; i += size) {
        const chunk = arr.slice(i, i + size);
        newArray.push(chunk);
    }
    return newArray;
      }
            
}



// Do not write or modify code below this line.
module.exports = _;