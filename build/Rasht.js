/*   

 
		o-o   o--o o--o    O  
		|  \  |    |   |  / \ 
		|   O O-o  O-Oo  o---o
		|  /  |    |  \  |   |    
		o-o   o--o o   o o   o



*/
var botui = new BotUI('Rasht');
//les includes
document.write("<script language='JavaScript' src='build/flashback.js'></script>");
document.write("<link href='build/bulma.css' rel='stylesheet'>"); // bulma

  botui.message.bot({
    photo: 'build/rasht.png',
    content: 'Salutations à vous!'
  });
 
    botui.message.bot({
      delay: 1000,
      photo: 'build/rasht.png',
      content: "Je suis Rasht..."
    }).then(function () {
      return droits();//droits d'auteurs
    }).then(function () {
      return start();
    });


/*------------------------- Section start--------------------------------*/
var start = function(){
  botui.message.bot({
    loading:true,
    delay: 2000,
    photo: 'build/rasht.png',
    content: 'Je suis toujours en cours de développement',
  })
    .then(function () {
      return botui.action.button({
        delay: 1000,
        action: [{
          text: 'Lancer une conversation',
          _icon: 'rocket',
          get icon() {
            return this._icon;
          },
          set icon(value) {
            this._icon = value;
          },
          value: 'refresh'
        }]
      })
  }).then(function (res) {
  if(res.value == 'refresh') {
    start();
  } else  {
    inge();       
  }
});;
}
/*-------------------------------- fin section start------------------------------------*/
/*   

 
		o-o   o--o o--o    O  
		|  \  |    |   |  / \ 
		|   O O-o  O-Oo  o---o
		|  /  |    |  \  |   |    
		o-o   o--o o   o o   o



*/