
// let id = document.querySelector('id-question')




// document.body.onload = load;

// const load = () =>  {
  
//   id.style.display = 'block';
// } 



$(document).ready(() => {
    
 
  //   $(`.id-question`).on('load', () => {
  //   $(`body`).css({
  //     'filter': 'blur(3px)',
  //     '-webkit-filter': 'blur(3px)',
  //     '-moz-filter': 'blur(3px)',
  //     '-o-filter': 'blur(3px)',
  //     '-ms-filter': 'blur(3px)'
  //   });
  // });
  
  $(`.yes`).on('click', () => {
      $(`.id-question`).hide();
    });
  
  });