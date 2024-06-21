import React, { useEffect, useState } from 'react'
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../CheckoutForm';
import { motion } from "framer-motion";

const stripePromise = loadStripe('pk_test_51PHKUpSDvD28vkbAr4LTyswzyeoKI775oxxru61PPxXagEb87FmbgetJcPkUxy5Zza0GU58nnFaLbZQKEEkQ7FIV00uPUNfo72');

const Payment = () => {
    const price = 500;
    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        const customer = {
            name: "Customer Name",
            email: "customer@example.com",
            address: {
                line1: "Address Line 1",
                postal_code: "Postal Code",
                city: "City",
                state: "State",
                country: "Bangladesh", // Assuming Bangladesh
            },
        };

        fetch('http://localhost:3000/create-payment-intent', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ price, description: 'Purchase of subscription', customer })
        })
            .then(response => response.json())
            .then(data => {
                console.log('Response data:', data);
                setClientSecret(data.clientSecret);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, [price]);

    const appearance = {
        theme: 'stripe',
    };
    const options = {
        clientSecret,
        appearance,
    };
    const variants = {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 0.5 } },
        exit: { opacity: 0, transition: { duration: 0.5 } }
    };
    return (

        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}

            // whileHover={{scale: 0.9 , opacity : 0.4}}

            className="section-container bg-gradient-to-r from-[#FFFFFF] from-0% to-[#FCFCFC] to-100%">
            <div className="py-10 flex flex-col md:flex-row justify-between items-center gap-8">
                <motion.div className="md:w-1/2">
                    <img src="/images/payment.jpg" alt=""></img>
                </motion.div>
                <motion.div variants={variants} initial="initial" animate="animate" exit="exit" className="md:w-1/2 space-y-7 px-4">
                    <div className='ml-40 mt-5'>
                        <h2 className='font-bold mb-10 text-lg ml-24'>Welcome to the subscription offer!</h2>
                        {clientSecret && (
                            <Elements options={options} stripe={stripePromise}>
                                <CheckoutForm />
                            </Elements>
                        )}
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}

export default Payment