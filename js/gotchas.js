var ParentObject = function()
{

};

ParentObject.prototype.parentProperty = 'foo';

var ChildObject = new ParentObject();
ChildObject.childProperty = 'bar';

console.log("ChildObject:");
console.dir(ChildObject);

console.log("ParentObject:");
console.dir(ParentObject);

var setup = function()
{
	var message = "Hello this adds list later";
	$('button').click
	(
		function()
		{
			alert.message;
		}
	);
};

setup();

(function()
{
	var message = "Hello this adds list later";
	$('button').click
	(
		function()
		{
			alert.message;
		}
	);
})();

// difference between integer and floating type
alert(parseInt("1000000000000000", 10) < parseInt('1000000000000001', 10));
alert(parseInt("10000000000000000", 10) < parseInt('10000000000000001', 10));

// defining function name
var myFunction = function addValue(x, y) {};
console.log(myFunction.name);