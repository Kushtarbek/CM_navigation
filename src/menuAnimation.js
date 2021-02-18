
export  const menuAnimation = () =>{
  const lines = document.querySelectorAll('hr');
  const aTag = document.querySelectorAll('a');
  aTag.forEach( a => a.addEventListener( 'click', (e)=> getSize( e.target )));
  function getSize(a){
    let city_length = a.offsetWidth;
    clearHorizontals()
    let hr = a.nextElementSibling;
    hr.classList.toggle('active');
    hr.setAttribute('width', city_length+"px");

  }

  function clearHorizontals(){
    lines.forEach( line => line.classList.remove('active'));
  }
}
