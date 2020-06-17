function getName()
{
  return prompt('your name...','');

}
function greet()
{
  const userName=getName();
  //var myName; gives an undefined value
  console.log("hello..."+userName);
}
greet();
