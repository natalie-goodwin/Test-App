import React from 'react';

/*export default class LikeButton extends React.Component {
   /* render() { /*render method is where we define what the component will look like;
        or what html will be rendered to the application screen*/
       /* return React.createElement('button', {class: 'btn btn primary'}, 'Like');
    }
}

/*React.Component is the class that comes with React that we can extend to create
 the components we are working on*/

 /*JSX: Create React component is verbose; JavaScript XML 
 looks almost like HTML but uses JavaScript and it is 
 cleaner than the previous text above; using JSX reduces 
 verbosity of code from using create element while improving
 readability and maintainability*/

 // With JSX, the above becomes this: 
 export default class LikeButton extends React.Component {
 render() { 
        return <button className="btn btn-primary">Like</button>;
    }
}