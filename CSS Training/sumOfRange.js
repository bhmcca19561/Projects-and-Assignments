var Num = ["1", "2", "5", "78", "95", "34"];

function findMax(Num) {
	for (var arrayPosition = 0;
	arrayPosition < Num.length - 1; arrayposition++)
	{
		var currentNum = Num[arrayPosition];
		var nextNum = Num[arrayPosition + 1];
		console.log("Testing " + currentNum + " and " + nextNum + "(greater than): " + (currentNum > nextNum));
		console.log("Testing " + currentNum + " and " + nextNum + "(less than or equal to): " + (currentNum <= nextNum));
	 if (currentNum == nextNum)
		 {
			console.log("Testing " + currentNum + " and " + nextNum + "(strictly equal to): " + (currentNum === nextNum));
			if (currentNum !== nextNum)
			{
				console.log(currentNum + " is " + typeof(currentNum));
				console.log(nextNum  + " is " +  typeof(nextNum));
			} else 
				{
					console.log("Testing " + currentNum + " and " + nextNum + "(equal to): false");
				}
		 }
	}
}

