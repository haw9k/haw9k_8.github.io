(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()

  function change() {
    let selectChoice = document.getElementsByName("product-choice")[0].value;
    if (selectChoice == 1) {
        let checkBox = document.getElementById("option-choices");
        checkBox.innerHTML = "";
    }
    if (selectChoice == 2) {
        let checkBox = document.getElementById("option-choices");
        checkBox.innerHTML = '\
        <input type="radio" id="onecomp" name="someGroupName" required="">\n \
        <label for="onecomp">С резиной(зима)</label>\n \
        <input type="radio" id="twocomp" name="someGroupName" required="">\n \
        <label for="twocomp">Без резины(зима)</label> \
        ';
    }
    else if (selectChoice == 3) {
        let checkBox = document.getElementById("option-choices");
        checkBox.innerHTML = '\
        <input type="checkbox" id="acryl">\n \
        <label for="acryl">С резиной(зима)</label>\n \
        <input type="checkbox" id="base">\n \
        <label for="base">С чехлами</label>\n \
        <input type="checkbox" id="powder">\n \
        <label for="powder">С набором автосалона</label> \
        ';
    }
  }
  
  function getSum() {
    let selectChoice = document.getElementsByName("product-choice")[0].value;
    let sums = [1119000, 1950000, 2200000];
    let resultSum = sums[selectChoice - 1] + checkOptions(selectChoice);
  
    let amount = document.getElementById("amount-of-products").value;
    if (amount.match(/^[0-3]$/))
        resultSum *= amount;
    else
        alert("Error");
    let result = document.getElementById("result");
    result.innerHTML = "Стоимость вашей покупки: "+resultSum+ " рублей";
    let prodPrice = document.getElementById("prodPrice");
    prodPrice.innerHTML = price;
  }
  
  function checkOptions(choice) {
    if (choice == 2) {
        let checkbox1 = document.getElementById("onecomp");
        let checkbox2 = document.getElementById("twocomp");
  
        return (checkbox1.checked ? 0 : 0) || (checkbox2.checked ? 15000 : 0);
    }
    else if (choice == 3) {
        let checkbox1 = document.getElementById("acryl");
        let checkbox2 = document.getElementById("base");
        let checkBox3 = document.getElementById("powder");
  
        return (checkbox1.checked ? 15000 : 0) + (checkbox2.checked ? 25000 : 0) + (checkBox3.checked ? 500 : 0);
    }
    else 
        return 0;
  }

  $(".lazy").slick({
    lazyLoad: "ondemand",
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 800
  });

  document.getElementById("openFormButton").addEventListener("click", function() {
    document.getElementById("popupForm").style.display = "block";
    history.pushState({ formOpen: true }, '', '/haw9k.github.io');
    
  });
  


  document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    var slapform = new Slapform();
slapform.submit({
form: 'JgYvTFOzr',
data: {
name: '',
message: '',
}
})
    .then(function (response) {
    console.log('Success', response)
    })
    .catch(function (e) {
    console.error('Fail', e)
    })

    document.getElementById("popupForm").style.display = "none"; 
  });
  function closePopup() {
    document.getElementById("popupForm").style.display = "none";
    window.location.href = "/haw9k_8.github.io/new/new2/index.html";
  }