var express = require('express')
var cors = require('cors')
var path = require('path')
var server = express()

server.use(cors())
server.use(express.json())


let equips = [
  { no: 1, equip: 'a', part: 'head', price: 1, },
  { no: 2, equip: 'b', part: 'body', price: 2, },
  { no: 3, equip: 'c', part: 'leg', price: 3, },
  { no: 4, equip: 'd', part: 'head', price: 4, },
]

let getMaxNo = () => {
  let maxIdofItem = equips.reduce(function (prev, current) {
    return (prev.no > current.no) ? prev : current
  })
  return maxIdofItem.no + 1
}

let getIndexbyNo = (no) => {
  let resultIndex = -1
  equips.forEach((equip, index) => {
    if (equip.no == no) {
      resultIndex = index
    }
  })
  return resultIndex
}


//更新資料
server.put('/equips/:no', (request, response) => {

  let indexofId = getIndexbyNo(request.params.no)
  equips[indexofId] = request.body

  response.json(equips)

})


//新增資料
server.post('/equips', (request, response) => {
  
  let newEquip = {
    no: getMaxNo(),
    equip: request.query.equip,
    part: request.query.part,
    price: request.query.price
  }
  equips.push(newEquip)
  response.json(equips)


})

//刪除資料
server.delete('/equips/:no', (request, response) => {
  let indexofId = getIndexbyNo(request.params.no)
  equips.splice(indexofId, 1)
  response.json(equips)
})


var search = function (inputNo, inputEquip) {
  let hasInputNo = typeof inputNo !== 'undefined' && inputNo !== null && inputNo !== ''
  let hasInputEquip = typeof inputEquip !== 'undefined' && inputEquip !== null && inputEquip !== ''
  if (hasInputNo || hasInputEquip) {
    return equips.filter((equip) => {
      let result = true
      if (hasInputNo && equip.no == inputNo) {
        result = false
      }
      if (hasInputEquip && equip.equip.indexOf(inputEquip) != -1) {
        result = false
      }
      return !result
    })
  } else {
    return equips
  }
}

//取得全部資料
server.get('/equips', function (request, response, next) {
  let { no , equip } = request.query
  /*
  if(true){
    response.status(500).send('Something broke!');
  }
  */
  console.log('12345')
  response.json(search(no, equip))
})

//取得單筆資料
server.get('/equips/:id', function (request, response, next) {
  let index = getIndexbyNo(request.params.id)
  if (index == -1) {
    response.json("")
  } else {
    let result = equips.reduce((prev, current) => {
      return (prev.no == request.params.id) ? prev : current
    })
    response.json(result)
  }

})

// param:url path , query:? , body
server.post('/auth/login',function(request , response , next){
  let { account , password } = request.body
  if(account == 'chain' && password == '1234'){

    response.json({
      "token" : "alksdjf.jqujfmab.sdkjf"
    }) 
  }else{
    response.status(401).send('Something broke!');
  }
})
server.get('/',function(req,res) {
  res.sendFile(path.join(__dirname+'/pratice-equips.html'));
});

server.listen(8802, function () {
  console.log('CORS-enabled web server listening on port 8802')
})
