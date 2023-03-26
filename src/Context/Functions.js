const setTime = (totalMinutes) =>{
    let hours =0;
    let minutes=0;
    if(totalMinutes < 60){
       minutes = totalMinutes
    }else{
        hours = Math.floor(totalMinutes / 60); 
        minutes = totalMinutes % 60;
    } 
    return ({hours , minutes})
}

const StartTimer = (totalMinutes) =>{
    let hours;
    let minutes;
    if(totalMinutes < 60){
       minutes = totalMinutes
    }else{
        hours = Math.floor(totalMinutes / 60); 
        minutes = totalMinutes % 60;
    }
    
    return {hours , minutes}
}


export {setTime,StartTimer}