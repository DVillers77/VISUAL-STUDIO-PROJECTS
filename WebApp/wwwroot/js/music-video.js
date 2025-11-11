// JavaScript for mouse-over red ripple effect (Step 105)

document.addEventListener('mousemove', function (e) {
    // 1. Create the ripple element
    const ripple = document.createElement('div');
    ripple.className = 'ripple';

    // 2. Set the initial position and size based on the mouse cursor
    // Set initial size (e.g., 30px)
    const size = 30;
    ripple.style.width = size + 'px';
    ripple.style.height = size + 'px';

    // Position the ripple centered on the cursor
    ripple.style.left = (e.pageX - size / 2) + 'px';
    ripple.style.top = (e.pageY - size / 2) + 'px';

    // 3. Add the ripple to the body
    document.body.appendChild(ripple);

    // 4. Activate the animation class (scale up and fade out)
    requestAnimationFrame(() => {
        ripple.classList.add('active');
    });

    // 5. Remove the element after the animation finishes (0.4s from CSS)
    setTimeout(() => {
        ripple.remove();
    }, 400);
});