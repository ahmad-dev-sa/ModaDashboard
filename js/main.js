$(document).ready(function(){
    
    //disabled all button they are not need to post back
    $(".active2, .dashboard").click(function() {
        $(this).attr("disabled", "disabled");
    });
    $("#dropbtn").click(function() {
        $(this).attr("disabled", "disabled");
    });
    $("#navbar-brand").click(function() {
        $(this).attr("disabled", "disabled");
    });


    

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


      
    $(".more-button, .body-overlay").on('click', function(){
        $('#sidebar, .body-overlay').toggleClass('show-nav');
    });


    $('#framework').multiselect({
        nonSelectedText: 'Select Framework',
        enableFiltering: true,
        enableCaseInsensitiveFiltering: true,
        buttonWidth:'400px'
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
