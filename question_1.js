function solution(record) {
	var answer = [];

	record.forEach(command => {
		var term = record[command].split(" ");
		
		if (term[0] == 'Enter') {
			answer.push(term[2] + " came in.");
		}
		else if (term[0] == 'Leave') {
			answer.push(term[2] + " has left.");
		}
		else if (term[0] == 'Change') {		
			record.forEach(object => {
				var value = record[object].split(" ");

				if (term[1] == value[1]) {
					var temp = answer[object].split(" ");
					answer[object] = term[2] + " " + temp[1] + " " + temp[2];
				}
			}
		}
	})

	return answer;
}

// record: 
// ["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"]

// answer:
// ["Prodo came in.", "Ryan came in.", "Prodo has left.", "Prodo came in."]