package fr.iutinfo.skeleton.api;

import fr.iutinfo.skeleton.common.dto.QuestionDto;

public class Question {
	private int id =0;
	private int idExo;
	private String question;
	private String reponseAttendue;
	private String correctionOui;
	private String correctionNon;
	
	public Question(int id, int idExo, String question, String reponseAttendue, String correctionOui,String correctionNon) {
		this.id = id;
		this.idExo = idExo;
		this.question = question;
		this.reponseAttendue = reponseAttendue;
		this.correctionOui = correctionOui;
		this.correctionNon = correctionNon;
	}
	
	public Question() {}

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

	public String getReponseAttendue() {
		return reponseAttendue;
	}

	public void setReponseAttendue(String reponsesAttendue) {
		this.reponseAttendue = reponsesAttendue;
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
	
	public void initFromDto(QuestionDto dto) {
		this.setId(dto.getId());
		this.setIdExo(dto.getIdExo());
		this.setQuestion(dto.getQuestion());
		this.setReponseAttendue(dto.getReponsesAttendue());
		this.setCorrectionOui(dto.getCorrectionOui());
		this.setCorrectionNon(dto.getCorrectionNon());
	}
	
	public QuestionDto convertToDto() {
		QuestionDto dto = new QuestionDto();
		dto.setId(this.getId());
		dto.setIdExo(this.getIdExo());
		dto.setQuestion(this.getQuestion());
		dto.setReponsesAttendue(this.getReponseAttendue());
		dto.setCorrectionOui(this.getCorrectionOui());
		dto.setCorrectionNon(this.getCorrectionNon());
		return dto;	
	}
	

}
