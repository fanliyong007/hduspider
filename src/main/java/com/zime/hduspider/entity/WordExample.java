package com.zime.hduspider.entity;

import java.util.ArrayList;
import java.util.List;

public class WordExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public WordExample() {
        oredCriteria = new ArrayList<Criteria>();
    }

    public void setOrderByClause(String orderByClause) {
        this.orderByClause = orderByClause;
    }

    public String getOrderByClause() {
        return orderByClause;
    }

    public void setDistinct(boolean distinct) {
        this.distinct = distinct;
    }

    public boolean isDistinct() {
        return distinct;
    }

    public List<Criteria> getOredCriteria() {
        return oredCriteria;
    }

    public void or(Criteria criteria) {
        oredCriteria.add(criteria);
    }

    public Criteria or() {
        Criteria criteria = createCriteriaInternal();
        oredCriteria.add(criteria);
        return criteria;
    }

    public Criteria createCriteria() {
        Criteria criteria = createCriteriaInternal();
        if (oredCriteria.size() == 0) {
            oredCriteria.add(criteria);
        }
        return criteria;
    }

    protected Criteria createCriteriaInternal() {
        Criteria criteria = new Criteria();
        return criteria;
    }

    public void clear() {
        oredCriteria.clear();
        orderByClause = null;
        distinct = false;
    }

    protected abstract static class GeneratedCriteria {
        protected List<Criterion> criteria;

        protected GeneratedCriteria() {
            super();
            criteria = new ArrayList<Criterion>();
        }

        public boolean isValid() {
            return criteria.size() > 0;
        }

        public List<Criterion> getAllCriteria() {
            return criteria;
        }

        public List<Criterion> getCriteria() {
            return criteria;
        }

        protected void addCriterion(String condition) {
            if (condition == null) {
                throw new RuntimeException("Value for condition cannot be null");
            }
            criteria.add(new Criterion(condition));
        }

        protected void addCriterion(String condition, Object value, String property) {
            if (value == null) {
                throw new RuntimeException("Value for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value));
        }

        protected void addCriterion(String condition, Object value1, Object value2, String property) {
            if (value1 == null || value2 == null) {
                throw new RuntimeException("Between values for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value1, value2));
        }

        public Criteria andEnglishIsNull() {
            addCriterion("English is null");
            return (Criteria) this;
        }

        public Criteria andEnglishIsNotNull() {
            addCriterion("English is not null");
            return (Criteria) this;
        }

        public Criteria andEnglishEqualTo(String value) {
            addCriterion("English =", value, "english");
            return (Criteria) this;
        }

        public Criteria andEnglishNotEqualTo(String value) {
            addCriterion("English <>", value, "english");
            return (Criteria) this;
        }

        public Criteria andEnglishGreaterThan(String value) {
            addCriterion("English >", value, "english");
            return (Criteria) this;
        }

        public Criteria andEnglishGreaterThanOrEqualTo(String value) {
            addCriterion("English >=", value, "english");
            return (Criteria) this;
        }

        public Criteria andEnglishLessThan(String value) {
            addCriterion("English <", value, "english");
            return (Criteria) this;
        }

        public Criteria andEnglishLessThanOrEqualTo(String value) {
            addCriterion("English <=", value, "english");
            return (Criteria) this;
        }

        public Criteria andEnglishLike(String value) {
            addCriterion("English like", value, "english");
            return (Criteria) this;
        }

        public Criteria andEnglishNotLike(String value) {
            addCriterion("English not like", value, "english");
            return (Criteria) this;
        }

        public Criteria andEnglishIn(List<String> values) {
            addCriterion("English in", values, "english");
            return (Criteria) this;
        }

        public Criteria andEnglishNotIn(List<String> values) {
            addCriterion("English not in", values, "english");
            return (Criteria) this;
        }

        public Criteria andEnglishBetween(String value1, String value2) {
            addCriterion("English between", value1, value2, "english");
            return (Criteria) this;
        }

        public Criteria andEnglishNotBetween(String value1, String value2) {
            addCriterion("English not between", value1, value2, "english");
            return (Criteria) this;
        }

        public Criteria andChineseIsNull() {
            addCriterion("Chinese is null");
            return (Criteria) this;
        }

        public Criteria andChineseIsNotNull() {
            addCriterion("Chinese is not null");
            return (Criteria) this;
        }

        public Criteria andChineseEqualTo(String value) {
            addCriterion("Chinese =", value, "chinese");
            return (Criteria) this;
        }

        public Criteria andChineseNotEqualTo(String value) {
            addCriterion("Chinese <>", value, "chinese");
            return (Criteria) this;
        }

        public Criteria andChineseGreaterThan(String value) {
            addCriterion("Chinese >", value, "chinese");
            return (Criteria) this;
        }

        public Criteria andChineseGreaterThanOrEqualTo(String value) {
            addCriterion("Chinese >=", value, "chinese");
            return (Criteria) this;
        }

        public Criteria andChineseLessThan(String value) {
            addCriterion("Chinese <", value, "chinese");
            return (Criteria) this;
        }

        public Criteria andChineseLessThanOrEqualTo(String value) {
            addCriterion("Chinese <=", value, "chinese");
            return (Criteria) this;
        }

        public Criteria andChineseLike(String value) {
            addCriterion("Chinese like", value, "chinese");
            return (Criteria) this;
        }

        public Criteria andChineseNotLike(String value) {
            addCriterion("Chinese not like", value, "chinese");
            return (Criteria) this;
        }

        public Criteria andChineseIn(List<String> values) {
            addCriterion("Chinese in", values, "chinese");
            return (Criteria) this;
        }

        public Criteria andChineseNotIn(List<String> values) {
            addCriterion("Chinese not in", values, "chinese");
            return (Criteria) this;
        }

        public Criteria andChineseBetween(String value1, String value2) {
            addCriterion("Chinese between", value1, value2, "chinese");
            return (Criteria) this;
        }

        public Criteria andChineseNotBetween(String value1, String value2) {
            addCriterion("Chinese not between", value1, value2, "chinese");
            return (Criteria) this;
        }

        public Criteria andFrequencyIsNull() {
            addCriterion("Frequency is null");
            return (Criteria) this;
        }

        public Criteria andFrequencyIsNotNull() {
            addCriterion("Frequency is not null");
            return (Criteria) this;
        }

        public Criteria andFrequencyEqualTo(Integer value) {
            addCriterion("Frequency =", value, "frequency");
            return (Criteria) this;
        }

        public Criteria andFrequencyNotEqualTo(Integer value) {
            addCriterion("Frequency <>", value, "frequency");
            return (Criteria) this;
        }

        public Criteria andFrequencyGreaterThan(Integer value) {
            addCriterion("Frequency >", value, "frequency");
            return (Criteria) this;
        }

        public Criteria andFrequencyGreaterThanOrEqualTo(Integer value) {
            addCriterion("Frequency >=", value, "frequency");
            return (Criteria) this;
        }

        public Criteria andFrequencyLessThan(Integer value) {
            addCriterion("Frequency <", value, "frequency");
            return (Criteria) this;
        }

        public Criteria andFrequencyLessThanOrEqualTo(Integer value) {
            addCriterion("Frequency <=", value, "frequency");
            return (Criteria) this;
        }

        public Criteria andFrequencyIn(List<Integer> values) {
            addCriterion("Frequency in", values, "frequency");
            return (Criteria) this;
        }

        public Criteria andFrequencyNotIn(List<Integer> values) {
            addCriterion("Frequency not in", values, "frequency");
            return (Criteria) this;
        }

        public Criteria andFrequencyBetween(Integer value1, Integer value2) {
            addCriterion("Frequency between", value1, value2, "frequency");
            return (Criteria) this;
        }

        public Criteria andFrequencyNotBetween(Integer value1, Integer value2) {
            addCriterion("Frequency not between", value1, value2, "frequency");
            return (Criteria) this;
        }
    }

    public static class Criteria extends GeneratedCriteria {

        protected Criteria() {
            super();
        }
    }

    public static class Criterion {
        private String condition;

        private Object value;

        private Object secondValue;

        private boolean noValue;

        private boolean singleValue;

        private boolean betweenValue;

        private boolean listValue;

        private String typeHandler;

        public String getCondition() {
            return condition;
        }

        public Object getValue() {
            return value;
        }

        public Object getSecondValue() {
            return secondValue;
        }

        public boolean isNoValue() {
            return noValue;
        }

        public boolean isSingleValue() {
            return singleValue;
        }

        public boolean isBetweenValue() {
            return betweenValue;
        }

        public boolean isListValue() {
            return listValue;
        }

        public String getTypeHandler() {
            return typeHandler;
        }

        protected Criterion(String condition) {
            super();
            this.condition = condition;
            this.typeHandler = null;
            this.noValue = true;
        }

        protected Criterion(String condition, Object value, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.typeHandler = typeHandler;
            if (value instanceof List<?>) {
                this.listValue = true;
            } else {
                this.singleValue = true;
            }
        }

        protected Criterion(String condition, Object value) {
            this(condition, value, null);
        }

        protected Criterion(String condition, Object value, Object secondValue, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.secondValue = secondValue;
            this.typeHandler = typeHandler;
            this.betweenValue = true;
        }

        protected Criterion(String condition, Object value, Object secondValue) {
            this(condition, value, secondValue, null);
        }
    }
}