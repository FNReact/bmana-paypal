import React, { Fragment, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { Link } from "react-router-dom";

const PaypalPayment = () =>{
   
    return(
        <Fragment>
            <Container className="mt-5 text-center">
                <div className="payment_wrapper">
                <Row>
                    <Col lg={6}>
                        <div className="payment_option_card">
                           <h3> Pay Offline </h3>
                           <h6> Make checks payable to BMANA: (Bangladesh Medical Association of North America)
                                PLEASE MAIL YOUR CHECK To: <span>Abul K Azad, Treasurer BMANA, 8 Sage Estate, Menands, NY 12204</span> </h6>
                            <h6>OR</h6>
                            <h5>zelle/venmo your payment to: azad12204@gmail.com, print and scan your completed form, e-mail to
                                azad12204@gmail.com. </h5>
                        </div>
                    </Col>
                    <Col lg={6}>
                    <div className="payment_option_card">
                        <h3>Pay Now (Paypal)</h3>
                        <PayPalScriptProvider
                        options={{ "client-id": 'AQzDKS5VK91QnUQCfZncLWV3HWF4OI0qCNa6DyXePG7C7UGXtqoYfiWzVmWrwfVUjVMJwLZnCQP-PcBZ' }}>
                        <PayPalButtons
                        createOrder={(data, actions) => {
                            return actions.order.create({
                            purchase_units: [
                                {
                                amount: {
                                    value: "13.99",
                                },
                                },
                            ],
                            });
                        }}
                        onApprove={async (data, actions) => {
                            const details = await actions.order.capture();
                            const name = details.payer.name.given_name;
                            alert("Transaction completed by " + name);
                        }}
                        />
                    </PayPalScriptProvider>
                    </div>
                    </Col>
                </Row>
                </div>
            </Container>
        </Fragment> 
    )
}
export default  PaypalPayment;
