function changeLanguageToEN(){
    document.getElementById("aboutMe").innerHTML = "About me";
    document.getElementById("skills").innerHTML = "Skills";
    document.getElementById("projects").innerHTML = "Projects";
    document.getElementById("contact").innerHTML = "Contact";
    document.getElementById("aboutMeR").innerHTML = "About me";
    document.getElementById("skillsR").innerHTML = "Skills";
    document.getElementById("projectsR").innerHTML = "Projects";
    document.getElementById("contactR").innerHTML = "Contact";
    document.getElementById("titleAboutMe").innerHTML = "About me";
    document.getElementById("description").innerHTML = "My name is Arkadiusz Wójtowicz. Currently I am studying IT at University of Technology in Lublin, where I graduated with an engineering degree. Currently, I started my second degree studies from February. <br><br>I have been in contact with programming for several years, it was only during my studies that I was convinced that PHP is the programming language in which I want to develop. I am currently learning the Symfony framework.";
    document.getElementById("titleAbilities").innerHTML = "Skills";
    document.getElementById("titleProjects").innerHTML = "Projects";
    document.getElementById("titleContact").innerHTML = "Contact";
    document.getElementById("know").innerHTML = "Technologies that I know and use every day";
    document.getElementById("learn").innerHTML = "Technologies that I learn to use in projects";
    document.getElementById("had").innerHTML = "Technologies learned on the development path";
    document.getElementById("opiniusText").innerHTML = "This is a website that collects information about electronic equipment. The Internet user has the opportunity to find equipment that interests him, e.g. a telephone. He can browse reviews about these smartphones, about a particular brand or use the search engine to find a specific model. To add an opinion, you should register. The system is controlled by admin, who can e.g. delete individual reviews.";
    document.getElementById("opiniusTech").innerHTML = "Technologies used:  PHP, MySQL, JavaScript, jQuery, HTML, CSS, CSS Grid";
    document.getElementById("tyeText").innerHTML = "Website for learning English. The user selects the level of difficulty, followed by the exercise layout. You should provide the equivalent word in Polish or English. You can preview the first letter and each subsequent one.";
    document.getElementById("tyeTech").innerHTML = "Technologies used:  JavaScript, HTML, CSS";
    document.getElementById("goToGitHubOpinius").innerHTML = "Go to GitHub";
    document.getElementById("goToSiteOpinius").innerHTML = "Go to website";
    document.getElementById("goToGitHubTye").innerHTML = "Go to GitHub";
    document.getElementById("goToSiteTye").innerHTML = "Go to website";
    document.getElementById("copyEmail").innerHTML = "Click to copy!";
    
    
}
function changeLanguageToPL(){
    document.getElementById("aboutMe").innerHTML = "O mnie";
    document.getElementById("skills").innerHTML = "Umiejętności";
    document.getElementById("projects").innerHTML = "Projekty";
    document.getElementById("contact").innerHTML = "Kontakt";
    document.getElementById("aboutMeR").innerHTML = "O mnie";
    document.getElementById("skillsR").innerHTML = "Umiejętności";
    document.getElementById("projectsR").innerHTML = "Projekty";
    document.getElementById("contactR").innerHTML = "Kontakt";
    document.getElementById("titleAboutMe").innerHTML = "O mnie";
    document.getElementById("description").innerHTML = "Nazywam się Arkadiusz Wójtowicz. Aktualnie studiuję informatykę na Politechnice Lubelskiej, gdzie ukończyłem pierwszy stopień studiów zdobywając tytuł inżyniera. Od lutego zacząłem studia II stopnia. <br><br> Z programowaniem mam styczność już kilka lat, dopiero na studiach utwierdziłem się w przekonaniu, że język PHP to ten język programowania, w którym chcę się rozwijać. Aktualnie uczę się frameworka Symfony.";
    document.getElementById("titleAbilities").innerHTML = "Umiejętności";
    document.getElementById("titleProjects").innerHTML = "Projekty";
    document.getElementById("titleContact").innerHTML = "Kontakt";
    document.getElementById("know").innerHTML = "Technologie, które znam i wykorzystuję na codzień";
    document.getElementById("learn").innerHTML = "Technologie, których uczę się, aby wykorzystywać w projektach";
    document.getElementById("had").innerHTML = "Technologie poznane na ścieżce rozwoju";
    document.getElementById("opiniusText").innerHTML = "Jest to serwis zbierający informacje o sprzęcie elektroniczym. Internauta ma możliwość znalezienia interesującego go sprzętu np. telefonu. Może przeglądać opinie o tych smartfonach, o konkretnej marce lub użyć wyszukiwarki do znalezienia konkretnego modelu. Aby dodać opinię należy się zarejestrować do serwisu. Kontrolę nad systemem sprawuje admin, który może np. usuwać poszczególne opinie.";
    document.getElementById("opiniusTech").innerHTML = "Użyte technologie:  PHP, MySQL, JavaScript, jQuery, HTML, CSS, CSS Grid";
    document.getElementById("tyeText").innerHTML = "Strona internetowa służąca do nauki języka angielskiego. Użytkownik wybiera poziom trudności, po czym ukazuje mu się layout ćwiczeniowy. Należy podać odpowiednik słówka w języku polskim lub angielskim. Można podejrzeć pierwszą literę i każdą kolejną.";
    document.getElementById("tyeTech").innerHTML = "Użyte technologie:  JavaScript, HTML, CSS";
    document.getElementById("goToGitHubOpinius").innerHTML = "Przejdź do GitHub";
    document.getElementById("goToSiteOpinius").innerHTML = "Przejdź do strony";
    document.getElementById("goToGitHubTye").innerHTML = "Przejdź do GitHub";
    document.getElementById("goToSiteTye").innerHTML = "Przejdź do strony";
    document.getElementById("copyEmail").innerHTML = "Kliknij aby skopiować!";


}


function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}
