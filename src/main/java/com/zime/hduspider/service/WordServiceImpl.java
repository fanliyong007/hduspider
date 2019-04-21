package com.zime.hduspider.service;

import com.zime.hduspider.dao.WordMapper;
import com.zime.hduspider.entity.Word;
import com.zime.hduspider.entity.WordExample;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;
@Service("wordService")
public class WordServiceImpl implements WordService
{
    @Resource
    private WordMapper wordMapper;
    @Override
    public List<Word> getAll()
    {
        WordExample wordExample=new WordExample();
        wordExample.setOrderByClause("Frequency");
        return wordMapper.selectByExample(wordExample);
    }
}
