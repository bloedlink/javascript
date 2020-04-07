var database = [
  {
  username:'Niels',
  password:'password01'
},
{
username:'Alfred',
password:'password02'
},
{
username:'Penny',
password:'password03'
},
{
username:'Bertrand',
password:'password04'
},
]
var newsFeed = [
  {
    username:'Penny',
    timeline:'dqzdjqdjqzpodjqz'
  },
  {
    username:'Alfred',
    timeline:'bipzfjqôfqkfqf'
  },
  {
    username:'Wilma',
    timeline:'kfjqpofjqofjqzof'
  }
]

//function isUserValid()
function isUserValid(username,password){
  for(var i=0; i < database.length; i++){
    if (database[i].username === username &&
      database[i].password === password) {
        return true;
    }
  }
  return false;
}
//function signIn()
function signIn(username,password){
  if (isUserValid(username,password)) {
    console.log(newsFeed)
  } else {
    alert('sorry wrong username and password')
  }
}
  var userNamePrompt = prompt('enter your username')
  var passwordPrompt = prompt('enter your password')
  signIn(userNamePrompt,passwordPrompt)
