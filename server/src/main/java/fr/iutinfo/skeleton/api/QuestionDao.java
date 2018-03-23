package fr.iutinfo.skeleton.api;

import java.util.List;

import org.skife.jdbi.v2.sqlobject.Bind;
import org.skife.jdbi.v2.sqlobject.BindBean;
import org.skife.jdbi.v2.sqlobject.GetGeneratedKeys;
import org.skife.jdbi.v2.sqlobject.SqlQuery;
import org.skife.jdbi.v2.sqlobject.SqlUpdate;
import org.skife.jdbi.v2.sqlobject.customizers.RegisterMapperFactory;
import org.skife.jdbi.v2.tweak.BeanMapperFactory;

public interface QuestionDao {
	@SqlUpdate("create table question (id integer primary key autoincrement, idExo integer, question varchar(100), reponseAttendue varchar(3), correctionOui varchar(200), correctionNon varchar(200), foreign key(idExo) references exercice(id))")
    void createQuestionTable();
	
	@SqlUpdate("insert into question (idExo, question,reponseAttendue, correctionOui, correctionNon) values (:idExo, :question, :reponseAttendue, :correctionOui, :correctionNon)")
    @GetGeneratedKeys
    int insert(@BindBean() Question question);
	
	@SqlQuery("select * from question where id = :id")
    @RegisterMapperFactory(BeanMapperFactory.class)
    Question findById(@Bind("id") int id);
	
	@SqlQuery("select * from question where search like :question")
    @RegisterMapperFactory(BeanMapperFactory.class)
    List<Question> search(@Bind("question") String question);

	@SqlQuery("select * from question where idExo = :idExo")
    @RegisterMapperFactory(BeanMapperFactory.class)
    List<Question> searchQuestionFromExercice(@Bind("idExo") int idExo);
	
	@SqlUpdate("drop table if exists question")
    void dropQuestionTable();

    @SqlUpdate("delete from question where id = :id")
    void delete(@Bind("id") int id);

    @SqlQuery("select * from question order by id")
    @RegisterMapperFactory(BeanMapperFactory.class)
    List<Question> all();
    
    void close();
}
