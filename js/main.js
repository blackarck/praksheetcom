/*
Main js file for Praksheet
Author - VS
Sep 22
*/

console.log("starting up praksheet");

function openCont(tabname,btnname) {
    var i;
    var x = document.getElementsByClassName("contentwrapper");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
     
    }
    x = document.getElementsByClassName("btnformat");
    for (i = 0; i < x.length; i++) {
      x[i].style.borderBottom = "none";
    }
    document.getElementById(tabname).style.display = "block";
    document.getElementById(btnname).style.borderBottom = "3px solid rgb(230, 106, 24)";
  }


  /******* Scroll Animation Code */
  
  const feature1 = document.querySelector('.feature1');
  const feature2 = document.querySelector('.feature2');
  const feature3 = document.querySelector('.feature3');
  const feature4 = document.querySelector('.feature4');
  const feature5 = document.querySelector('.feature5');
  const intro5   = document.querySelector('.intro5wrapper');
  const imgbox1   = document.querySelector('.imgbox1');
  const imgbox2   = document.querySelector('.imgbox2');

  feature1.classList.remove('zoomin');
  feature2.classList.remove('zoomin');
  feature3.classList.remove('zoomin');
  feature4.classList.remove('zoomin');
  feature5.classList.remove('zoomin');
  intro5.classList.remove('opacanim');
  imgbox1.classList.remove('easins1');
  imgbox2.classList.remove('easout1');

  // Create the observer1, same as before:
  const observer1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        feature1.classList.add('zoomin');
        return;
      }
      feature1.classList.remove('zoomin');
      
    });
  });

    // Create the observer, same as before:
    const observer2 = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          feature2.classList.add('zoomin');
          return;
        }
        feature2.classList.remove('zoomin');
      });
    });

      // Create the observer, same as before:
      const observer3 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            feature3.classList.add('zoomin');
            return;
          }
          feature3.classList.remove('zoomin');
        });
      });

      const observer4 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            feature4.classList.add('zoomin');  
            return;
          }
          feature4.classList.remove('zoomin');
        });
      });

      const observer5 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) { 
            feature5.classList.add('zoomin');
            return;
          }
          feature5.classList.remove('zoomin');
        });
      });

      const observerintro5 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) { 
            intro5.classList.add('opacanim');
            return;
          }
          intro5.classList.remove('opacanim');
        });
      });

      const observerimgb1 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) { 
            imgbox1.classList.add('easins1');
            return;
          }
          imgbox1.classList.remove('easins1');
        });
      });

      const observerimb2 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) { 
            imgbox2.classList.add('easout1');
            return;
          }
          imgbox2.classList.remove('easout1');
        });
      });


  observer1.observe(document.querySelector('.feature1'));
  observer2.observe(document.querySelector('.feature2'));
  observer3.observe(document.querySelector('.feature3'));
  observer4.observe(document.querySelector('.feature4'));
  observer5.observe(document.querySelector('.feature5'));

  observerintro5.observe(document.querySelector('.intro5wrapper'));

  observerimgb1.observe(document.querySelector('.imgbox1'));
  observerimb2.observe(document.querySelector('.imgbox2'));
  
  