document.addEventListener("DOMContentLoaded", function (event) {

  var firstName1 = document.getElementById('firstName1').value
  var lastName1 = document.getElementById('lastName1').value
  var address1 = document.getElementById('address1').value
  var country1 = document.getElementById('country1').value
  var state1 = document.getElementById('state1').value
  var zip1 = document.getElementById('zip1').value
  var firstName2 = document.getElementById('firstName2').value
  var lastName2 = document.getElementById('lastName2').value
  var address2 = document.getElementById('address2').value
  var country2 = document.getElementById('country2').value
  var state2 = document.getElementById('state2').value
  var zip2 = document.getElementById('zip2').value
  var sameAddress = document.getElementById('same-address')
  var form = document.getElementById('formSubmit')



  sameAddress.addEventListener('click', function (e) {
      if (sameAddress.checked) {
            firstName1 = document.getElementById('firstName1').value
            lastName1 = document.getElementById('lastName1').value
            address1 = document.getElementById('address1').value
            country1 = document.getElementById('country1').value
            state1 = document.getElementById('state1').value
            zip1 = document.getElementById('zip1').value
            document.getElementById('firstName2').value = firstName1
            document.getElementById('lastName2').value = lastName1
            document.getElementById('address2').value = address1
            document.getElementById('country2').value = country1
            document.getElementById('state2').value = state1
            document.getElementById('zip2').value = zip1
      }
  })

  form.addEventListener('submit', function (e) {
    
    alert('Success')
  })


})