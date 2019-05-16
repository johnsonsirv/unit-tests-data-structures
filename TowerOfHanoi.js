/* 
start = 1
spare = dest - start
dest =3

n = 2 / size of disks
move = n-1 from start to spare
move 1 from start to destination
mover n-1 from spare to destinaton

*/
//Moves any n-size of disk on the tower at 2^n - 1 steps
function tower(n, start=1, dest=3, spare = 2){
    if (n===1) console.log('move' + start + '->' + dest)
    else{
        tower(n-1, start, dest, spare)
        tower(1, start, dest, spare)
        tower(n-1, spare, dest, start)
    }
}

// Move only n=2 discs on the tower
function move(start, goal, n=2){
   spare = Math.abs(goal-start);
   step(start, goal, spare)
}

function step(start, goal, spare, n=2){
    if(n===1) console.log(start +'->'+goal)
    else{
        step(start, spare, goal, n-1);
        step(start, goal, spare, 1);
        step(spare, goal, start, n-1);
    }
}

move(1,3)
move(2,3)
move(3,1)

tower(3)