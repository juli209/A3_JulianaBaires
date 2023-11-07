//This code below is for the fullpage.js plugin. autoscrolling is part of the initialization with vanilla javascript. I took out scrollHorizontally: true because I did not use it in my code
new fullpage('#fullpage', {
	autoScrolling:true, // allows for automatic scrolling to different sections
    navigation: true, // this adds a navigation bar with dots on the right hand side of the website, for quick access to different sections
    navigationTooltips: ['header', 'highlights', 'bags', 'steal their look' ,'contact'] //these are labels for the navigation dots
});

//below is the GSAP code
//NOTE: IntertiaPlugin is a club GSAP perk - this is a trial plugin that works on localhost, codepen, codesandbox and stackblitz - InertiaPlugin does NOT work with Netlify
//gsap.registerPlugin(Draggable), gsap.registerPlugin(InertiaPlugin); //this registers the draggable and intertia plugin from GSAP. This enables elements to be draggable, but also have momentum when dragged.


// this creates a draggable instance for the 1st decal element - we are able to select the class
Draggable.create(".decal1", {
    bounds: document.getElementById("section highlights-section"), //the decal is bound to the container of the highlights section
    // inertia: true, //enabling inertia 
    onClick: function () { //event listener for any click events on the decal
        console.log("clicked"); // logs a click in console
      },
      onDragEnd: function () { //event listener for when the dragging action ends from the user
        console.log("drag ended");//logs when the dragging action ends from the user
      },
})


//REPEAT for decal 2 
gsap.registerPlugin(Draggable), gsap.registerPlugin(InertiaPlugin);

Draggable.create(".decal2", {
    bounds: document.getElementById("section highlights-section"),
    // inertia: true,
    onClick: function () {
        console.log("clicked");
      },
      onDragEnd: function () {
        console.log("drag ended");
      },
})



