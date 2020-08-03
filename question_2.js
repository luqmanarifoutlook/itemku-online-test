function solution(N, users) {
    var answer    = [];

	var i;
	for (i = 0; i < N; i++) {
		var defeat    = 0;
		var remaining = users.length;

		users.forEach(level => {
			if (users[level] == i + 1) {
				defeat++;
				remaining--;
			}
			answer[i + 1] = defeat / remaining;
		})
	}
	
	answer.sort();
	answer.reverse();
    return answer;
}

// N: 5
// users: [2,1,2,6,2,4,3,3]
// answer: [3,4,2,1,5]