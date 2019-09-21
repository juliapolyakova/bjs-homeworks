// Задание 1

function getSolutions( a, b, c ) {
    let D = b**2 - 4 * a * c;
    
    if (D < 0) {
        return {
            "D": D
        };
    } else if (D == 0) {
      let x1 = (-b) / ( 2 * a );
      return {
        roots: [x1],
        "D": D
      };
    } else {
      let x1 = (-b + Math.sqrt( D )) / (2 * a);
      let x2 = (-b - Math.sqrt( D )) / (2 * a);
      return {
        roots: [x1, x2],
        "D": D
      };
    };
}

function showSolutionsMessage( a, b, c ) {
  let result = getSolutions( a, b, c );
  
  console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
  console.log(`Значение дискриминанта: ${result.D}`);
  
  if (result.D < 0) {
    console.log("Уравнение не имеет вещественных корней");
  } else if (result.D == 0) {
    console.log(`Уравнение имеет один корень X₁ =${result.roots[0]}`);
  } else {
    console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
  }
}

showSolutionsMessage(2, 4, 2);

// Задание 2
function getAverageScore(data) {
    let averageMark = {};
    for (let prop in data) {
      let value = 0;
      for (let i=0; i < data[prop].length; i++) {
        value += data[prop][i];
      }
      averageMark[prop] = value / data[prop].length;
    } 
    return averageMark;
  } 
  
  
  function getAverageMarks(data) {
    let averageMarks = getAverageScore(data); 
    let sum = 0;
    let items = 0;
    for (let prop in averageMarks) {
      sum += averageMarks[prop];
      items++;
    }
  
    let average = sum / items;
    averageMarks.average = average;
    return averageMarks;
  }
  
  getAverageMarks({
    algebra: [5, 4, 5, 3, 5],
    biology: [5, 4, 5, 3, 5, 3, 4, 4, 4, 4],
    russian: [5, 4, 5, ],
    english: [5, 4, 5, 3, 5, 4],
    poetry: [5, 4, 5, 3, 5, 5],
    music: [3, 5, 4, 5 ]
    }
  ); 

  // Задание 3