import React, {HTMLAttributes} from 'react';
import styles from './style.module.scss';
import Chart from '../../containers/Chart';
import {IDaySpending} from '../../types/spending';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    balance: number;
    data: IDaySpending[];
    total: number;
    variation: number;
};

const ExpensesChart: React.FC<IProps> = ({ balance, data, total, variation }) => {
    return (
        <div className={styles.expensesChart}>
            <div className={styles.balanceBox}>
                <div className={styles.label}>
                    My balance
                </div>
                <div className={styles.balance}>
                    ${balance?.toLocaleString()}
                </div>
            </div>
            <div className={styles.expensesChartBox}>
                <div className={styles.title}>
                    Spending - Last 7 days
                </div>

                <Chart className={styles.chart}
                       data={data.map(({day, amount}) => {
                           return {
                               label: day,
                               amount,
                           };
                       })}
                       barColor={'#EC755D'}
                       barHoverColor={'#FF9B86'}
                       maxBarColor={'#76B5BC'}
                       maxBarHoverColor={'#B4E0E5'}
                />

                <hr className={styles.splitter}/>

                <div className={styles.footer}>
                    <div className={styles.leftSide}>
                        <div className={styles.label}>
                            Total this month
                        </div>
                        <div className={styles.total}>
                            ${total?.toLocaleString()}
                        </div>
                    </div>
                    <div className={styles.rightSide}>
                        <div className={styles.variation}>
                            {variation > 0 && '+'}{variation?.toLocaleString()}%
                        </div>
                        <div className={styles.label}>
                            from last month
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ExpensesChart;
