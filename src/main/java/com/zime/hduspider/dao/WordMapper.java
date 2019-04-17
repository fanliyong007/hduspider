package com.zime.hduspider.dao;

import com.zime.hduspider.entity.Word;
import com.zime.hduspider.entity.WordExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface WordMapper {
    int countByExample(WordExample example);

    int deleteByExample(WordExample example);

    int deleteByPrimaryKey(String english);

    int insert(Word record);

    int insertSelective(Word record);

    List<Word> selectByExample(WordExample example);

    Word selectByPrimaryKey(String english);

    int updateByExampleSelective(@Param("record") Word record, @Param("example") WordExample example);

    int updateByExample(@Param("record") Word record, @Param("example") WordExample example);

    int updateByPrimaryKeySelective(Word record);

    int updateByPrimaryKey(Word record);
}