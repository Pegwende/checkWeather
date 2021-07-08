$(() => {

const $text = $('#input')
const $btn = $('#submit')
const $modal =$('.modal1')
const $par = $('<p>')
const $btn2 =$('.closeBtn')


$btn.on('click', (event)=>{
  event.preventDefault()
  const userInput = $text.val()
  $.ajax({
    url:"https://api.openweathermap.org/data/2.5/weather?zip="+userInput+",us&appid=724e99c34181dddb70e43c218698fb6e"

  }).then((data)=>{
  //  console.log(data)
    const temperature = Math.floor((parseInt(data.main.temp)-273.15) * 9/5+32)
    $par.text('It is ' + temperature + ' degree in ' + data.name + ' SAFE TRIP!!!')
    //console.log($par)
    $modal.append($par)
    $('.modal').show()

    $btn2.on('click',(event)=>{
      event.preventDefault()
      $('.modal').hide()
    })
    console.log(temperature + ' degre')
  })


})




})
