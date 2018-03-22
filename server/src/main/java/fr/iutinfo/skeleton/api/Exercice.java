package fr.iutinfo.skeleton.api;

import fr.iutinfo.skeleton.common.dto.ExerciceDto;

public class Exercice {
	
	private int id = 0;
	private String nom;
	private String cg;
	private String cq;
	
	public Exercice(int id, String nom, String cg, String cq) {
		this.id = id;
		this.nom = nom;
		this.cg = cg;
		this.cq = cq;
	}
	
	public Exercice() {
	}

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

	public String getCg() {
		return cg;
	}

	public void setCg(String cg) {
		this.cg = cg;
	}

	public String getCq() {
		return cq;
	}

	public void setCq(String cq) {
		this.cq = cq;
	}

	public void initFromDto(ExerciceDto dto) {
		this.setId(dto.getId());
    	this.setNom(dto.getNom());
    	this.setCg(dto.getCg());
        this.setCq(dto.getCq());
    }

    public ExerciceDto convertToDto() {
        ExerciceDto dto = new ExerciceDto();
        dto.setId(this.getId());
    	dto.setNom(this.getNom());
    	dto.setCg(this.getCg());
    	dto.setCq(this.getCq());
        return dto;
    }
	
}
