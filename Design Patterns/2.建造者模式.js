const data = [
  {
    name: 'zhang san',
    age: 23,
    work: 'engineer',
  },
  {
    name: 'li si',
    age: 20,
    work: 'teacher',
  },
  {
    name: 'zhang san',
    age: 23,
    work: 'engineer',
  },
]
function Candidate(params) {
  let _candidate = {}
  _candidate.name = params.name
  _candidate.age = params.age
  _candidate.firstName = params.name.split(' ')[0]
  _candidate.lastName = params.name.split(' ')[1]
}
