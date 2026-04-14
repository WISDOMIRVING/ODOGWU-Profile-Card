document.addEventListener('DOMContentLoaded', () => {
    const timeElement = document.getElementById('userTime');
    const avatarImg = document.getElementById('userAvatar');
    const avatarUrlInput = document.getElementById('avatarUrl');
    const avatarFileInput = document.getElementById('avatarFile');
    const applyUrlBtn = document.getElementById('applyUrl');
    const triggerUploadBtn = document.getElementById('triggerUpload');

    /**
     * Update Task Time
     * Refreshes the test-user-time element with Date.now()
     */
    function updateTime() {
        if (timeElement) {
            timeElement.textContent = Date.now();
        }
    }

    // Initial update and periodic interval (1000ms as per guidance)
    updateTime();
    setInterval(updateTime, 1000);

    /**
     * Handle Image URL Update
     */
    applyUrlBtn.addEventListener('click', () => {
        const url = avatarUrlInput.value.trim();
        if (url) {
            avatarImg.src = url;
            // Handle image load error
            avatarImg.onerror = () => {
                alert('Failed to load image from URL. Please check the link.');
                avatarImg.src = 'avatar.png'; // Fallback
            };
        }
    });

    /**
     * Handle File Upload
     */
    triggerUploadBtn.addEventListener('click', () => {
        avatarFileInput.click();
    });

    avatarFileInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                avatarImg.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });

    // Keyboard accessibility for the avatar button
    triggerUploadBtn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            avatarFileInput.click();
        }
    });
});
