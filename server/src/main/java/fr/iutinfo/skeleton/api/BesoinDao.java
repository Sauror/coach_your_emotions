package fr.iutinfo.skeleton.api;

import java.util.List;
import org.skife.jdbi.v2.sqlobject.Bind;
import org.skife.jdbi.v2.sqlobject.BindBean;
import org.skife.jdbi.v2.sqlobject.GetGeneratedKeys;
import org.skife.jdbi.v2.sqlobject.SqlQuery;
import org.skife.jdbi.v2.sqlobject.SqlUpdate;
import org.skife.jdbi.v2.sqlobject.customizers.RegisterMapperFactory;
import org.skife.jdbi.v2.tweak.BeanMapperFactory;

public interface BesoinDao {
	@SqlUpdate("create table besoin (id integer primary key autoincrement, nom varchar(20), categorie varchar(20))")
    void createBesoinTable();
	
	@SqlUpdate("insert into besoin (nom,categorie) values (:nom, :categorie)")
	@GetGeneratedKeys
	int insert(@BindBean() Besoin besoin);
	
	@SqlQuery("select * from besoin where nom = :nom")
    @RegisterMapperFactory(BeanMapperFactory.class)
    Besoin findByName(@Bind("nom") String nom);
	
	@SqlQuery("select * from besoin where search like :nom")
    @RegisterMapperFactory(BeanMapperFactory.class)
    List<Besoin> search(@Bind("nom") String name);
	
	@SqlUpdate("drop table if exists besoin")
    void dropBesoinTable();
	
	@SqlUpdate("delete from besoin where id = :id")
	void delete(@Bind("id") int id);
	
	@SqlQuery("select * from besoin order by id")
    @RegisterMapperFactory(BeanMapperFactory.class)
    List<Besoin> all();
	
	@SqlQuery("select * from besoin where id = :id")
    @RegisterMapperFactory(BeanMapperFactory.class)
    Besoin findById(@Bind("id") int id);
	
	void close();
}
