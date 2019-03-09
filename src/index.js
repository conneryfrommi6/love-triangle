/**
 * @param preferences -
 *            an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */


module.exports = function getLoveTrianglesCount(mass = []) {
 
	var count = 0;
	for(let arr=[], n=0; n < mass.length; n++){
		if(!(arrSet(arr, mass[n]) || mass[n]-1===n || mass[n] === mass[mass[n]-1])){
			let a = mass[n];
			let b = mass[a-1];
			let c = mass[b-1];
			let d = mass[c-1];
			if(a===d){
				arr[arr.length]=a;
				arr[arr.length]=b;
				arr[arr.length]=c;
				count++;		
			}
		}
	}
	return count;
	};


function arrSet(arr=[], elem){
	for(let is, k = 0; k < arr.length; k++){
		if(arr[k] === elem) {
			return true;
		}
	}
	return false;
}
