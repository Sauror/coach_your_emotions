package fr.iutinfo.skeleton.api;

import fr.iutinfo.skeleton.common.dto.BesoinDto;

public class Besoin{
	private int id=0;
	private String nom;
	private String categorie;
	
	public Besoin(int id, String name, String categorie) {
		this.id = id;
		this.nom = name;
		this.categorie = categorie;
	}
	
	public Besoin() {}
	
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
    
    public void initFromDto(BesoinDto dto) {
        this.setId(dto.getId());
        this.setNom(dto.getNom());
        this.setCategorie(dto.getCategorie());
    }

    public BesoinDto convertToDto() {
        BesoinDto dto = new BesoinDto();
        dto.setId(this.getId());
        dto.setNom(this.getNom());
        dto.setCategorie(this.getCategorie());
        return dto;
    }
}
