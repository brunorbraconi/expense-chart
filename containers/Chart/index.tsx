import React, {CSSProperties, HTMLAttributes, useMemo} from 'react';

interface IProps extends HTMLAttributes<HTMLUListElement> {
    data: {
        label: string;
        amount: number;
    }[];
    barColor: string;
    barHoverColor: string;
    maxBarColor: string;
    maxBarHoverColor: string;
};

const Chart: React.FC<IProps> = ({
                                     data, barColor, barHoverColor, maxBarColor,
                                     maxBarHoverColor, ...props
                                 }) => {
    const maxValue = useMemo(() => {
        if (!data) {
            return 0;
        }

        return Math.max(...data.map(({amount}) => amount));
    }, [data]);

    return (
        <ul {...props}>
            {data?.map(({label, amount}, index) => (
                <li key={index}
                    style={{
                        '--height': `${amount / maxValue}`,
                        '--barColor': amount === maxValue ? maxBarColor : barColor,
                        '--barHoverColor': amount === maxValue ? maxBarHoverColor : barHoverColor,
                    } as CSSProperties}
                    data-amount={amount}
                >
                    {label}
                </li>
            ))}
        </ul>
    );
};

export default Chart;

