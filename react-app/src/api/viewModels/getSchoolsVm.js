
export function removeDuplicates(array) {
  console.log(array)
  let uniqueArray = [];
  array.forEach((obj) => {
    let isDuplicate = uniqueArray.some((item) => {
      return (
        item.fields.nom_de_l_etablissement === obj.fields.nom_de_l_etablissement
      );
    });
    if (!isDuplicate) {
      uniqueArray.push(obj);
    }
  });
    console.log(uniqueArray);
  return uniqueArray;
}


