package fr.iutinfo.skeleton.api;

import fr.iutinfo.skeleton.common.dto.SentimentDto;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.sql.SQLException;
import java.util.List;
import java.util.stream.Collectors;

import static fr.iutinfo.skeleton.api.BDDFactory.getDbi;
import static fr.iutinfo.skeleton.api.BDDFactory.tableExist;

@Path("/sentiment")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class SentimentResource {

	private static SentimentDao dao = getDbi().open(SentimentDao.class);

	public SentimentResource() throws SQLException {
		if (!tableExist("sentiment")) {
			dao.createSentimentTable();
			dao.insert(new Sentiment(0, "Content", "Content"));
			dao.insert(new Sentiment(1, "Heureux", "Content"));
			dao.insert(new Sentiment(2, "Joyeux", "Content"));
			dao.insert(new Sentiment(3, "Excité", "Content"));
			dao.insert(new Sentiment(4, "Enjoué", "Gai"));
			dao.insert(new Sentiment(5, "Vivifié", "Gai"));
			dao.insert(new Sentiment(6, "Pétillant", "Gai"));
			dao.insert(new Sentiment(7, "Aventureux", "Gai"));
			dao.insert(new Sentiment(8, "Perplexe", "Confus"));
			dao.insert(new Sentiment(9, "Inerte", "Confus"));
			dao.insert(new Sentiment(10, "Tiraillé", "Confus"));
			dao.insert(new Sentiment(11, "Hésitant", "Confus"));
			
		}
	}

	@POST
	public SentimentDto createSentiment(SentimentDto dto) {
		Sentiment sentiment = new Sentiment();
		sentiment.initFromDto(dto);
		int id = dao.insert(sentiment);
		dto.setId(id);
		return dto;
	}

	@GET
	@Path("/{id}")
	public SentimentDto getSentiment(@PathParam("id") int id) {
		Sentiment sentiment = dao.findById(id);
		if (sentiment == null) {
			throw new WebApplicationException(404);
		}
		return sentiment.convertToDto();
	}
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<SentimentDto> getAllSentiments(@QueryParam("q") String query) {
		List<Sentiment> sentiments;
		if (query == null) {
			sentiments = dao.all();
		} else {
			sentiments = dao.search("%" + query + "%");
		}
		return sentiments.stream().map(Sentiment::convertToDto).collect(Collectors.toList());
	}

	@DELETE
    @Path("/{id}")
    public void deleteSentiment(@PathParam("id") int id) {
        dao.delete(id);
    }
	
	@PUT
	@Path("/{id}")
	public void putSentiment(@PathParam("id") int id, SentimentDto dto) {
		dao.update(id, dto);
	}

}