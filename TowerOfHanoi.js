/* 
    start = 1
spare = dest - start
dest =3

n = 2 / size of disks
move = n-1 from start to spare
move 1 from start to destination
mover n-1 from spare to destinaton

*/

function Tower(n, start=1, dest=3, spare = 2){

}

// Move only n=2 discs on the tower
function move(start, goal, n=2){
    if (n==1)  console.log(start + '->' +goal)
    else{
        move(start, goal-start, n-1)
        move(start, goal, 1)
        move(goal-start, goal, n-1)
    }
}

move(1,3)
move(2,3)