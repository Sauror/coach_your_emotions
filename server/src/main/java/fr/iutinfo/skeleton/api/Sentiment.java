package fr.iutinfo.skeleton.api;

import fr.iutinfo.skeleton.common.dto.SentimentDto;

public class Sentiment {
	
    private int id = 0;
    private String nom;
    private String catégorie;

    public Sentiment(int id, String nom, String catégorie) {
    	this.id = id;
    	this.nom = nom;
    	this.catégorie = catégorie;
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
    
    public String getCatégorie() {
    	return catégorie;
    }
    
    public void setCatégorie(String catégorie) {
        this.catégorie = catégorie;
    }
    
    public void initFromDto(SentimentDto dto) {
    	this.setId(dto.getId());
    	this.setNom(dto.getNom());
        this.setCatégorie(dto.getCatégorie());
    }

    public SentimentDto convertToDto() {
        SentimentDto dto = new SentimentDto();
        this.setId(dto.getId());
    	this.setNom(dto.getNom());
        this.setCatégorie(dto.getCatégorie());
        return dto;
    }
    
}
