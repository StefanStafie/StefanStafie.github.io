function expandProjects(button, id) {
    var element = document.getElementById(id);
    if(element.style.flexWrap == "wrap"){
        element.style.flexWrap = "nowrap";    
        button.textContent = "Expand...";
    }
    else {
        element.style.flexWrap = "wrap"
        button.textContent = "Collapse...";
    }
}
