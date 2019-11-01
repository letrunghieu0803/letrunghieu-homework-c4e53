clear()
const rect = {
x: 100,
y: 50,
w: 20,
h: 40
}
penup()
rt(90)
fd(rect.x)
lt(90)
fd(rect.y)
pendown()
for(let i=0;i<2;i++){
    fd(rect.h)
    rt(90)
    fd(rect.w)
    rt(90)
}