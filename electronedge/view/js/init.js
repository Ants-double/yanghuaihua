
function init() {
    const DemoDll = require("F:/yanghuaihua/electronedge/csharputil.js");


    return {
        demo: DemoDll.DemoDll.demo,
        demo2:DemoDll.DemoDll.demo2
       
    };
}
const initRequire = init();