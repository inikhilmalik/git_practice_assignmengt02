
let n=13;
let counter=0;
for(let i=1;i<n;i++)
  {
    if(n%i==0)
    {
      counter+=1;
    }
  }
if(counter==2)
{
  console.log("Prime");
}
else
{
  console.log("Not Prime");
}