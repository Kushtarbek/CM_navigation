import './styles.css';

const data = {
  "cities": [
    {
      "section": "cupertino",
      "label": "Cupertino"
    },
    {
      "section": "new-york-city",
      "label": "New York City"
    },
    {
      "section": "london",
      "label": "London"
    },
    {
      "section": "amsterdam",
      "label": "Amsterdam"
    },
    {
      "section": "tokyo",
      "label": "Tokyo"
    },
    {
      "section": "hong-kong",
      "label": "Hong Kong"
    },
    {
      "section": "sydney",
      "label": "Sydney"
    }
  ]
}

window.addEventListener('DOMContentLoaded',()=> displayContent(data.cities));


function displayContent(cities){
  const name_cities = cities.map( city => `<li><a href='#'>${city.label}</a></li>`).join('');
  const ul = document.querySelector('.output');
  ul.innerHTML = name_cities;
  loadOtherFunctionalities()
}

function loadOtherFunctionalities(){
  let ulWidth = document.querySelector( "ul" ).offsetWidth;
  let menu = document.querySelectorAll( "li" );
  let menu_slider_click = document.getElementById( 'nav_slide_click' );

  const horizontalMove = (e,hrWidth, tempMarginLeft) => {
          clearAllLinks();
          e.firstElementChild.classList.add('activeColor')
          menu_slider_click.style.width =  hrWidth + '%';
          menu_slider_click.style.marginLeft = tempMarginLeft + '%';
        }
  let tempMarginLeftSum=0;
  menu.forEach(li=>{
    const liWidth = li.offsetWidth;
    const aWidth = li.firstElementChild.offsetWidth;
    const hrWidth = aWidth/ulWidth * 98;

    const hrWidthStep = liWidth/ulWidth * 100;
    const tempMarginLeft = tempMarginLeftSum + liWidth/ulWidth;
    tempMarginLeftSum+=hrWidthStep;
    li.addEventListener("click", ()=>horizontalMove(li,hrWidth, tempMarginLeft + 5))

  })

  function clearAllLinks(){
    const links = document.querySelectorAll( "a" );
    for( let idx = 0; idx < links.length; idx++){
      console.log(links[idx]);
      links[idx].classList.remove('activeColor');
    }
  }

}
