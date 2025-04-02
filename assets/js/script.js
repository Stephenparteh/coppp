
function toggleDropdown(section) {
    const content = section.querySelector('p');
    const icon = section.querySelector('.dropdown-icon');

    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
        icon.classList.add('active');
    } else {
        content.style.display = 'none';
        icon.classList.remove('active');
    }
}


document.querySelectorAll('.respect, .accountability, .equity, .impact').forEach(section => {
    const icon = section.querySelector('.dropdown-icon');
    const content = section.querySelector('p');

    // Hide content by default
    content.style.display = 'none';

    // Toggle on icon click
    icon.addEventListener('click', () => toggleDropdown(section));
});

// Language dropdown functionality
function changeLanguage(lang) {
    alert(`Language changed to ${lang}`)
}


