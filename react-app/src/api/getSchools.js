
export default async function fetchFrenchSchools(url) {
  console.log(url);
        const response = await fetch(url);
        const data = await response.json();
  const result = data.records;
  console.log(result)
 return result
   
}
