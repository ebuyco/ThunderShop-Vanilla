// function call slider

function Slider(slider){

    if(!(slider instanceof Element)){
          throw new Error('No Slider passed in');
    }

      let prev;
      let current;
      let next;


    const slides = slider.querySelector('.slides');
    const prevButton= slider.querySelector('.goToPrev');
    const nextButton = slider.querySelector('.goToNext');

    let time = 50;
    const allSlides = [...document.querySelectorAll('.slides')];
    function initSlider() {
      // Set the CSS transition on the slides to the value we specified in SLIDETIME above
      allSlides.forEach(slide =>
        slide.setAttribute(
          'style',
          `transition: transform ${time}ms ease;
                      animation-duration: ${time}ms`,
        ),
      );
      // setTimeout(time);
    }

    function startSlider(){
          current = slider.querySelector('.current') || slides.firstElementChild;
          prev = current.previousElementSibling || slides.lastElementChild;
          next = current.nextElementSibling || slides.firstElementChild;
          console.log({
                current,
                prev,
                next
          });



    }


    function applyClasses(){
          current.classList.add('current');
          prev.classList.add('prev');
          next.classList.add('next');
    }

    function move(direction){
            const classesToRemove = ['prev', 'current', 'next'];
            prev.classList.remove(...classesToRemove);
            current.classList.remove(...classesToRemove);
            next.classList.remove(...classesToRemove);

          if(direction === 'back'){
                  [prev, current, next,] = [
                      prev.previousElementSibling || slides.lastElementChild,
                      prev,
                      current,

                  ];
          } else {

            [prev, current, next] = [
                current,
                next,
                next.nextElementSibling || slides.firstElementChild
            ]
          }
          applyClasses();

    }

    startSlider();
    applyClasses();
    setTimeout(() => {
     initSlider();
    }, 1000);

    // initSlider();

    prevButton.addEventListener('click', () => move('back'));
    nextButton.addEventListener('click', move);

}


const mySlider = Slider(document.querySelector('.slider'));

