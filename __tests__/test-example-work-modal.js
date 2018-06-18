import React from 'react';
import { shallow } from 'enzyme';
import ExampleWorkModal from '../js/example-work-modal';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

const MYWORK = {
  title:"The Legal Assistant, SAAS Legal Case Management",
  href:"www.thelegalassistant.com",
  desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  image: {
      desc:"The Legal Assistant, SAAS Legal Case Management developed with Grails, Groovy Java and lot's of love.",
      src:"images/saas-legal-software-tla.png",
      comment:""
  }
}

describe("Example work modal component", () => {
  let component = shallow(<ExampleWorkModal example={MYWORK} open={false} />);
  let openComponent = shallow(<ExampleWorkModal example={MYWORK} open={true} />);

  let anchors = component.find("a");

  it("should contain a single a tag", () => {
    expect(anchors.length).toEqual(1);
  });

  it("Should link to our project", () => {
    expect(anchors.prop('href')).toEqual(MYWORK.href);
  });

  it("Should have modal class set correctly", () => {
    expect(component.find(".background--skyBlue").hasClass('modal--closed')).toBe(true);
    expect(openComponent.find('.background--skyBlue').hasClass('modal--open')).toBe(true);
  });
});
