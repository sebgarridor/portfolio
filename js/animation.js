  //creating IntersectionObserver
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else { //this will make the animation appear again and again if it crosses your viewport
            entry.target.classList.remove('show');
        }
  
    });
  });
  
  //getting all the elements with the class 'hidden'
  const hiddenElements = document.querySelectorAll('.hidden');
  
  hiddenElements.forEach((el) => observer.observe(el));
  