import React, { Fragment, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { Link } from "react-router-dom";

const PaypalDonate = () =>{

    return(
        <Fragment>
            <Container className="mt-5 text-center">
            <div className="payment_wrapper">
              <Row>
                <Col lg={3}></Col>
                <Col lg={6}>
                    <div className="donate_option_card">
                        <h3>Donate</h3>
                        <PayPalScriptProvider
                        options={{ "client-id": 'AQzDKS5VK91QnUQCfZncLWV3HWF4OI0qCNa6DyXePG7C7UGXtqoYfiWzVmWrwfVUjVMJwLZnCQP-PcBZ' }}>
                        <PayPalButtons
        fundingSource="paypal"
        style={{"layout":"vertical","label":"donate"}}
        disabled={false}
        createOrder={(data, actions) => {
            return actions.order
                .create({
                    purchase_units: [
                        {
                            amount: {
                                value: "2",
                                breakdown: {
                                    item_total: {
                                        currency_code: "USD",
                                        value: "2",
                                    },
                                },
                            },
                            items: [
                                {
                                    name: "donation-example",
                                    quantity: "1",
                                    unit_amount: {
                                        currency_code: "USD",
                                        value: "2",
                                    },
                                    category: "DONATION",
                                },
                            ],
                        },
                    ],
                })
                .then((orderId) => {
                    // Your code here after create the donation
                    return orderId;
                });
        }}
    />
                       </PayPalScriptProvider>
                    </div>
                </Col>
                <Col lg={3}></Col>
               </Row>
            </div>
            </Container>
        </Fragment> 
    )
}
export default  PaypalDonate;      