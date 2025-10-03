import Route from "./route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/galerie", "Galerie", "/pages/galerie.html"),
    new Route("/connexion", "Connexion", "/pages/auth/connexion.html"),
    new Route("/inscription", "Inscription", "/pages/auth/inscription.html"),
    new Route("/monCompte", "Mon Compte", "/pages/auth/monCompte.html"),
    new Route("/editPassword", "Modifier mot de passe", "/pages/auth/editPassword.html"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";