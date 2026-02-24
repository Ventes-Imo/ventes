document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. Gestion de la modale (Lightbox) pour les images ---
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("expandedImg");
    const captionText = document.getElementById("caption");
    const closeModal = document.querySelector(".close-modal");

    // Sélectionner toutes les images ayant la classe 'zoomable'
    const images = document.querySelectorAll(".zoomable");

    images.forEach(img => {
        img.addEventListener("click", function() {
            modal.style.display = "block";
            modalImg.src = this.src;
            // Récupérer le texte de description situé juste en dessous de l'image
            const description = this.nextElementSibling.innerText;
            captionText.innerHTML = description;
        });
    });

    // Fermer la modale au clic sur la croix
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Fermer la modale si on clique à l'extérieur de l'image
    modal.addEventListener("click", (e) => {
        if (e.target !== modalImg) {
            modal.style.display = "none";
        }
    });

    // --- 2. Action du bouton de contact ---
    const contactBtn = document.querySelector(".contact-btn");
    contactBtn.addEventListener("click", () => {
        window.open("https://www.seloger.com/annonces/achat/maison/dagneux-01/258CMALPR15N.htm?serp_view=list&search=distributionTypes%3DBuy%2CBuy_Auction%2CCompulsory_Auction%26estateTypes%3DHouse%2CApartment%26locations%3DAD08FR132&sort_order_ab_test=sort_order_variant#ln=classified_search_results&m=classified_search_results_classified_classified_detail_M"); 
    });

});