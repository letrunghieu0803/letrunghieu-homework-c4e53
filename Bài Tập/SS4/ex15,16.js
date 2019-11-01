clear()
const pos = {
x: 200,
y: 50,
w: 20
}
penup()
rt(90)
fd(pos.x/2)
lt(90)
fd(pos.y)
pendown()
for(let i=0;i<4;i++){
    fd(pos.w)
    rt(90)
}