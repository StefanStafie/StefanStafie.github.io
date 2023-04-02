function expandProjects(id) {
    var element = document.getElementById(id);
    if(element.style.flexWrap == "wrap"){
        element.style.flexWrap = "nowrap";    
    }
    else {
        element.style.flexWrap = "wrap"
    }
}