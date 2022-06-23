const prompt = require('./index.js')
const c = require('kleur');

;(async () => {

  const result = await prompt({
    choices: [
      { title: 'Heading 1', heading: true },
      { title: 'a', selected: true },
      { title: 'b', selected: true },
      { title: 'c', selected: true },
      { title: 'Heading 2', heading: true },
      { title: 'd', selected: false },
      { title: 'e', selected: false },
      { title: 'f', selected: false },
    ],
    type: 'multiselect',
    message: 'Choose an option',
    hint: 'Headings are not selectable.',
    instructions: false,
    name: 'value',
  })

  console.log('result', result)

})()
