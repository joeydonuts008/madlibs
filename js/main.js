document.getElementById("madlib-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Get input values
    const adjective = document.getElementById("adjective").value;
    const noun1 = document.getElementById("noun1").value;
    const verb = document.getElementById("verb").value;
    const noun2 = document.getElementById("noun2").value;
    const animal = document.getElementById("animal").value;
    const place = document.getElementById("place").value;
    const weather = document.getElementById("weather").value;
    const time = document.getElementById("time").value;
    const exclamation = document.getElementById("exclamation").value;
    const action = document.getElementById("action").value;
  
    // Create the longer, fun story
    const story = `
      It was a ${weather} ${time} when a giant ${adjective} ${noun1} suddenly appeared in the town square!  
      The people screamed in terror as the giant began to ${verb} through the streets, crushing everything in its path.  
      "Oh no!" shouted a brave ${animal}, as they grabbed a ${noun2} to defend the town. But the giant was too strong!  
      "We need to think fast!" cried the ${animal}. "Quick, everyone! Follow me to ${place}, where we’ll be safe!"  
      But just as they started to run, the ${adjective} giant let out a loud roar and shouted, "${exclamation}!"  
      Everyone panicked and began to ${action} as fast as they could, but the giant was gaining on them.  
      Just then, a team of flying ${noun1} swooped down from the sky, distracting the giant long enough for the townspeople to escape.  
      After the giant was finally distracted, everyone arrived safely at ${place}, where they celebrated their victory.  
      "We did it!" they cheered. "We escaped the giant ${adjective} ${noun1}!" And they lived happily ever after. 
    `;
  
    // Display the story
    document.getElementById("story").innerHTML = story;
  });
  