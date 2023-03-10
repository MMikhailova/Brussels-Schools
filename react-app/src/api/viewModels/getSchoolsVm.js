import fetchFrenchSchools from "../getSchools";
export default async function getUniqueSchools(url) {
  console.log(url);
  const frenchSchools= await fetchFrenchSchools(url);
  let uniqueArray = [];
 frenchSchools.forEach((obj) => {
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
