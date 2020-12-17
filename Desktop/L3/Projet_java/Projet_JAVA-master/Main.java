import java.util.InputMismatchException;
import java.util.NoSuchElementException;
import java.util.Scanner;
import java.util.ArrayList;
import java.util.Vector;

public class Testmain {
	public static void main(String[] args) {

        System.out.println("Souhaitez-vous établir votre communauté d'agglomeration manuellement ou automatiquement (à l'aide d'un fichier) ? ");
        Scanner sc = new Scanner(System.in);
        byte rep=0; //Correspond aux réponses dans les menus
        CA ca = new CA(); //Création d'une communauté d'agglomérations
        int nb_ville=0; //Nombre de villes
        int nb_ecoles=0; //Nombre d'écoles

        do {
            System.out.println("1) Résoudre manuellement");
            System.out.println("2) Résoudre automatiquement");
            System.out.println("3) Sauvegarder");
            System.out.println("4) Sortir du menu !");

            try {
                rep = sc.nextByte();

                if (sc.hasNextLine()) {
                    sc.nextLine();
                }
            } catch (InputMismatchException e) {
                if (sc.hasNextLine()) {
                    sc.nextLine();
                }
                System.out.println("Mauvaise entrée, ceci n'est pas un entier ! Recommencez !");
                continue;

            } catch (NoSuchElementException e) {
                if (sc.hasNextLine()) {
                    sc.nextLine();
                }
                System.out.println("L'élément dans le scanner n'existe pas");
                continue;
            }

            switch(rep) {
                case 1:  /** L'utilisateur choisit d'établir manuellement sa communauté d'agglomération  */

                    System.out.print("Bonjour, combien de villes voulez-vous créer ? (<= 26) : "); //A SUPPRIMER
                    int ascii = 65; //Correspond à la lettre "A" du tableau ascii (non dependant de 26 !!!)

                    /**
                    * Vérifie la cohérence du nombre de villes
                    */
                    /** PARTIE A MODIFIER
                     */
                    while(true) {
                        try {
                            do {
                                nb_ville = sc.nextInt();

                                if ((nb_ville > 26) || (nb_ville < 0)) {
                                    System.out.println("Le nombre de villes est trop grand ou trop petit ! Recommencez !");
                                }
                            } while ((nb_ville > 26) || (nb_ville < 0));

                            break;

                        } catch (InputMismatchException e) {
                            if (sc.hasNextLine()) {
                                sc.nextLine();
                            }
                            System.out.println("Mauvaise entrée, ceci n'est pas un entier ! Recommencez !");
                        }
                    }
                    
                    /**
                    * Ajoute les villes créé à l'agglomération puis affiche les villes créées
                    */
                    for (int i = 0; i < nb_ville; i++) {
                        String nom = Character.toString(ascii);
                        ca.ajouteVille(nom);
                        ascii++;
                    }
                    System.out.println("Voici votre liste de villes actuelle :");
                    ca.afficheVilles();

                    /**
                    * Menu 1 (ajout de routes)
                    */
                    do {
                        System.out.println("1) Ajouter une route");
                        System.out.println("2) Retirer une route");
                        System.out.println("3) Ajouter une ville");
                        System.out.println("4) Retirer une ville");
                        System.out.println("5) Voir les routes actuelles");
                        System.out.println("6) Voir la liste des villes");
                        System.out.println("7) Fin d'ajout de route");

                        try {
                            rep = sc.nextByte();

                            if (sc.hasNextLine()) {
                                sc.nextLine();
                            }
                        } catch (InputMismatchException e) {
                            if (sc.hasNextLine()) {
                                sc.nextLine();
                            }
                            System.out.println("Mauvaise entrée, ceci n'est pas un entier ! Recommencez !");
                            continue;

                        } catch (NoSuchElementException e) {
                            if (sc.hasNextLine()) {
                                sc.nextLine();
                            }
                            System.out.println("L'élément dans le scanner n'existe pas");
                            continue;
                        }
                        

                        switch (rep) {
                            case 1:
                                System.out.println("Entre quelles villes voulez-vous créer une route ?");

                                try {
                                    System.out.print("Choisissez le nom de la 1ère ville : ");
                                    Ville ville1 = ca.trouveVille(sc.nextLine());

                                    System.out.print("Choisissez le nom de la 2nd ville : ");
                                    Ville ville2 = ca.trouveVille(sc.nextLine());

                                    if ((ville1 == null) || (ville2 == null)) {
                                        System.out.println("L'une des 2 villes n'existe pas !");
                                    } else {
                                        ville1.ajouteRoutes(ville2);
                                        ville2.ajouteRoutes(ville1);

                                        ca.modificationListeAdjacent(ville1);
                                        ca.modificationListeAdjacent(ville2);
                                        
                                    }
                                } catch (NoSuchElementException e) {
                                    if (sc.hasNextLine()) {
                                        sc.nextLine();
                                    }
                                    System.out.println("Aucune ligne n'a été détecté dans le Scanner");
                                }
                                
                                break;

                            case 2:
                                System.out.println("Entre quelles villes voulez-vous supprimer une route ?");

                                try {
                                    System.out.print("Choisissez le nom de la 1ère ville : ");
                                    Ville ville1 = ca.trouveVille(sc.nextLine());

                                    System.out.print("Choisissez le nom de la 2nd ville : ");
                                    Ville ville2 = ca.trouveVille(sc.nextLine());

                                    if ((ville1 == null) || (ville2 == null)) {
                                        System.out.println("L'une des 2 villes n'existe pas !");
                                    } else {
                                        ville1.retireRoutes(ville2);
                                        ville2.retireRoutes(ville1);

                                        if (!ville1.getRoutes().isEmpty()) {
                                            ca.modificationListeAdjacent(ville1);
                                        } else {
                                            ca.getListeAdjacent().remove(ville1);
                                        }

                                        if (!ville2.getRoutes().isEmpty()) {
                                            ca.modificationListeAdjacent(ville2);
                                        } else {
                                            ca.getListeAdjacent().remove(ville2);
                                        }
                                    }
                                } catch (NoSuchElementException e) {
                                    if (sc.hasNextLine()) {
                                        sc.nextLine();
                                    }
                                    System.out.println("Aucune ligne n'a été détecté dans le Scanner");
                                }

                                break;

                            case 3:
                                System.out.println("Entrez le nom de la ville à ajouter :");
                                ca.ajouteVille(sc.nextLine());
                                break;

                            case 4:
                                System.out.println("Entrez le nom de la ville à retirer :");
                                ca.retireVille(sc.nextLine());
                                break;

                            case 5:
                                System.out.println("Voici les routes associées aux villes :");
                                ca.afficheRoutes();
                                break;

                            case 6:
                                System.out.println("Liste des villes :");
                                ca.afficheVilles();
                                break;

                            case 7:
                                System.out.println("Construction de l'agglomération terminée\n");
                                break;

                            default:
                                System.out.println("Votre choix ne correspond à aucune option ! Recommencez !");
                                break;
                        }
                    }while (rep != 7);

                    /**
                    * Menu 2 (Ajout/retire d'école)
                    */
                    do {
                        System.out.println("1) Ajouter une école");
                        System.out.println("2) Retirer une école");
                        System.out.println("3) Voir la liste des villes");
                        System.out.println("4) Fin du programme");

                        try {
                            rep = sc.nextByte();

                            if (sc.hasNextLine()) {
                                sc.nextLine();
                            }
                        } catch (InputMismatchException e) {
                            if (sc.hasNextLine()) {
                                sc.nextLine();
                            }
                            System.out.println("Mauvaise entrée, ceci n'est pas un entier ! Recommencez !");
                            continue;

                        } catch (NoSuchElementException e) {
                            if (sc.hasNextLine()) {
                                sc.nextLine();
                            }
                            System.out.println("L'élément dans le scanner n'existe pas");
                            continue;
                        }

                        switch (rep) {
                            case 1:
                                System.out.println("A quelle ville ajouter une école ? :");
                                Ville villeAjout = ca.trouveVille(sc.nextLine());

                                if (villeAjout != null) {
                                    villeAjout.ajouteEcole();
                                } else {
                                    System.out.println("Aucune ville ne correspond à ce nom");
                                }

                                System.out.println("Voici la liste des villes ayant une école :");
                                for (Ville ville : ca.getListeVilles()) {
                                    if (ville.getEcole()) {
                                        System.out.println(ville.getNom());
                                    }
                                }

                                break;
                        
                            case 2:
                                System.out.println("A quelle ville retirer une école ? :");
                                Ville villeRetire = ca.trouveVille(sc.nextLine());

                                if (villeRetire != null) {
                                    villeRetire.retireEcole();;
                                } else {
                                    System.out.println("Aucune ville ne correspond à ce nom");
                                }

                                System.out.println("Voici la liste des villes ayant une école :");
                                for (Ville ville : ca.getListeVilles()) {
                                    if (ville.getEcole()) {
                                        System.out.println(ville.getNom());
                                    }
                                }

                                break;

                            case 3:
                                System.out.println("Liste des villes :");
                                ca.afficheVilles();
                                break;

                            case 4:
                                System.out.println("Fin du programme ! Au revoir :)");
                                sc.close();
                                break;

                            default:
                                System.out.println("Votre choix ne correspond à aucune option ! Recommencez !");
                                break;
                        }
                    } while (rep != 4);

                    break;

                case 2:  /** L'utilisateur choisit d'établir automatiquement sa communauté d'agglomération  */
                	
                    for(int j=0; j<26; j++) {
                        System.out.println("Entrez le nom de la ville à ajouter :");
                        ca.ajouteVille(sc.nextLine());
                    }

                    for(int x=0; x<40; x++) {
                    System.out.println("Entre quelles villes voulez-vous créer une route ?");

                    try {
                        System.out.print("Choisissez le nom de la 1ère ville : ");
                        Ville ville1 = ca.trouveVille(sc.nextLine());

                        System.out.print("Choisissez le nom de la 2nd ville : ");
                        Ville ville2 = ca.trouveVille(sc.nextLine());

                        if ((ville1 == null) || (ville2 == null)) {
                            System.out.println("L'une des 2 villes n'existe pas !");
                        } else {
                            ville1.ajouteRoutes(ville2);
                            ville2.ajouteRoutes(ville1);

                            ca.modificationListeAdjacent(ville1);
                            ca.modificationListeAdjacent(ville2);
                            
                        }
                    } catch (NoSuchElementException e) {
                        if (sc.hasNextLine()) {
                            sc.nextLine();
                        }
                        System.out.println("Aucune ligne n'a été détecté dans le Scanner");
                    }
                	
                }
                    Vector<Ville> tabRelation = new Vector<Ville>();
                    Vector<Ville> tabEcole = new Vector<Ville>();
                    ArrayList<Integer> confirmation = new ArrayList<Integer>();
                    int i;
                    int size=0;
                    confirmation.add(0); //Ajout de la première valeur du tableau à 0
                    confirmation.add(0); //Ajout de la seconde valeur du tableau à 0
                    /** Stocke dans le tableau tabRelation la communauté d'agglomération 
                     *  trié en fonction du nombre de relations qu'elle possède
                     */
                    tabRelation = CA.getListeVilles();
                    for (i=0; i<nb_ville; i++) {
                        for (Ville ville : tabRelation) {
                            if(!ville.accessibilite()) {
                                ville.ajouteEcole();
                            }
                        }
                    }
                    do {
                        tabEcole=CA.getListeVilles();
                        for(Ville ville : tabEcole){
                            ville.ajouteEcole(); 
                            for(Ville villeadjacente : ville.getRoutes()){
                            	villeadjacente.retireEcole();
                            }
                            ville.retireEcole();
                        }
                        nb_ecoles = CA.getNbEcole();
                        confirmation.add(nb_ecoles); //Ajout du nombre d'écoles actuel dans la liste confirmation
                        size = confirmation.size();

                    /**
                     * Condition d'arret
                     *
                     * L'algorithme devra s'arrêter à partir du moment où il n'y a plus de suppression d'écoles (buffer) ou si le nombre d'écoles de la CA ne change plus 3 itérations consécutives 
                     */
                    }while( (confirmation.get(size-1)!=confirmation.get(size-2)) || (confirmation.get(size-2)!=confirmation.get(size-3)) );

                    System.out.println("Voici la liste des villes :");
                    ca.afficheVilles();
                    System.out.println("Voici les routes associées aux villes :");
                    ca.afficheRoutes();
                    System.out.println("Voici la liste des villes ayant une école :");
                    for (Ville ville : ca.getListeVilles()) {
                        if (ville.getEcole()) {
                            System.out.println(ville.getNom());
                        }
                    }
                    break;
                
                case 3:  /** L'utilisateur choisit de sauvegarder sa communauté d'agglomération  */



                    break;
                    
                case 4:
                	
                	break;
                
                default :
                    System.out.println("Votre choix ne correspond à aucune option ! Recommencez !");
                    break;
            }
            
        }while(rep!=4);

    }
}
