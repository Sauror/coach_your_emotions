package fr.iutinfo.skeleton.api;

import fr.iutinfo.skeleton.common.dto.BesoinDto;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.sql.SQLException;
import java.util.List;
import java.util.stream.Collectors;

import static fr.iutinfo.skeleton.api.BDDFactory.getDbi;
import static fr.iutinfo.skeleton.api.BDDFactory.tableExist;

@Path("/besoin")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class BesoinResource {
	private static BesoinDao dao = getDbi().open(BesoinDao.class);

	public BesoinResource() throws SQLException {
		if (!tableExist("besoin")) {
			dao.createBesoinTable();
			dao.insert(new Besoin(0, "Manger", "Besoins-vitaux"));
		}
	}

	@POST
	public BesoinDto createBesoin(BesoinDto dto) {
		Besoin besoin = new Besoin();
		besoin.initFromDto(dto);
		int id = dao.insert(besoin);
		dto.setId(id);
		return dto;
	}

	@GET
	@Path("/{nom}")
	public BesoinDto getBesoinByName(@PathParam("nom") String nom) {
		Besoin besoin = dao.findByName(nom);
		if (besoin == null) {
			throw new WebApplicationException(404);
		}
		return besoin.convertToDto();
	}

	@GET
	public List<BesoinDto> getAllBesoins(@QueryParam("q") String query) {
		List<Besoin> besoins;
		if (query == null) {
			besoins = dao.all();
		} else {
			besoins = dao.search("%" + query + "%");
		}
		return besoins.stream().map(Besoin::convertToDto).collect(Collectors.toList());
	}

	@DELETE
	@Path("/{id}")
	public void deleteBesoin(@PathParam("id") int id) {
		dao.delete(id);
	}

}
