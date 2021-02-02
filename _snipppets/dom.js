const element = document.querySelector("p");

/* ############### innerHTML ###############
  Gets or sets the HTML or XML markup contained within the element.
########################################### */
element.innerHTML;

/* ############### outerHTML ###############
  The outerHTML attribute of the Element DOM interface
  gets the serialized HTML fragment describing the element
  including its descendants.
########################################### */
element.outerHTML;

/* ############### getElementsByClassName ###############
  Returns an array-like object of all child elements
  which have all of the given class name(s). 
########################################### */
document.getElementsByClassName("className");

/* ############### getElementById ###############
  Returns an Element object representing the element
  whose id property matches the specified string.
########################################### */
document.getElementById("elementId");

/*################# Query Selector #################
  Select the target element, could be id, class or tag
#################################################### */
document.querySelector("element");

/* ############ Query Selector All ############
  Select all the target elements,
  and save them into array,
  could be id, class or tag
############################################## */
document.querySelectorAll("element");

/* ############ className ############
  Returns the value of the element's
  class content attribute.
  Can be set to change it.
############################################## */
document.querySelector("element").className = "new-class";

/* ############ classList.add ############
  Adds a new class to the existing array of classes.
############################################## */
element.classList.add("new-class");

/* ##################### classList.remove #####################
  Remove the provided class from the existing array of classes.
############################################################## */
element.classList.remove("packprop");

/* ############### classList.toggle ###############
  Adds the provided class to the array of classes,
  acts like a switch.
################################################## */
element.classList.toggle("--active");

/* ############## classList.replate ##############
  Replace the provided class with a another one.
################################################# */
element.classList.replace("packprop", "another-class");

/* ############## element.artributes ##############
  Returns all attributes within an element.
########################################### */
element.attributes;

/* ############## element.hasAttribute ##############
  Returns true or false if attribute exists
  withing provided element.
########################################### */
element.hasAttribute("class");

/* ############## element.getAttribute ##############
  Returns the value of given attribute.
########################################### */
element.getAttribute("src");

/* ############## element.setAttribute ##############
  Create a new attribute to the given element.
########################################### */
element.setAttribute("alt", "my-image");

/* ############## element.removeAttribute ##############
  Remove attribute of given element.
######################################################## */
element.removeAttribute("title");

/* ############## element.style ##############
  Returns all styles applied to element.
############################################## */
element.style;

/* ############## element.style.propertyName ##############
  Set name and value inline style of given element.
########################################################## */
element.style.color = "crimson";

/* ############## element.style.cssText ##############
  Set css inline styles.
########################################################## */
element.style.cssText = "color:crimson;background-color:black;";
