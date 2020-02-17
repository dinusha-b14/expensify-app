import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
    const total = selectExpensesTotal([]);
    expect(total).toEqual(0);
});

test('should correctly add up a single expense', () => {
    const expense = expenses[2];
    const total = selectExpensesTotal([expense]);
    expect(total).toEqual(4500);
});

test('should correctly add up multiple expenses', () => {
    const total = selectExpensesTotal(expenses);
    expect(total).toEqual(114195);
});
