package fr.iutinfo.skeleton.api;

import fr.iutinfo.skeleton.common.dto.BesoinDto;
import fr.iutinfo.skeleton.common.dto.SentimentDto;

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
		dao.dropBesoinTable();
		if (!tableExist("besoin")) {
			dao.createBesoinTable();
			dao.insert(new Besoin(0, "Lumière", "Survie"));
			dao.insert(new Besoin(1, "Repos", "Survie"));
			dao.insert(new Besoin(2, "Mouvement", "Survie"));
			dao.insert(new Besoin(3, "Alimentation", "Survie"));
			dao.insert(new Besoin(4, "Proctection", "Sécurité"));
			dao.insert(new Besoin(5, "Soutien", "Sécurité"));
			dao.insert(new Besoin(6, "Paix", "Sécurité"));
			dao.insert(new Besoin(7, "Harmonie", "Sécurité"));
			dao.insert(new Besoin(8, "Unité", "Sens"));
			dao.insert(new Besoin(9, "Orientation", "Sens"));
			dao.insert(new Besoin(10, "Clarté", "Sens"));
			dao.insert(new Besoin(11,"Orientation", "Sens"));
			
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
	@Path("/{id}")
	public BesoinDto getBesoinByName(@PathParam("id") int id) {
		Besoin besoin = dao.findById(id);
		if (besoin == null) {
			throw new WebApplicationException(404);
		}
		return besoin.convertToDto();
	}

	@GET
	@Produces(MediaType.APPLICATION_JSON)
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
	
	@PUT
	@Path("/{id}")
	public void putBesoin(@PathParam("id") int id, BesoinDto dto) {
		dao.update(id, dto);
	}

}
