//  const h2=React.createElement('h2',{className:"subheading"},'hello React')

//  root.render(h2)
// const container=React.createElement('div',
// {className:'container',id:'container'},
// [React.createElement('section',{key:1},
// [React.createElement('p',{key:1},
// 'The library for web and native user'),
// ]
// ),])
const h2=<h2>Hello JSX</h2>
const  root =ReactDOM.createRoot(document.querySelector('#root'))
root.render(h2)