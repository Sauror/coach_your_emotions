package fr.iutinfo.skeleton.api;

import org.skife.jdbi.v2.sqlobject.Bind;
import org.skife.jdbi.v2.sqlobject.BindBean;
import org.skife.jdbi.v2.sqlobject.GetGeneratedKeys;
import org.skife.jdbi.v2.sqlobject.SqlQuery;
import org.skife.jdbi.v2.sqlobject.SqlUpdate;
import org.skife.jdbi.v2.sqlobject.customizers.RegisterMapperFactory;
import org.skife.jdbi.v2.tweak.BeanMapperFactory;

import fr.iutinfo.skeleton.common.dto.BesoinDto;
import fr.iutinfo.skeleton.common.dto.ExerciceDto;

import java.util.List;

import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;

public interface ExerciceDao {
    @SqlUpdate("create table exercice (id integer primary key autoincrement, nom varchar(100), cg varchar(1000), cq varchar(1000))")
    void createExerciceTable();

    @SqlUpdate("insert into exercice (nom, cg, cq) values (:nom, :cg, :cq)")
    @GetGeneratedKeys
    int insert(@BindBean() Exercice exercice);

    @SqlQuery("select * from exercice where nom = :nom")
    @RegisterMapperFactory(BeanMapperFactory.class)
    Exercice findByName(@Bind("nom") String nom);

    @SqlQuery("select * from exercice where search like :nom")
    @RegisterMapperFactory(BeanMapperFactory.class)
    List<Exercice> search(@Bind("nom") String nom);

    @SqlUpdate("drop table if exists exercice")
    void dropExerciceTable();

    @SqlUpdate("delete from exercice where id = :id")
    void delete(@Bind("id") int id);

    @SqlQuery("select * from exercice order by id")
    @RegisterMapperFactory(BeanMapperFactory.class)
    List<Exercice> all();

    @SqlQuery("select * from exercice where id = :id")
    @RegisterMapperFactory(BeanMapperFactory.class)
    Exercice findById(@Bind("id") int id);
    
    @SqlUpdate("Update exercice set nom = :nom, cg = :cg, cq =:cq where id = :id")
	@RegisterMapperFactory(BeanMapperFactory.class)
	void update(@Bind("id") int id, @BindBean() ExerciceDto dto);
    
    
    void close();
}