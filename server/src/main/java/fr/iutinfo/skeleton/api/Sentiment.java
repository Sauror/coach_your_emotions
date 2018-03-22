package fr.iutinfo.skeleton.api;

import fr.iutinfo.skeleton.common.dto.SentimentDto;

public class Sentiment {
	
    private int id = 0;
    private String nom;
    private String categorie;

    public Sentiment(int id, String nom, String categorie) {
    	this.id = id;
    	this.nom = nom;
    	this.categorie = categorie;
    }

    public Sentiment() {
    }
    
    public String getNom() {
    	return nom;
    }
    
    public void setNom(String nom) {
        this.nom = nom;
    }
    
    public int getId() {
    	return id;
    }
    
    public void setId(int id) {
        this.id = id;
    }
    
    public String getCategorie() {
    	return categorie;
    }
    
    public void setCategorie(String categorie) {
        this.categorie = categorie;
    }
    
    public void initFromDto(SentimentDto dto) {
    	this.setId(dto.getId());
    	this.setNom(dto.getNom());
        this.setCategorie(dto.getCategorie());
    }

    public SentimentDto convertToDto() {
        SentimentDto dto = new SentimentDto();
        dto.setId(this.getId());
    	dto.setNom(this.getNom());
        dto.setCategorie(this.getCategorie());
        return dto;
    }
    
}
