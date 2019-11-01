const oldData = {
    firedRice: {
    Price: 30,
    vnName: "Com rang dua bo"
    },
    noddle: {
    price: 20,
    vnName: "My tom chanh"
    },
    pho: {
    price: 35,
    vnName: "Pho bo tai chin"
    },
};
var {noddle, ...newData} = oldData
console.log(newData)
