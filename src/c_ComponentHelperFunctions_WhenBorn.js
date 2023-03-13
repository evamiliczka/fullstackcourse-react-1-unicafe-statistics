

/* BBBB Lesson Fullstack - Part 1 -(React) - c - Component states - Destructing */

const Hello = ({name, age}) => {
  const bornYear = () => new Date().getFullYear() - age;
  
  return(
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>
        So you were probably born in the year {bornYear()}
      </p>
    </div>
  )
}


const WhenBorn = () => {
  const name = 'Peter';
  const age = 10;

  return(
    <div>
      <h1> Greetings </h1>
      <Hello name = 'Maja' age = {26+10} />
      <Hello name = {name} age = {age} />
    </div>
  )
}

export default WhenBorn;