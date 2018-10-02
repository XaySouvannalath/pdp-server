const dbconfing = require('./testexportobject')
const exportfunction = require('./testexportFunction')
const exportsingle= require('./testexportsingle')
const exportmultiple = require('./textexportmultiple')
const exportsubobject = require('./testexportsubobject')
const exportobject = require('./testexportobject')
const copyObject = require('./testcopyobject')
const asyncFunction = require('./testAsyncFunction')
 
require('dotenv').config()





//*****************************from export multiple variables******************************** */
var address = exportmultiple.address
var name = exportmultiple.name
var lastname = exportmultiple.lastname
//******************************************************************************************** */

//*****************************from export multiple function******************************** */
/* var showN = exportfunction.showName()
var showL = exportfunction.showLastname()
  */
//******************************************************************************************** */
/* console.log(exportsubobject.saiyavong);
console.log(exportsubobject.luffy);
 */

/* var cObj = copyObject.phone;
console.log(cObj);

var newObj = Object.assign({}, cObj)

console.log(newObj);
 */




/* console.log(process.env.DB_HOST);


console.log(exportobject); */
 


 
 


