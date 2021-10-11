$(document).ready(function(){

    

    //This for Button collapse sidebar
    $("#sidebar-collapse").on('click', function(){
        $('#sidebar').toggleClass('active');
        $('#content').toggleClass('active');
   // change icon when collapse sidebar
        if ($(".mydivclass")[0]){
            $("#sidebar-collapse .material-icons").removeClass("d-none")
        } else {
            $("#sidebar-collapse .material-icons").toggleClass('d-none');
        }
    
    });

  //Colose Menue when click another
    var $myGroup = $('#myGroupsidebar');
    $myGroup.on('show.bs.collapse','.collapse', function() {
    $myGroup.find('.collapse.show').collapse('hide');
    });

   //Mack top navbar when is active
    $('.top-navbar, #navbarcollapse').click(function(){
        if ($("show")[0]){
            $('.nav-item .dropdown').addClass("active");
        } else {
            $('.nav-item .dropdown').removeClass("active");
        }
    });

    

    $('#buttonR').click(function(){
        if ($("show_R")[0]){
            $("#dropdownButtonChart, .dropdown-content").removeClass("show_R");
        }else{
            $("#dropdownButtonChart, .dropdown-content").addClass("show_R");
        }
    });

    $('#buttonL').click(function(){
        if ($("show_R")[0]){
            $("#dropdownButtonChart, .dropdown-content2").removeClass("show_R");
        }else{
            $("#dropdownButtonChart, .dropdown-content2").addClass("show_R");
        }
    });

    
    
//document.getElementById("dropdownButtonChart2").classList.toggle("show"); 


    
      
    $(".more-button, .body-overlay").on('click', function(){
        $('#sidebar, .body-overlay').toggleClass('show-nav');
    });




 });

    //Darck Mode & Light Mode
    var checkbox = document.querySelector('input[name=theme]');

    checkbox.addEventListener('change', function() {
    if(this.checked) {
    trans()
    document.documentElement.setAttribute('data-theme', 'dark')
    } else {
    trans()
    document.documentElement.setAttribute('data-theme', 'light')
    }
    })

    let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
    document.documentElement.classList.remove('transition')
    }, 1000)
    }



  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }else if(openDropdown.classList.contains('show_R')){
            openDropdown.classList.remove('show_R');
        }
      }
    }
  }
