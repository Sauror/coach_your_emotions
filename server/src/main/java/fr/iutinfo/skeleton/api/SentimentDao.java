package fr.iutinfo.skeleton.api;

import org.skife.jdbi.v2.sqlobject.*;
import org.skife.jdbi.v2.sqlobject.customizers.RegisterMapperFactory;
import org.skife.jdbi.v2.tweak.BeanMapperFactory;

import java.util.List;

public interface SentimentDao {
    @SqlUpdate("create table sentiment (id integer primary key autoincrement, nom varchar(20), categorie varchar(20))")
    void createSentimentTable();

    @SqlUpdate("insert into sentiment (nom, categorie) values (:nom, :categorie)")
    @GetGeneratedKeys
    int insert(@BindBean() Sentiment sentiment);

    @SqlQuery("select * from sentiment where nom = :nom")
    @RegisterMapperFactory(BeanMapperFactory.class)
    Sentiment findByName(@Bind("nom") String nom);

    @SqlQuery("select * from sentiment where search like :nom")
    @RegisterMapperFactory(BeanMapperFactory.class)
    List<Sentiment> search(@Bind("nom") String nom);

    @SqlUpdate("drop table if exists sentiment")
    void dropSentimentTable();

    @SqlUpdate("delete from sentiment where id = :id")
    void delete(@Bind("id") int id);

    @SqlQuery("select * from sentiment order by id")
    @RegisterMapperFactory(BeanMapperFactory.class)
    List<Sentiment> all();

    @SqlQuery("select * from sentiment where id = :id")
    @RegisterMapperFactory(BeanMapperFactory.class)
    Sentiment findById(@Bind("id") int id);
    
    @SqlQuery("select count(distinct categorie) from sentiment")
    @RegisterMapperFactory(BeanMapperFactory.class)
    int tailleSentiment();
    
    void close();
}