import React from 'react';
import template      from './template.html.js';

class ArticlesItems extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return template.apply(this);
    }
}

export default ArticlesItems;