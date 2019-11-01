const circle = {
    shape: 'circle',
    x: 100,
    y: 50,
    radius: 30,
    };
    penup()
rt(90)
fd(circle.x)
lt(90)
fd(circle.y-circle.radius)
pendown()
rt(90)
for(i=0;i<360;i++){
    fd(0.5)
    lt(1)
}
