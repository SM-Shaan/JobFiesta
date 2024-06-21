import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import { Link } from 'react-router-dom';

const packages = [
    { name: "Start", monthlyPrice: 19, yearlyPrice: 199, description: "A common form of Lorem ipsum reads: Loren ipsum dolor sit amet, consectetur adipiscing elit.", green: "/images/greem.png" },
    { name: "Advance", monthlyPrice: 39, yearlyPrice: 399, description: "A common form of Lorem ipsum reads: Loren ipsum dolor sit amet, consectetur adipiscing elit.", green: "/images/greem.png" },
    { name: "Premium", monthlyPrice: 59, yearlyPrice: 599, description: "A common form of Lorem ipsum reads: Loren ipsum dolor sit amet, consectetur adipiscing elit.", green: "/images/greem.png" },
];

const payments = [
    { id: 1, name: 'John Doe', amount: 19, date: '2023-05-10', package: 'Start' },
    { id: 2, name: 'Jane Smith', amount: 399, date: '2023-06-15', package: 'Advance' },
    { id: 3, name: 'Mike Johnson', amount: 59, date: '2023-07-20', package: 'Premium' },
];

const getPaymentFrequency = (amount, packageDetails) => {
    if (amount === packageDetails.monthlyPrice) {
        return 'Monthly';
    } else if (amount === packageDetails.yearlyPrice) {
        return 'Yearly';
    } else {
        return 'Unknown';
    }
};

const Payments = () => {
    const [filter, setFilter] = useState('');
    const [filterValue, setFilterValue] = useState('');

    const filteredPayments = payments.filter(payment => {
        if (!filter || !filterValue) return true;
        return payment[filter] && payment[filter].toString().toLowerCase().includes(filterValue.toLowerCase());
    });

    const monthlyPayments = filteredPayments.filter(payment => {
        const packageDetails = packages.find(pkg => pkg.name === payment.package);
        return packageDetails && getPaymentFrequency(payment.amount, packageDetails) === 'Monthly';
    });

    const yearlyPayments = filteredPayments.filter(payment => {
        const packageDetails = packages.find(pkg => pkg.name === payment.package);
        return packageDetails && getPaymentFrequency(payment.amount, packageDetails) === 'Yearly';
    });

    const data = {
        labels: ['Monthly', 'Yearly'],
        datasets: [
            {
                data: [monthlyPayments.length, yearlyPayments.length],
                backgroundColor: ['#36A2EB', '#FF6384'],
            },
        ],
    };

    return (
        <div className="p-4 flex ">

            <div>
                <div className="mb-4">
                    <label className="mr-2">Filter by:</label>
                    <select className="mr-2" value={filter} onChange={(e) => setFilter(e.target.value)}>
                        <option value="">Select</option>
                        <option value="name">Name</option>
                        <option value="amount">Amount</option>
                        <option value="date">Date</option>
                        <option value="package">Package</option>
                    </select>
                    <input
                        type="text"
                        placeholder="Filter value"
                        value={filterValue}
                        onChange={(e) => setFilterValue(e.target.value)}
                        className="border p-1"
                    />
                </div>
                <table className="min-w-full bg-white">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b">ID</th>
                            <th className="py-2 px-4 border-b">Name</th>
                            <th className="py-2 px-4 border-b">Amount</th>
                            <th className="py-2 px-4 border-b">Date</th>
                            <th className="py-2 px-4 border-b">Package</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredPayments.map((payment) => {
                            const packageDetails = packages.find(pkg => pkg.name === payment.package);
                            const frequency = packageDetails ? getPaymentFrequency(payment.amount, packageDetails) : 'N/A';

                            return (
                                <tr key={payment.id}>
                                    <td className="py-2 px-4 border-b">{payment.id}</td>
                                    <td className="py-2 px-4">
                                        <Link to={`/profile/${payment.name}`} className="text-blue-500 hover:underline">{payment.name}</Link>
                                    </td>
                                    <td className="py-2 px-4 border-b">${payment.amount}</td>
                                    <td className="py-2 px-4 border-b">{payment.date}</td>
                                    <td className="py-2 px-4 border-b">{payment.package}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <div className='ml-40'>
                <h1 className="text-2xl font-bold mb-4">Payments</h1>
                <div className="mt-6">
                    <h2 className="text-xl font-bold mb-2">Payment Frequency Survey</h2>
                    <div className="w-full sm:w-3/3 mx-auto">
                        <Pie data={data} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payments;
