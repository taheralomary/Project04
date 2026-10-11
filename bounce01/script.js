const profilePhoto = document.getElementById('profilePhoto');
const professionalButton = document.getElementById('professionalButton');
const casualButton = document.getElementById('casualButton');
const status = document.getElementById('status');

function switchPhoto(source, altText, message) {
    profilePhoto.classList.add('switching');

    setTimeout(function () {
        profilePhoto.src = source;
        profilePhoto.alt = altText;
        profilePhoto.classList.remove('switching');
        status.textContent = message;
    }, 180);
}

professionalButton.addEventListener('click', function () {
    switchPhoto('assets/professional.svg', 'Professional profile photo placeholder', 'Professional photo selected.');
});

casualButton.addEventListener('click', function () {
    switchPhoto('assets/casual.svg', 'Casual profile photo placeholder', 'Casual photo selected.');
});
