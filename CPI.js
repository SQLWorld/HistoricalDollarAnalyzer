const cpiData = [
    [1947, 23.410],
    [1948, 24.050],
    [1949, 23.610],
    [1950, 24.980],
    [1951, 26.470],
    [1952, 26.710],
    [1953, 26.870],
    [1954, 26.770],
    [1955, 26.870],
    [1956, 27.630],
    [1957, 28.470],
    [1958, 28.970],
    [1959, 29.410],
    [1960, 29.810],
    [1961, 30.010],
    [1962, 30.380],
    [1963, 30.880],
    [1964, 31.250],
    [1965, 31.850],
    [1966, 32.920],
    [1967, 34.000],
    [1968, 35.600],
    [1969, 37.700],
    [1970, 39.800],
    [1971, 41.100],
    [1972, 42.500],
    [1973, 46.300],
    [1974, 51.900],
    [1975, 55.600],
    [1976, 58.400],
    [1977, 62.300],
    [1978, 67.900],
    [1979, 76.900],
    [1980, 86.400],
    [1981, 94.100],
    [1982, 97.700],
    [1983, 101.400],
    [1984, 105.500],
    [1985, 109.500],
    [1986, 110.800],
    [1987, 115.600],
    [1988, 120.700],
    [1989, 126.300],
    [1990, 134.200],
    [1991, 138.200],
    [1992, 142.300],
    [1993, 146.300],
    [1994, 150.100],
    [1995, 153.900],
    [1996, 159.100],
    [1997, 161.800],
    [1998, 164.400],
    [1999, 168.800],
    [2000, 174.600],
    [2001, 177.400],
    [2002, 181.800],
    [2003, 185.500],
    [2004, 191.700],
    [2005, 198.100],
    [2006, 203.100],
    [2007, 211.445],
    [2008, 211.398],
    [2009, 217.347],
    [2010, 220.472],
    [2011, 227.223],
    [2012, 231.221],
    [2013, 234.719],
    [2014, 236.252],
    [2015, 237.761],
    [2016, 242.637],
    [2017, 247.805],
    [2018, 252.767],
    [2019, 258.616],
    [2020, 262.035],
    [2021, 280.887],
    [2022, 298.990],
    [2023, 307.917]

  ];
  

 //console.log(cpiData[24][1]);

 //let cpiYear = prompt("Please enter the year for which you want to calculate the equivalent dollar amount (Please choose a year between 1947-2022):");
 //let cpiDollarToCheck = prompt("Enter the dollar amount you want to check (e.g., 100):");
 



 fn_calculateCpi = function(){
    let cpiYear = document.getElementById('cpiYear').value;
    let cpiDollarToCheck = parseFloat(document.getElementById('cpiDollarToCheck').value);
    
   if (cpiYear<1947 || cpiYear>2022) {
     let displayResultElement = document.getElementById('displayResult');
     displayResultElement.innerText = `Please choose a year between 1947-2022`;
     displayResultElement.style.color = 'red';
   }
   else if (cpiDollarToCheck <=0) {

      let displayResultElement = document.getElementById('displayResult');
      displayResultElement.innerText = `Please provide a dollar value greater than 0`;
      displayResultElement.style.color = 'red';
     
   }
   else {
   let cpiYearIndex = cpiData.findIndex(item => item[0] == cpiYear);
    let cpiRateIndex = cpiData[cpiYearIndex][1];
    let result = (307*cpiDollarToCheck)/cpiRateIndex;
    let formattedDollarToCheck = cpiDollarToCheck.toLocaleString();
    let roundResult = Math.round(result)
    let formattedResultToCheck = roundResult.toLocaleString();
    let displayResultElement = document.getElementById('displayResult');
    displayResultElement.innerText = `$${formattedDollarToCheck} in ${cpiYear} is worth about $${formattedResultToCheck} in today's dollars (2023)`
    displayResultElement.style.color = 'aquamarine';
}
   
}

 //console.log(`The CPI Year is ${cpiYear}`);
 //console.log(`The dollar amount that is going to be checked is ${cpiDollarToCheck}`);
 //console.log(`The index of the CPI year that is going to be checked is ${cpiYearIndex}`);
 //console.log(`The CPI amount for the year ${cpiYear} is ${cpiRateIndex}`);
/*
 const yearIndex = cpiData.findIndex(item => item[0] === userInputYear);

 console.log(vNoah);
 console.log(vYear);
  */
 /*
 fn_calculateCpi = function(cpiYear,cpiDollarToCheck){
	 
    if (cpiYear < 1947 || cpiYear > 2023) {
        console.log(`Sorry. We don't have the data for the year provided`)
    }
    else {
    const cpiYearIndex = cpiData.findIndex(item => item[0] == cpiYear);
    const cpiRateIndex = cpiData[cpiYearIndex][1];
   const result = (307*cpiDollarToCheck)/cpiRateIndex;
   return `$${cpiDollarToCheck} in ${cpiYear} is approximately ${Math.round(result)} in today's value`
}}

console.log(fn_calculateCpi(cpiYear,cpiDollarToCheck));

*/