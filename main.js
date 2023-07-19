var arr=[2,4,53,6,34,657,45,67];
document.write("Given number"+" "+arr+"<br>"+"<br>");
document.write("This number is two digit"+"<br>");
for(let i=0;i<arr.length;i++)
     {
	if((arr[i]>9)&&(arr[i]<100))
	{
	document.write(arr[i]+"<br>");
	}
     }		