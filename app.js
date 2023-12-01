function navigateTo(page) {
   
    const contentSections = document.querySelectorAll('main');
    contentSections.forEach(section => {
        section.style.display = 'none';
    });

   
    const selectedSection = document.getElementById(page);
    selectedSection.style.display = 'block';
}


navigateTo('home');