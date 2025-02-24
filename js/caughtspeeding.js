function caughtSpeeding (x,y){
    let isBirthday =x;
    let speed =y;
    if(isBirthday)Speed -=5;}
    if(speed <=60)
        {return 0;}
    else if(speed <=80 && speed >=61)
    {return 1;}
    else
    {return 2;}

    caughtSpeeding(true, 65); //should be 0 
    caughtSpeeding(false, 65); //should be 1
    caughtSpeeding(false, 200); //should be 2
