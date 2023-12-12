function navigateTo(page) {
   
    const contentSections = document.querySelectorAll('section');

    contentSections.forEach(section => {
        section.style.display = 'none';
    });

   
    const selectedSection = document.getElementById(page);
    selectedSection.style.display = 'block';
}


navigateTo('home');

document.addEventListener('DOMContentLoaded', function () {
   
    const openButton = document.getElementById('openjoshuaButton');
    const openElizaButton = document.getElementById('openElizaButton');

    const hiddenMottoE ="The good news about computers is that they do what you tell them to do. The bad news is that they do what you tell them to do." ;
    const hiddenMotto ="The advance of technology is based on making it fit in so that you don't really even notice it, so it's part of everyday life.";

   
    openButton.addEventListener('click', function () {
        
        alert(hiddenMotto);
    });

  
    openElizaButton.addEventListener('click', function () {
      
        alert(hiddenMottoE);
    });
});
function showJoshuaResume() {
    var joshuaResume = document.getElementById('joshua-resume');
    var elizaResume = document.getElementById('eliza-resume');

    if (joshuaResume && elizaResume) {
        joshuaResume.style.display = 'block';
        elizaResume.style.display = 'none';
    }
}

function showElizaResume() {
    var joshuaResume = document.getElementById('joshua-resume');
    var elizaResume = document.getElementById('eliza-resume');

    if (joshuaResume && elizaResume) {
        joshuaResume.style.display = 'none';
        elizaResume.style.display = 'block';
    }
}