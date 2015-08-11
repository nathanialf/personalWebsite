function toggle_collapse(elid)
{
  newid = elid.substr(0, elid.length - 7);
  newid += "_collapse";
  
  if(document.getElementById(elid).innerHTML === "Show Less")
  {
    document.getElementById(elid).innerHTML = "Show More";
    document.getElementById(newid).style.fontSize = "0px";
    document.getElementById(newid).style.marginTop = "-50px";
  }
  else
  {
    document.getElementById(elid).innerHTML = "Show Less";
    document.getElementById(newid).style.fontSize = "18px";
    document.getElementById(newid).style.marginTop = "0px";
  }
}