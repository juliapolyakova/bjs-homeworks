function compareArrays(arr1, arr2) {
	return (arr1.length === arr2.length) &&	(arr1.every((item, index) => item === arr2[index]));
	
}

//compareArrays([8, 1, 2], [8, 1, 2]);

function memoize(fn, limit) {
  const results = [];
  return ( ...args) => {
    let result = results.find(item => compareArrays(item.args, Array.from(args)));


    if (result) {
      console.log("Результат берется из памяти");
      console.log(result.result);
      return result.result;
    } else {
      let result = fn( ...args);
      results.push({
        args: Array.from(args),
        result: result,
      });
    }
    if (results.length > limit) {
			results.shift();
		}
    console.log("Результат берется не из памяти");
    console.log(results);
    return results;
  }

}

const sum = (a, b) => a + b;

const mSum = memoize(sum, 2);
mSum( 3, 4 );
mSum( 1, 3 ); 
mSum( 3, 4 );
mSum( 1, 3 ); 