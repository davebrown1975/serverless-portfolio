import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example_work.js';

const MYWORK = [
  {
    title:"The Legal Assistant, SAAS Legal Case Management",
    href:"www.thelegalassistant.com",
    desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: {
        desc:"The Legal Assistant, SAAS Legal Case Management developed with Grails, Groovy Java and lot's of love.",
        src:"images/saas-legal-software-tla.png",
        comment:""
    }
  },
  {
    title:"NFC",
    href:"google.com",
    desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: {
        desc:"New field work.",
        src:"images/saas-legal-software-tla.png",
        comment:""
    }
  }
];

ReactDOM.render(<ExampleWork work={MYWORK}/>, document.getElementById('example_work'));
