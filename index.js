import input from '@inquirer/input';
import select from '@inquirer/select';

async function main() {
  const person = {}
  const answer = await input({ message: 'Enter your FIRST name' })
    .then((firstName) => {
      person.first = firstName;
      return input({ message: 'Enter your MIDDLE name' });
    })
    .then((middleName) => {
      person.middle = middleName;
      return input({ message: 'Enter your LAST name' });
    })
    .then((lastName) => {
      person.last = lastName;
      return select({
        message: 'What is your favorite color',
        choices: [
          { name: 'blue', value: 'blue' },
          { name: 'red', value: 'red' },
          { name: 'yellow', value: 'yellow', disabled: true }
        ],
      });
    })
    .then((favoriteColor) => {
      person.color = favoriteColor;
      return person;
    });
  console.log(`Your full name is ${person.first}, ${person.last}`);
  console.log(`Your color is ${person.color}`);
  console.log({ answer });
  return answer;
}

main();
