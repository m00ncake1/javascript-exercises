const findTheOldest = function(people) {
    people = people.reduce( (oldest, current) =>{
    if (getAge(oldest) >= getAge(current)) return oldest;
    return current;});

    return people;
    }


const getAge = function(person){
    if (!person.yearOfDeath){
        // console.log(person)
        return (2024 - Number(person.yearOfBirth))
    }
    let age =(Number(person.yearOfDeath) -(Number(person.yearOfBirth)))
    // console.log(age)
    return age
}

const people = [
    {
      name: "Carly",
      yearOfBirth: 2018,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

console.log(findTheOldest(people))
// Do not edit below this line
module.exports = findTheOldest;
