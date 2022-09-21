
let n=13;
let check=true;
for(let i=2;i<n-1;i++)
  {
    if(n%i==0)
    {
      check=false;
    }
  }
if(check==true)
{
  console.log("Prime");
}
else
{
  console.log("Not Prime");
}