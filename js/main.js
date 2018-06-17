import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example_work.js';

const MYWORK = [
  {
    title:"The Legal Assistant, SAAS Legal Case Management",
    image: {
        desc:"The Legal Assistant, SAAS Legal Case Management developed with Grails, Groovy Java and lot's of love.",
        src:"images/saas-legal-software-tla.png",
        comment:""
    }
  },
  {
    title:"NFC",
    image: {
        desc:"New field work.",
        src:"images/saas-legal-software-tla.png",
        comment:""
    }
  }
];

ReactDOM.render(<ExampleWork work={MYWORK}/>, document.getElementById('example_work'));
