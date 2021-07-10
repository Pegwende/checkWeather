$(() => {

const $text = $('#input')
const $btn = $('#submit')
const $modal =$('.modal1')
const $par = $('<p>')
const $btn2 =$('.closeBtn')
const $numb = $('<h>')

$text.on('click', ()=>{
  $text.val('')
})

$btn.on('click', (event)=>{
  event.preventDefault()

  const userInput = $text.val()
  $.ajax({
    url:"https://api.openweathermap.org/data/2.5/weather?zip="+userInput+",us&appid=724e99c34181dddb70e43c218698fb6e"

  }).then(
    (data)=>{
      //  console.log(data)
      const temperature = Math.floor((parseInt(data.main.temp)-273.15) * 9/5+32)
      $par.text('It is ' + temperature + ' degree in ' + data.name + ' SAFE TRIP!!!').css('font-size', '25px')
      $par.css('color', 'rgba(250,0,0,0.5)')
      //console.log($par)
      $numb.text(temperature + '℉').attr('id','temp')
      $modal.append($par)

      $modal.append($numb)
      $('.modal').show()


      $btn2.on('click',(event)=>{
        event.preventDefault()
        $('.modal').hide()
      })
      console.log(temperature + ' degre')
  },
  ()=>{
    alert('NOT a VALID ZIP-CODE TRY again!!!!')
      console.log('bad request')
    }
)


})




})
