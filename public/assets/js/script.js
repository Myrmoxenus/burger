function devourBurger(burgerID){

  fetch(`/api/burgers/${burgerID}`, {
    method: 'put',
  })

 location.reload()
}

function summonBurger(burgerName){

  fetch(`/api/burgers/${burgerName}`, {
    method: 'post',
  })

  location.reload()
}



