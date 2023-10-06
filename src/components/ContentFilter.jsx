import React from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";
import classes from '../styles/PostFilter.module.css'
import MyButton from "./UI/button/MyButton";

const PostFilter = ({filter, setFilter, limit, setLimit, setIsClear}) => {
    return (
        <div className={classes.filter}>
            <MyInput
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
                placeholder={"Search..."}
            />
            <div>
                <MySelect
                    value={filter.sort}
                    onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                    defaultValue="Sort"
                    options={[
                        {value: "title", name: "By title"},
                        {value: "body", name: "By body"},
                    ]}
                />
                <MySelect
                    value={limit}
                    onChange={value => setLimit(value)}
                    defaultValue={"Count of posts"}
                    options={[
                        {value: 5, name: '5 posts'},
                        {value: 10, name: '10 posts'},
                        {value: 25, name: '25 posts'},
                        {value: -1, name: 'Show all posts'},
                    ]}
                />
                <MyButton onClick={() => setIsClear(true)}>Clear</MyButton>
            </div>
        </div>
    );
};

export default PostFilter;