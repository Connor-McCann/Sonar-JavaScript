const classHelper = {
    DegToRad : function(degrees){
        return degrees * (Math.PI/ 180)
    },
    Random : function(min, max){
        return (Math.random() * max) + min;
    },
    Clamp : function(number, min, max){
        if(number < min){
            return min;
        }
        else if(number > max){
            return max;
        }
        return number;
    }
}

function test(){
    var a = 7;
    var b = 7;

    b = 21;
}