/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    if( n=== 0 ){
        return arr.slice()
    }
    let  falttar = []

    for(let i = 0 ; i<arr.length ; i++){
        if(Array.isArray(arr[i])){
            const nested = flat(arr[i],n-1)
            falttar.push(...nested)
        }else{
          falttar.push(arr[i])
        }
    }
    return falttar;
};