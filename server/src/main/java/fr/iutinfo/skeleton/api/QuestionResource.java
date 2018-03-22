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
			dao.insert(new Question(0,1,"Question ?", "Rep attendue","correction oui","correction non"));
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
	@Path("/{id}")
	public QuestionDto getQuestion(@PathParam("id") int id) {
		Question question = dao.findById(id);
		if (question == null) {
			throw new WebApplicationException(404);
		}
		return question.convertToDto();
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

}
	
	