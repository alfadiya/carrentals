document.getElementById('calendar-icon').addEventListener('click', function() {
    document.getElementById('datetime-input').focus(); // Focus the input to open the default picker
  document.getElementById('datetime-input').style.color ='#000000';
  document.getElementById('placeholder1').style.color = 'rgba(0, 0, 0, 0)';
});
document.getElementById('calendar-icon2').addEventListener('click', function() {
    document.getElementById('datetime-input2').focus(); // Focus the input to open the default picker
    document.getElementById('datetime-input2').style.color ='#000000';
  document.getElementById('placeholder2').style.color = 'rgba(0, 0, 0, 0)';
});


//to display drop off location  input box
function dropOffDetails() {
  document.getElementById("dropLocationEl").style.display = 'inline';
}
function pickUpDetails() {
  document.getElementById("dropLocationEl").style.display = 'none';
}

//JavaScript to handle hover effect
const redCar = document.getElementById('redcar');
const blueCar = document.getElementById('bluecar');

 redCar.addEventListener('mouseover', () => {
    blueCar.style.display = 'none'; // Hide blue car
  });
  
  redCar.addEventListener('mouseout', () => {
    blueCar.style.display = ''; // Show blue car again
  });

  blueCar.addEventListener('mouseover', () => {
    redCar.style.display = 'none'; // Hide blue car
  });
  
  blueCar.addEventListener('mouseout', () => {
    redCar.style.display = ''; // Show blue car again
  });


//to make toggle icon clickable in frequently asked section
let faqAnswer=document.getElementById("faqAnswer1");

let icon = document.getElementById('toggleIcon');

function showAnswer() {
  faqAnswer.classList.toggle('display-answer');
  let plusIcon = './images/plus-icon.svg';
  const crossIcon = './images/x-icon.svg';
  let currentSrc = icon.getAttribute('src');
  // Toggle between the icons
  if (currentSrc === plusIcon) {
    icon.setAttribute('src', crossIcon);
  } else {
    icon.setAttribute('src', plusIcon);
  }
}
