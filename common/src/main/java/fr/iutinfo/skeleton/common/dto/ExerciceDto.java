package fr.iutinfo.skeleton.common.dto;

public class ExerciceDto {

	private int id = 0;
	private String nom;
	private String cg;
	private String cq;
	
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
	
}
