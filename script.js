document.addEventListener('DOMContentLoaded', function() {
    const annotationsData = {
        wingL: 'These are the Wings, which consist of two pairs, the forewings and hindwings. The wings are covered in tiny overlapping scales responsible for their vivid colors and patterns. These patterns serve as camouflage, mating, and warding off predators. ',
        wingR: 'These are the Wings, which consist of two pairs, the forewings and hindwings. The wings are covered in tiny overlapping scales responsible for their vivid colors and patterns. These patterns serve as camouflage, mating, and warding off predators. ',
        head: 'This is the Head. It houses the eyes, antennae, and mouthparts. The eyes are compund which provide a wide field of vision, allowing the butterfly to see in multiple directions at once. The mouthparts called a proboscis is a tube structure used for drinking nectar from flowers.',
        thorax: 'This is the Thorax. It is the central segment of the body, connecting the head, wings, and abdomen together. It houses the muscles that control the wings and legs, making it the main center for movement. Without it the butterfly could not fly, walk, or perform precise maneuvers while feeding or evading predators.',
        abdomen: "This is the Abdomen. It is the rear segment of the body, containing vital internal organs used in digestion, reproduction, and respiration. It allows for flexibility during movement and it contains spiracles for breathing, facilitating gas exchange necessary for metabolism.",
        antannaeL: "These are the Antennae. They are long, thin sensory organs attached to the head, playing a crucial role in navigation and sensing changes in their environment. Each antenna is covered with a variety of sensory receptors, without them the butterfly could not detect odors, sense vibrations, locate nectar-rich flowers, potential mates, or suitable locations for laying eggs.",
        antannaeR: "These are the Antennae. They are long, thin sensory organs attached to the head, playing a crucial role in navigation and sensing changes in their environment. Each antenna is covered with a variety of sensory receptors, without them the butterfly could not detect odors, sense vibrations, locate nectar-rich flowers, potential mates, or suitable locations for laying eggs."
        // Add future annotations HERE
    };

    Object.keys(annotationsData).forEach(part => {
        const overlay = document.getElementById(part);
        overlay.addEventListener('mouseover', function() {
            showAnnotation(part, annotationsData[part]);
        });
        overlay.addEventListener('mouseout', function() {
            hideAnnotation();
        });
    });

    const annotationDiv = document.createElement('div');
    annotationDiv.className = 'annotation';
    document.body.appendChild(annotationDiv);

    function showAnnotation(part, text) {
        const overlay = document.getElementById(part);
        const rect = overlay.getBoundingClientRect();
        annotationDiv.style.display = 'block';
        annotationDiv.textContent = text;
        annotationDiv.style.top = `${rect.top + window.scrollY + rect.height}px`;
        annotationDiv.style.left = `${rect.left + window.scrollX}px`;
    }

    function hideAnnotation() {
        annotationDiv.style.display = 'none';
    }

    let lastFactIndex = -1;

    const facts = [
        "Butterflies taste with their feet.",
        "Some butterfly species migrate long distances, like the Monarch butterfly.",
        "Butterflies have four wings, not two.",
        "The largest butterfly in the world has a wingspan of nearly 12 inches.",
        "A group of butterflies is called a flutter.",
        "Their eyes are made of 6,000 lenses and can see ultraviolet light.",
        "There are 165,000 known species of butterflies found on every continent except Antarctica.",
        "Butterfly wings move in a figure “8” motion.",
        "Despite popular belief, butterfly wings are clear – the colors and patterns we see are made by the reflection of the tiny scales covering them.",
        "The first meal after a caterpillar hatches is usually the eggshell from which it has just emerged.",
        "The process by which a caterpillar magically transforms into a butterfly is completed in 10 to 15 days, depending on the species.",
        "Butterflies are essentially cold-blooded.",
        "Males drink from mud puddles to extract minerals that aren’t available in flowers. This behavior is known as “puddling.”",
        "Some butterflies have been seen drinking blood from open wounds on animals.",
        "Scientists thought butterflies were deaf until the first butterfly ears were identified in 1912.",
        "Butterflies can see red, green, and yellow.",
        "Some people believe that when the black bands on the Woolybear caterpillar are wide, a cold winter is coming.",
        "The top butterfly flight speed is 12 miles per hour.",
        "Monarch butterflies journey from the Great Lakes to the Gulf of Mexico, a distance of about 2,000 miles, and return to the north again in the spring.",
        "Butterflies cannot fly if their body temperature is less than 86 degrees.",
        "Representations of butterflies are seen in Egyptian frescoes at Thebes, which are 3,500 years old.",
        "The Brimstone butterfly (Gonepterix rhamni) has the longest lifetime of the adult butterflies: 9-10 months.",
        // Add future facts HERE
    ];

    const showFactButton = document.getElementById('show-fact');
    const factDisplay = document.getElementById('fact-display');

    showFactButton.addEventListener('click', () => {
        let randomFactIndex = lastFactIndex;
        
        while (randomFactIndex === lastFactIndex) {
            randomFactIndex = Math.floor(Math.random() * facts.length);
        }
        
        lastFactIndex = randomFactIndex;
        
        factDisplay.textContent = facts[randomFactIndex];
    });
});
