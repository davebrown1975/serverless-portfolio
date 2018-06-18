import React from 'react';
import { shallow } from 'enzyme';
import ExampleWork from '../js/example_work';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

const MYWORK = [
  {
    title:"The Legal Assistant, SAAS Legal Case Management",
    image: {
        desc:"The Legal Assistant, SAAS Legal Case Management developed with Grails, Groovy Java and lot's of love.",
        src:"images/saas-legal-software-tla.png",
        comment:""
    }
  }
];

describe ("Example work component", () => {
  let component = shallow(<ExampleWork work={MYWORK} />);

  it("should be a span element", () => {
      expect(component.type()).toEqual('span');
  })

  it("Should allow modal to open", () => {
    component.instance().openModal();
    expect(component.instance().state.modalOpen).toBe(true);

    component.instance().closeModal();
    expect(component.instance().state.modalOpen).toBe(false);
  })
});
