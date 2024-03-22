document.addEventListener('DOMContentLoaded', function() {
    const annotationsData = {
        wingL: 'These are the wings. Butterflies are known for their colorful wings.',
        wingR: 'These are the wings. Butterflies are known for their colorful wings.',
        head: 'This is the head, where the antannae  and proboscis are linked.',
        thorax: 'This is the Thorax, where all 6 legs and wings are attached.',
        abdomen: 'This is the Abdomen, it contains the digestive system and the reproductive organs.',
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
});
