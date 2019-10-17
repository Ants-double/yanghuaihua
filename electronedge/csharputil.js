
const edge = require('electron-edge-js');
console.info("call c#")

var DemoDll = edge.func({
    assemblyFile: "electronedge.dll",
    typeName: "electronedge.Class1",
    methodName: "Invoke"
});
var DemoDll2 = edge.func({
    assemblyFile: "electronedge.dll",
    typeName: "electronedge.Class1",
    methodName: "Invoke2"
});
// module.exports.DemoDll = DemoDll;
module.exports.DemoDll = {
    demo: DemoDll,
    demo2:DemoDll2
};

// module.exports = class DemoDll{
//     constructor(){

//     }
//     static demo() {
//         return edge.func({
//             assemblyFile:"electronedge.dll",
//             typeName:"electronedge.Class1",
//             methodName: "Invoke"
//         });
//     }
//     static demo2(time, value, type) {
//         return edge.func({
//             assemblyFile:"electronedge.dll",
//             typeName:"electronedge.Class1",
//             methodName: "Invoke2"
//         });
//     }
// }
