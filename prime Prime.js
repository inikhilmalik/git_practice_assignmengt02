
let n=13;
let factor=0;
for(let i=1;i<n;i++)
  {
    if(n%i==0)
    {
      factor+=1;
    }
  }
if(factor==2)
{
  console.log("Prime");
}
else
{
  console.log("Not Prime");
}