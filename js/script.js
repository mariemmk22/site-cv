
$(document).ready(function(){
	$(".nav-link").on('click', function(event) {

    	if (this.hash !== "") {

			event.preventDefault();

			var hash = this.hash;

			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 700, function(){
				window.location.hash = hash;
			});
      	} 
    });
});


emailjs.init("yinh8IC1-4vj9NNLs"); // Remplacez par votre propre PUBLIC KEY
    
// Récupérer le formulaire
const form = document.getElementById('contactForm');

// Vérifier si le formulaire est bien récupéré
if (form) {
	// Lorsque le formulaire est soumis
	form.addEventListener('submit', function (event) {
		event.preventDefault(); // Empêche l'envoi classique du formulaire

		// Affichage des données pour vérifier qu'elles sont récupérées correctement
		const formData = new FormData(form);
		console.log('Données du formulaire:', Object.fromEntries(formData.entries()));

		// Envoyer les données à EmailJS avec le modèle que vous avez configuré
		emailjs.sendForm('service_xl3249r', 'template_do7qvge', form)
			.then(function(response) {
				console.log("Message envoyé avec succès", response);
				alert("Votre message a été envoyé !");
			}, function(error) {
				console.error("Erreur lors de l'envoi", error);
				alert("Une erreur est survenue. Veuillez réessayer.");
			});
	});
} else {
	console.error("Formulaire introuvable !");
}
