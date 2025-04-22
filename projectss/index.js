let score=0
let gscore=0
function increment(num)
{
    score+=num
    document.getElementById('home-score').textContent=score
}

function incrment(num)
{
    gscore+=num
    document.getElementById('guest-score').textContent=gscore
}

function reset()
{
   document.getElementById('home-score').textContent=document.getElementById('guest-score').textContent=0
    
}
