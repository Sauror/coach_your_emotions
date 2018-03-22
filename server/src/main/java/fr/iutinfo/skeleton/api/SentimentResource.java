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
			dao.insert(new Sentiment(0, "Heureux", "Content"));
			dao.insert(new Sentiment(0, "Joyeux", "Content"));
			dao.insert(new Sentiment(0, "Las", "Fatigué"));
			dao.insert(new Sentiment(0, "Endormi", "Fatigué"));
			dao.insert(new Sentiment(0, "Démoralisé", "Triste"));
			
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
	@Path("/{nom}")
	public SentimentDto getSentiment(@PathParam("nom") String nom) {
		Sentiment sentiment = dao.findByName(nom);
		if (sentiment == null) {
			throw new WebApplicationException(404);
		}
		return sentiment.convertToDto();
	}

	@GET
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
    public void deleteUser(@PathParam("id") int id) {
        dao.delete(id);
    }

}