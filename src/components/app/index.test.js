import React from 'react';
import { shallow, mount } from 'enzyme';
import { useDispatch } from 'react-redux';
import App from './index';
import { fetchApps } from '../../store/apps-list/actions';

jest.mock('react-redux');
jest.mock('./styles');
jest.mock('../../store/apps-list/actions');

const mockDispatch = () => 'Foo';

useDispatch.mockImplementation(() => mockDispatch);

describe('App', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    const wrapper = shallow(<App />);

    expect(wrapper).toMatchSnapshot();
  });

  it('fetches apps list', () => {
    const wrapper = mount(<App />);

    expect(fetchApps).toHaveBeenCalled();
  });
});
