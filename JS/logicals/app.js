const age = prompt('Enter Age');

if(age>=0 && age <5 || age >=65){
    console.log('Free')
}
else if (age >=5 && age <10)
{
    console.log('10Rs')
}
else if (age >=10 && age<65)
{
    console.log('20Rs');
}
else{
    console.log('Invalid Age')
}