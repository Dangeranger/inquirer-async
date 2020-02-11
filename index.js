import input from '@inquirer/input';

async function main() {
  const name = {}
  const answer = await input({ message: 'Enter your FIRST name' })
    .then(async (firstName) => {
      name.first = firstName;
      return input({ message: 'Enter your LAST name' });
    })
    .then((lastName) => {
      name.last = lastName;
      console.log(`Your full name is ${name.first}, ${name.last}`);
      return name;
    });
  console.log({ answer });
  return answer;
}

main();
