package fr.iutinfo.skeleton.api;

import static fr.iutinfo.skeleton.api.BDDFactory.getDbi;
import static fr.iutinfo.skeleton.api.BDDFactory.tableExist;

import java.sql.SQLException;
import java.util.List;
import java.util.stream.Collectors;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.WebApplicationException;
import javax.ws.rs.core.MediaType;

import fr.iutinfo.skeleton.common.dto.QuestionDto;
import fr.iutinfo.skeleton.common.dto.SentimentDto;

@Path("/question")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class QuestionResource {

	private static QuestionDao dao = getDbi().open(QuestionDao.class);

	public QuestionResource() throws SQLException {
		dao.dropQuestionTable();
		if (!tableExist("question")) {
			dao.createQuestionTable();
			dao.insert(new Question(1,1,"J'ai le sentiment que tu ne m'aimes pas.","Nous ne sommes pas d'accord. De notre côté, nous pensons que \"tu ne m'aimes pas\" ne dit pas les sentiment de la personne qui parle, mais décrit ceux qu'elle attribue à l'autre.","Nous sommes d'accord","non"));
			dao.insert(new Question(2,1,"Je suis triste que tu partes.","Nous sommes d'accord pour considérer qu'un sentiment a été spécifiquement exprimé.","Nous ne sommes pas d'accord.","oui"));
			dao.insert(new Question(3,1,"J'ai peur quand tu dis cela.","Nous sommes d'accord pour considérer qu'un sentiment a été spécifiquement exprimé.","Nous ne sommes pas d'accord.","oui"));
			dao.insert(new Question(4,1,"Quand tu ne me dis pas bonjour, je me sens délaissée.","Nous ne sommes pas d'accord. Nous pensons que \"délaissé\" n'exprime pas un sentiment mais ce que la personne pense qu'on lui fait. On aurait pu dire \"Quand tu ne me dis pas bonjour, je me sens seule.\"","Nous sommes d'accord","non"));
			dao.insert(new Question(5,2,"J'ai le sentiment que tu ne m'aimes pas.","Nous ne sommes pas d'accord. De notre côté, nous pensons que \"tu ne m'aimes pas\" ne dit pas les sentiment de la personne qui parle, mais décrit ceux qu'elle attribue à l'autre.","Nous sommes d'accord","non"));
			dao.insert(new Question(6,2,"Je suis triste que tu partes.","Nous sommes d'accord pour considérer qu'un sentiment a été spécifiquement exprimé.","Nous ne sommes pas d'accord.","oui"));
			dao.insert(new Question(7,2,"J'ai peur quand tu dis cela.","Nous sommes d'accord pour considérer qu'un sentiment a été spécifiquement exprimé.","Nous ne sommes pas d'accord.","oui"));
			dao.insert(new Question(8,2,"Quand tu ne me dis pas bonjour, je me sens délaissée.","Nous ne sommes pas d'accord. Nous pensons que \"délaissé\" n'exprime pas un sentiment mais ce que la personne pense qu'on lui fait. On aurait pu dire \"Quand tu ne me dis pas bonjour, je me sens seule.\"","Nous sommes d'accord","non"));
		}
	}

	@POST
	public QuestionDto createQuestion(QuestionDto dto) {
		Question question = new Question();
		question.initFromDto(dto);
		int id = dao.insert(question);
		dto.setId(id);
		return dto;
	}

	@GET
	@Path("{id}")
	public QuestionDto getQuestion(@PathParam("id") int id) {
		Question question = dao.findById(id);
		if (question == null) {
			throw new WebApplicationException(404);
		}
		return question.convertToDto();
	}

	@GET
	@Path("/exoid/{id}")
	public List<QuestionDto> getQuestionFromExercice(@PathParam("id") int id, @QueryParam("q") String query) {
		List<Question> questions;
		questions = dao.searchQuestionFromExercice(id);
		return questions.stream().map(Question::convertToDto).collect(Collectors.toList());
	}

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<QuestionDto> getAllQuestions(@QueryParam("q") String query) {
		List<Question> questions;
		if (query == null) {
			questions = dao.all();
		} else {
			questions = dao.search("%" + query + "%");
		}
		return questions.stream().map(Question::convertToDto).collect(Collectors.toList());
	}

	@DELETE
	@Path("/{id}")
	public void deleteQuestion(@PathParam("id") int id) {
		dao.delete(id);
	}
	
	@PUT
	@Path("/{id}")
	public void putSentiment(@PathParam("id") int id, QuestionDto dto) {
		dao.update(id, dto);
	}

}

