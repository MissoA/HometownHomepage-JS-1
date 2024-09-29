document.getElementById("gifButton").addEventListener("click", function() {
    // Hide the button
    this.style.display = "none";
    
    // Show the GIF
    const gifImage = document.getElementById("gifImage");
    gifImage.style.display = "block";
});
var img;

// Describe this function...
function load_gallery() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_flower = document.getElementById('flower');
  element_flower.setAttribute("src", img[0]);
}


img = ['https://saudipedia.com/saudipedia/uploads/images/2023/08/26/thumbs/400x400/65450.jpg', 'https://www.marefa.org/w/images/5/5c/%D9%85%D8%AA%D8%AD%D9%81_%D8%A8%D8%B1%D9%8A%D8%AF%D8%A9_%D8%A7%D9%84%D8%AA%D8%B1%D8%A7%D8%AB%D9%8A.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Nakheel-Aliskandaria.JPG/247px-Nakheel-Aliskandaria.JPG'];
load_gallery();


document.getElementById('next').addEventListener('click', (event) => {
  img.push(img[0]);
  img.shift();
  load_gallery();

});

document.getElementById('prev').addEventListener('click', (event) => {
  img.unshift(img.slice(-1)[0]);
  img.pop();
  load_gallery();

});