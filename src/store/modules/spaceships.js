const state = [
  {
    id: 1,
    name: 'Spaceship A',
    type: 'economy',
    company: 'Sixt',
    price: 500,
    travelers: 2,
    available: {
      in: 'Wrocław',
      start: '',
      end: ''
    },
    pictures: [
      {
        link: 'spaceship.jpg',
        description: 'Exterior look'
      }
    ],
    description: '',
    shortDescription: ''
  }
]

const module = {
  state
}

export default module
