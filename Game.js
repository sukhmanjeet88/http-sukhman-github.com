const GameState = Object.freeze({
    WELCOMING:   Symbol("welcoming"),
    PLAN:  Symbol("plan"),
    FLOOR: Symbol("floor"),
    FIND: Symbol("find"),
    FIGHT: Symbol("fight"),
    ALTOGETHER: Symbol("altogether"),
    STAY: Symbol("stay"),
    FACE: Symbol("face"),
    CONTINUE: Symbol("continue"),
    Pursue: Symbol("pursue"),
    HOME: Symbol("home"),
    SLEEP: Symbol("sleep"),
    

});

export default class Game{
    constructor(){
        this.stateCur = GameState.WELCOMING;
    }
    
    makeAMove(sInput)
    {
        let sReply = "";
        switch(this.stateCur){
            case GameState.WELCOMING:
                sReply = "You invited all your  hostel friends to celebrate halloween night in hostel killing Floor.  Do you want to go with them in a killing floor or stay in your room?";
                this.stateCur = GameState.PLAN;
                break;
            case GameState.PLAN:
                if(sInput.toLowerCase().match("floor")){
                    sReply = "You all are there in the killing floor and suddenly you hear voice of crying girl. Do you want to find crying girl or go back to your room?";
                    this.stateCur = GameState.FLOOR;
                }else{
                    sReply ="It was good idea to run back. You have reached your hostel room back safe. Do you want to celebrate halloween party in your room  or want to Sleep?";
                    this.stateCur = GameState.HOME;
                }
      
                break;
            case GameState.FLOOR:
                if(sInput.toLowerCase().match("find")){
                    sReply ="You all plan to scatter in all direction to find the girl.Suddenly shadowy figure appears,right at peripheral vision.This feeling of dread and uneasiness washed over everybody. Do you want to fight with the ghost  or want to run from killing floor?";
                    this.stateCur = GameState.FIND;
                }else{
                    sReply = "It was good idea to run back. You have reached your hostel room back safe. Do you want to celebrate halloween party in your room  or want to Sleep?";
                    this.stateCur = GameState.HOME;

                }
        
                break;
            case GameState.FIND:
                if(sInput.toLowerCase().match("fight")){
                    sReply = "You all are continue to fight.Suddenly fog appears and temperature drop and you all saw a women hanging down the roof of the killing floor in a white nightdress with long dark hair,covered in blood. Do you want to  move ahead or run back";
                    this.stateCur = GameState.FIGHT;

                }else{
                    sReply = "It was good idea to run back. You have reached hostel room back safe. Do you want to celebrate halloween party in your room  or want to Sleep?";
                    this.stateCur = GameState.HOME;
    
                }
           
                break;
            case GameState.FIGHT:
                if(sInput.toLowerCase().match("ahead"))
                {
                    sReply = "you and your friends hear a creepy noise and horrible groans when they move ahead and  that sound comes from the opposite side of the killing floor.Do you still want go altogether to see  what's happening or run back?";
                    this.stateCur = GameState.ALTOGETHER;
                }
                else
                {
                    sReply = "It was good idea to run back. You have reached  hostel room  back safe. Do you want to celebrate halloween party in your room or want to Sleep?";
                    this.stateCur = GameState.HOME;
                }
        
                break;
            case GameState.ALTOGETHER:
                if(sInput.toLowerCase().match("altogether"))
                {
                    sReply = " Suddenly, same scary looking woman  appears who is hanging down the roof of the killing floor and lights go away. The only way to save your life is to fight together and run back. DO you want to stay in room or run back?";
                    this.stateCur = GameState.STAY;
                }


                else
                {
                    sReply = "It was good idea to run back. You have reached hostel room back safe. Do you want to celebrate halloween night with yours friends or want to Sleep?";
                    this.stateCur = GameState.HOME;
                }
         
                break;
            case GameState.STAY:
                if(sInput.toLowerCase().match("stay"))
                {
                    sReply = " Everything in the room starts moving and lights of room starts to flicker. Evil guard is coming towards you all. Do you all still want to face evil guard or run back?";
                    this.stateCur = GameState.FACE;
                }
                else{
                    sReply = "Its good idea to run back. These Evil guards has already killed many people in the killing floor so, its your lucky day that you survived.  Do you want to celebrate halloween party with your friends or want to Sleep?";
                    this.stateCur = GameState.HOME;
                }
            
                break;
            case GameState.FACE:
                if(sInput.toLowerCase().match("face"))
                {
                    sReply = "You ask Evil Guard let us go we never go in the killing floor again. Evil guard stops there and lights stop flickers. Do you want to continue your talk with evil guard or run back?";
                    this.stateCur = GameState.CONTINUE;
                }
                else{
                    sReply = "Its good idea to run back. These Evil guards has already killed many people in the killing floor so, its your lucky day that you survived.  Do you want to celebrate halloween party with your friends or want to Sleep?";
                    this.stateCur = GameState.HOME;
                }
              
                break;
            case GameState.CONTINUE:
                if(sInput.toLowerCase().match("continue"))
                {
                    sReply = "As you all begin to continue your talk with the Evil Guard , suddenly  the same scary women appears and takes one of your friend with her . Do you want to pursue your talk with Evil Guard  or run back?";
                    this.stateCur = GameState.PURSUE;
                }
                else
                {
                    sReply = "Its good ideas to run back. These Evil guards has already killed many people in the killing floor so its your lucky day that you survived.  Do you want to celebrate halloween party with your friends or want to Sleep?";
                    this.stateCur = GameState.HOME;
                }
              
                break;
            case GameState.PURSUE:
                if(sInput.toLowerCase().match("pursue"))
                {
                    sReply = "Bad idea. Its a Evil Guard Who killed my students or staff in the killing floor. Now it's going to kill all of you  with his big knife by doing multiple pieces of everybody one by one. Good luck. Game is over. GOOD BYE!!!!";
                }
                else{
                    sReply = "It was good idea to run back. You have reached your hostel room back safe. Do you want to celebrate halloween party in your room  or want to Sleep?";
                    this.stateCur = GameState.HOME;
                }
               
                break;

            case GameState.HOME:
                if(sInput.toLowerCase().match("sleep"))
                {
                    sReply = " It was a long Scary night.Do You Want to Sleep.Yes or No ";
                    this.stateCur = GameState.SLEEP;
                }
               
                
               
               
                    
              
            
            else{
                     sReply = "Now you all are Exhausted. Do you want to Sleep. Yes or NO??";
                    this.stateCur = GameState.EXHAUSTED;
                }
              
                break;
            case GameState.EXHAUSTED:
                if(sInput.toLowerCase().match("yes"))
                {
                    sReply = "Good night. It was a long Scary night.Take Rest. Sleep well.";
                    
                }
                else{
                    sReply = "One of your friend is so scared to celebrate halloween party in the killing floor . Do you want to Sleep . Yes or No?";
                   
                    
                }
              
                break;
        }
        return([sReply]);
    }
}