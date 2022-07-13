const questions = [
  {
    type: 'list',
    name: 'userChoice',
    message: 'What would you like to do?',
    choices: [
      {
        name:"View employess",
        value: "ve"
      },
      {
        name:"Add employee",
        value: "ae"
      },
      {
        name:"Update employee role",
        value: "uer"
      },
      {
        name:"View departments",
        value: "vd"
      },
      {
        name:"Add department",
        value: "ad"
      },
      {
        name:"View roles",
        value: "vr"
      },
      {
        name:"Add role",
        value: "ar"
      },
      {
        name:"Quit", 
        value:"quit"
      }
    ]
  }
]

module.exports = questions;