import java.util.HashMap;
import java.util.Vector;
import java.util.ArrayList;
import java.util.*;

public class CA implements Comparable {
    private static Vector <Ville> listVilles; // Static ???????? (getNbEcole) 
    private HashMap <Ville, Vector<Ville>> listeAdjacent;

    /**
     * Constructeur CA (Communauté d'Agglomérations), initialise ses attributs
     */
    public CA () {
        listVilles = new Vector<Ville>();
        listeAdjacent = new HashMap<Ville, Vector<Ville>>();
    }

    /**
     * Modifie la liste d'adjacence de l'agglomération (liste des routes par villes)
     * 
     * @param v Objet ville qui correspond à la "key" de la HashMap
     */
    public void modificationListeAdjacent(Ville v) {
        listeAdjacent.put(v, v.getRoutes());
    }

    /**
     * Ajoute une ville au sein de l'agglomération
     * 
     * @param nom Correspond au nom de la ville
     */
    public void ajouteVille(String nom) {
        Ville v = new Ville(nom);

        if (!listVilles.contains(v)) {
            listVilles.add(v);
        } else {
            System.out.println("La ville "+nom+" existe déjà dans l'agglomération");
        }
    }

    /**
     * Retire une ville au sein de l'agglomération
     * 
     * @param nom Correspond au nom de la ville
     */
    public void retireVille(String nom) {
        Ville ville = trouveVille(nom);

        if (ville != null) {
            if (!ville.getRoutes().isEmpty()) {
                for (Ville villeVoisine : ville.getRoutes()) {
                    villeVoisine.getRoutes().remove(ville);

                    if (!villeVoisine.getRoutes().isEmpty()) {
                        modificationListeAdjacent(villeVoisine);
                    } else {
                        listeAdjacent.remove(villeVoisine);
                    }
                    
                }
    
                ville.getRoutes().removeAllElements();
                listeAdjacent.remove(ville);
            }
            
            listVilles.remove(ville);
            System.out.println("La ville "+nom+" a été correctement supprimée");
        } else {
            System.out.println("L'agglomération ne contient pas la ville "+nom);
        }
    }

    /**
     * Affiche toutes les villes de l'agglomération
     */
    public void afficheVilles() {
        if (!listVilles.isEmpty()) {
            for (Ville ville : listVilles) {
                System.out.println(ville.getNom());
            }
        } else {
            System.out.println("Pas de villes dans cette agglomération !");
        }
    }

    /**
     * Retrouve une ville à partir de son nom dans l'agglomération
     * 
     * @param nom Nom de la ville
     * @return Retourne la ville trouvée, null sinon
     */
    public Ville trouveVille(String nom) {
        Ville ville = null;

        for (Ville v : listVilles) {
            if (v.getNom().equals(nom)) {
                ville = v;
            }
        }

        return ville;
    }

    /**
     * Getter de la liste de villes de l'agglomération
     * 
     * @return Retourne la liste des villes de l'agglomération
     */
    public static Vector<Ville> getListeVilles() {
        return listVilles;
    }

    /**
     * Getter de la liste d'adjacence des villes voisines de chaques villes de l'agglomération
     * 
     * @return Retourne la liste des villes voisine (routes)
     */
    public HashMap <Ville, Vector<Ville>> getListeAdjacent() {
        return listeAdjacent;
    }

    /**
     * Getter du nombre d'écoles présents dans la communauté d'agglomération
     * 
     * @return Retourne le nombre d'écoles 
     */
    public static int getNbEcole() { // Static ??????????????????????????????????????
        int nb=0;
        for(Ville ville : listVilles){
            if(ville.getEcole()){
                nb++;
            }
        }
        return nb;
    }

    /**
     * Affiche les villes voisines de chaques villes (correspond aux routes)
     */
    public void afficheRoutes() {
        if (!listeAdjacent.isEmpty()) {
            listeAdjacent.entrySet().forEach(ville -> {
                System.out.print("Ville "+ville.getKey().getNom()+" ==> ");

                for (Ville villeFor : ville.getValue()) {
                    System.out.print(villeFor.getNom()+" ");
                }

                System.out.println("");
            });
        } else {
            System.out.println("Il n'existe aucunes routes entre les villes");
        }
        
    }

    /**
     * Trie la communauté d'agglomération en fonction du nombre de relations qu'elle possède
     * 
     * @return Une liste de villes triées en fonction de leurs nombres de relations avec d'autres villes
     */
        public ArrayList<Ville> triRelation() {
        int taille;
        int i;
        Ville buffer;
        HashMap<Ville, Integer> pile = new HashMap<Ville, Integer>();
        ArrayList<Ville> ls = new ArrayList<Ville>();

        for(Ville ville : listeAdjacent.keySet()){ // Crée un nouveau HashMap contenant les villes associées au nombre de relations qu'elle possède
            taille = 0;
            taille = (listeAdjacent.get(ville)).size();
            pile.put(ville, taille);
        }

        for(Ville ville : pile.keySet()) { // Crée un tableau trié des villes en fonction du nombre de leurs relations 
        
            if(ls.isEmpty()) {
                ls.add(ville);
            }
            else {
                i=0;
                for(Ville v : ls){
                    if((pile.get(v)).compareTo(pile.get(ville)) < 0){
                        buffer = ls.get(i);
                        ls.set(i, ville);
                        ls.add(buffer);
                    }
                    else{
                        ls.add(ville);         
                    }
                    i++;
                }
            }

        }

        return ls;
    }

    /**Trie la communauté d'agglomération en fonction du nombre d'écoles à sa dispostion (strictement supérieur à 1)
     * 
     * @return Une liste de villes triées en fonction de leurs nombres d'écoles à proximité
     */
    public ArrayList<Ville> triEcole() {
        int nb;
        int i;
        Ville buffer;
        HashMap<Ville, Integer> pile = new HashMap<Ville, Integer>();
        ArrayList<Ville> ls = new ArrayList<Ville>();

        for(Ville ville : listeAdjacent.keySet()){ // Crée un nouveau HashMap contenant les villes associées au nombre d'écoles à sa disposition
            nb=0; 
            if(ville.getEcole()){
                nb++;
            }
            for(Ville villeProche : ville.getRoutes()){
                if(villeProche.getEcole()){
                    nb++;
                }
            }
            if(nb>1){
            pile.put(ville, nb);
            }
        }

        for (Ville ville : pile.keySet()) { // Crée un tableau trié des villes en fonction du nombre d'écoles mis a sa disposition
            if(ls.isEmpty()) { 
                ls.add(ville);
            }
            else {
                i=0;
                for(Ville v : ls){
                    if((pile.get(v)).compareTo(pile.get(ville)) < 0){
                        buffer = ls.get(i);
                        ls.set(i, ville);
                        ls.add(buffer);
                    }
                    else{
                        ls.add(ville);         
                    }
                    i++;
                }
            }
        }

        return ls;
    }

	@Override
	public int compareTo(Object o) {
		// TODO Auto-generated method stub
		return 0;
	}
}
