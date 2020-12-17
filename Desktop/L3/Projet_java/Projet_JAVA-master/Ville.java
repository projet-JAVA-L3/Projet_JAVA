import java.util.Vector;

public class Ville {
    private boolean ecole;
    private String nom;
    private Vector <Ville> routes;

    /**
     * Constructeur Ville, initialise ses attributs
     * 
     * @param nom Nom de la ville
     */
    public Ville(String nom) {
        this.nom = nom;
        ecole = true;
        routes = new Vector <Ville> ();
    }

    /**
     * Ajoute une route entre la ville et une ville voisine
     * 
     * @param v Objet ville voisine (reliée par une route)
     */
    public void ajouteRoutes(Ville v) {
        if (!routes.contains(v)) {
            routes.add(v);
        } else {
            System.out.println("La ville "+nom+" a déjà une route avec "+v.getNom());
        }
    }

    /**
     * Supprime une route avec la ville voisine
     * 
     * @param v Objet ville voisine (reliée par une route)
     */
    public void retireRoutes(Ville v) {
        if (routes.contains(v)) {
            routes.remove(v);
        } else {
            System.out.println("La ville "+nom+" n'a pas de route avec "+v.getNom());
        }
    }

    /**
     * Ajoute une école à la ville
     */
    public void ajouteEcole() {
        if (!ecole) {
            ecole = true;
        } else {
            System.out.println("Cette ville possède déjà une école");
        }
    }

    /**
     * Retire une école à la ville
     */
    public void retireEcole() {
        if (ecole) {
            /**
             * Vérifie qu'au moins une ville voisine possède une école
             */
            boolean testEcoleVoisine = false;
            for (Ville villeVoisine : routes) {
                if (villeVoisine.getEcole()) {
                    testEcoleVoisine = true;
                }
            }

            /**
             * Si au moins une ville voisine possède une école, vérifie pour chaques villes voisine ne possédant pas d'école, 
             * si elles possèdent au moins dans leur voisinage une ville ayant une école (excepté l'objet ville courant)
             */
            if (testEcoleVoisine) {
                boolean testEcoleLointaine;
                ecole = false;
                for (Ville villeVoisine : routes) {
                    testEcoleLointaine = false;
                    if (!villeVoisine.getEcole()) {
                        for (Ville villeLointaine : villeVoisine.getRoutes()) {
                            if (villeLointaine.getEcole() && !villeLointaine.equals(this)){
                                testEcoleLointaine = true;
                            }
                        }
                        if (!testEcoleLointaine) {
                            System.out.println("Action impossible ! La ville voisine "+villeVoisine.getNom()+" n'aura plus accès à une école !");
                            ecole = true;
                        }
                    }
                }
            } else {
                System.out.println("Impossible de retirer cette école, car aucune ville voisine n'en possède");
            }

        } else {
            System.out.println("Cette ville ne possède déjà pas d'école");
        }
    }
    /**
     * Getter du nom de la ville
     * 
     * @return Retourne le nom de la ville
     */
    public String getNom() {
        return nom;
    }

    /**
     * Getter de la liste de villes voisines (routes)
     * 
     * @return Retourne la liste de routes 
     */
    public Vector<Ville> getRoutes() {
        return routes;
    }

    /**
     * Getter de l'école de la ville
     * 
     * @return Retourne true s'il y a une école, false sinon
     */
    public boolean getEcole() {
        return ecole;
    }

    /**
     * Verifie si la ville a accès à une école 
     *
     * @return Retourne true si la ville a accès à une école, false sinon
     */
    public boolean accessibilite() {
        if(ecole) return true; // Vérifie si la ville possède une école
        else {
            /**
             * Vérifie qu'au moins une ville voisine possède une école
             */
            for (Ville villeVoisine : routes) {
                if (villeVoisine.getEcole()) {
                    return true;
                }
            }
        }
        return false;
    }


public boolean ifRetireEcole() { // A finir 
    if (ecole) {
        
        for(Ville villeVoisine : routes) {

            if (villeVoisine.getEcole()) {

                for(Ville villeLointaine : routes) {

                    if (this.nom != villeLointaine.getNom()) {

                        if(villeLointaine.getEcole()) {
                            return true;
                        }
                    } 

                }
                return false;
            }
        }
        return false;

    } else {
        return false;
    }
}

}