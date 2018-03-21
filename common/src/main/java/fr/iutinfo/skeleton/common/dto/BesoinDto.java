package fr.iutinfo.skeleton.common.dto;

public class BesoinDto{
	private int id=0;
	private String nom;
	private String categorie;
	
	public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }
    
    public String getCategorie() {
    	return categorie;
    }
    
    public void setCategorie(String categorie) {
    	this.categorie = categorie;
    }
}