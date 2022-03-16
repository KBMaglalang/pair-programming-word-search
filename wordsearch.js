const transpose = function(matrix) {
  let result = [];
  
  matrix.forEach((element) => {
    element.forEach((elm,ind) => {
      if (result[ind] === undefined) {
        result.push([]);
      }
      result[ind].push(elm);
    });
  });
  
  return result;
};

const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  const verticalJoin = transpose(letters).map(ls => ls.join(''));

  // horizontal check
  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
  }

  // vertical check
  for (let l of verticalJoin) {
    if (l.includes(word)) return true;
  }

  return false;
};

module.exports = wordSearch;