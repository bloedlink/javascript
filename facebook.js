var database = [
  {
  username:'Niels',
  password:'p@ssword01'
}
]
var newsFeed = [
  {
    username:'Niels',
    timeline:'blablabla'
  },
  {
    username:'Freddy',
    timeline:'bipzfjqôfqkfqf'
  },
  {
    username:'Bob',
    timeline:'kfjqpofjqofjqzof'
  }
]

function signIn(){
  var userName = prompt('please enter your username')
  var userPass = prompt('please enter your password')

  if (userName === database[0].username &&
   userPass === database[0].password){
     console.log(newsFeed)
   }
 else{
   console.log('sorry your credentials are wrong, try again.')
   signIn()
     }
}
signIn()
