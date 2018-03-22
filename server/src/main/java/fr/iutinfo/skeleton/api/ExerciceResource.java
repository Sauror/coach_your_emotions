package fr.iutinfo.skeleton.api;

import fr.iutinfo.skeleton.common.dto.ExerciceDto;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.sql.SQLException;
import java.util.List;
import java.util.stream.Collectors;

import static fr.iutinfo.skeleton.api.BDDFactory.getDbi;
import static fr.iutinfo.skeleton.api.BDDFactory.tableExist;

@Path("/exercice")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class ExerciceResource {

	private static ExerciceDao dao = getDbi().open(ExerciceDao.class);

	public ExerciceResource() throws SQLException {
		dao.dropExerciceTable();
		if (!tableExist("exercice")) {
			dao.createExerciceTable();
			dao.insert(new Exercice(0, "Observation VS Evaluation", "Consigne Globale", "Consigne Question"));
		}
	}

	@POST
	public ExerciceDto createExercice(ExerciceDto dto) {
		Exercice exercice = new Exercice();
		exercice.initFromDto(dto);
		int id = dao.insert(exercice);
		dto.setId(id);
		return dto;
	}

	@GET
	@Path("/{id}")
	public ExerciceDto getExercice(@PathParam("id") int id) {
		Exercice exercice = dao.findById(id);
		if (exercice == null) {
			throw new WebApplicationException(404);
		}
		return exercice.convertToDto();
	}

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<ExerciceDto> getAllExercices(@QueryParam("q") String query) {
		List<Exercice> exercices;
		if (query == null) {
			exercices = dao.all();
		} else {
			exercices = dao.search("%" + query + "%");
		}
		return exercices.stream().map(Exercice::convertToDto).collect(Collectors.toList());
	}

	@DELETE
    @Path("/{id}")
    public void deleteExercice(@PathParam("id") int id) {
        dao.delete(id);
    }

}