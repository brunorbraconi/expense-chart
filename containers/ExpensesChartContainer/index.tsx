import React, {HTMLAttributes} from 'react';
import ExpensesChart from '../../components/ExpensesChart';
import {IDaySpending} from '../../types/spending';

const data: IDaySpending[] = [
    {
        "day": "mon",
        "amount": 17.45
    },
    {
        "day": "tue",
        "amount": 34.91
    },
    {
        "day": "wed",
        "amount": 52.36
    },
    {
        "day": "thu",
        "amount": 31.07
    },
    {
        "day": "fri",
        "amount": 23.39
    },
    {
        "day": "sat",
        "amount": 43.28
    },
    {
        "day": "sun",
        "amount": 25.48
    }
];

const ExpensesChartContainer: React.FC<HTMLAttributes<HTMLDivElement>> = (props) => {
    return (
        <div {...props}>
            <ExpensesChart balance={921.48}
                           data={data}
                           total={478.33}
                           variation={2.4}
            />
        </div>
    );
};

export default ExpensesChartContainer;
