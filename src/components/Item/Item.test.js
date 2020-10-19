import React from "react";

import { configure, shallow } from "enzyme";
import Adaptor from "enzyme-adapter-react-16";
import Item from "./Item";

configure({ adapter: new Adaptor() });

describe("<Item />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Item itemName='TestName' desription='TestDescription'/>);
  });

  it("should render one <h1/> elements", () => {
    expect(wrapper.contains('<h1>'));
    expect(wrapper.text()).toEqual('TestName');
    })

  it("should contain text TestName", () => {
    expect(wrapper.text()).toEqual('TestName');
    })

  it("should contain text TestDescription", () => {
    expect(wrapper.text()).toEqual('TestName');
    })


  })
