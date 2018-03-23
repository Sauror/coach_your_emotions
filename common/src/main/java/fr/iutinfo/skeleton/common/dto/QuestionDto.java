package fr.iutinfo.skeleton.common.dto;

public class QuestionDto {
	private int id =0;
	private int idExo;
	private String question;
	private String correctionOui;
	private String correctionNon;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getIdExo() {
		return idExo;
	}
	public void setIdExo(int idExo) {
		this.idExo = idExo;
	}
	public String getQuestion() {
		return question;
	}
	public void setQuestion(String question) {
		this.question = question;
	}
	public String getCorrectionOui() {
		return correctionOui;
	}
	public void setCorrectionOui(String correctionOui) {
		this.correctionOui = correctionOui;
	}
	public String getCorrectionNon() {
		return correctionNon;
	}
	public void setCorrectionNon(String correctionNon) {
		this.correctionNon = correctionNon;
	}
	
	
}
