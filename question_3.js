function solution(relation) {
    var answer  = 0;
	var filters = [];

	relation.forEach(key => {
		var row    = relation[key];
		var filter = [];
		
		row.forEach(item => {
			var column = row[item];

			filter[item].push(column);
		})

		filters.push(filter);
	})

	filters.forEach(key => {
		var unique = Array.from(new Set(filters[key]));

		if (unique.length == filters.length) {
			answer++;
		}
	})

    return answer;
}

// relation: 
// [
// 	["100","ryan","music","2"],
// 	["200","apeach","math","2"],
// 	["300","tube","computer","3"],
// 	["400","con","computer","4"],
// 	["500","muzi","music","3"],
// 	["600","apeach","music","2"]
// ]

// answer: 2