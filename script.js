document.getElementById("wish-button").addEventListener("click", function() {
  alert("Happy Birthday, Mom! Wishing you all the happiness in the world!");
  
  const container = document.querySelector('.container');
  container.classList.add('party-blast');


  const cake = document.createElement('img');
  cake.src = 'tenor.gif'; 
  cake.alt = 'Birthday Cake';
  cake.classList.add('cake-animation');
  document.body.appendChild(cake);

  setTimeout(() => {
    cake.remove(5);
  }, 5000); 
});
