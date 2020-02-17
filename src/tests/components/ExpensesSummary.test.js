import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should render ExpensesSummary for 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={4500} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary for more than one expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={2} expensesTotal={200000} />);
    expect(wrapper).toMatchSnapshot();
});
