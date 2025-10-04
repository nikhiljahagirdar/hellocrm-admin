"use client"

import SpkToastify from "@/shared/@spk-reusable-components/reusable-plugins/spk-toastify";
import SpkButton from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-buttons";
import { reusabletoast1, reusabletoast10, reusabletoast2, reusabletoast3, reusabletoast4, reusabletoast5, reusabletoast6, reusabletoast7, reusabletoast8, reusabletoast9, toast1, toast10, toast2, toast3, toast4, toast5, toast6, toast7, toast8, toast9 } from "@/shared/data/prism-code/uielements-prism";
import Seo from "@/shared/layouts-components/seo/seo";
import ShowCode from "@/shared/layouts-components/showcode/showcode";
import React, { Fragment, useState } from "react";
import { Card, Col, Row, Toast, ToastContainer } from "react-bootstrap";
import { toast } from "react-toastify";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Image from "next/image";

interface ToastsProps { }

const Toasts: React.FC<ToastsProps> = () => {

    const [toasts, setToasts] = useState<{ [key: string]: boolean }>({});
    
    const toggleShowA = () => setToasts(prev => ({ ...prev, showA: !prev.showA }));
    const toggleShow2 = () => setToasts(prev => ({ ...prev, show2: !prev.show2 }));
    const toggleShow3 = () => setToasts(prev => ({ ...prev, show3: !prev.show3 }));

    const addToast = (toastName: string) => {
        setToasts((prevToasts) => ({
            ...prevToasts,
            [toastName]: true,
        }));
    };

    const handleToasts = (toastName: string) => {
        setToasts((prevToasts) => ({ ...prevToasts, [toastName]: false }));
    };

    //js
    const notify = () => toast("I'm a toast message.");

    return (

        <Fragment>

            {/* <!-- Page Header --> */}

            <Seo title="Uielements-Toasts" />

            <Pageheader title="Ui Elements" currentpage="Toasts" activepage="Toasts" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start:: row-1 --> */}

            <Row>
                <Col xl={12}>
                    <ShowCode title="Live example" customCardClass="custom-card" customCardBodyClass="" reactCode={toast2} reusableCode={reusabletoast2}>
                        <SpkButton Buttontype="button" Buttonvariant="primary" Id="liveToastBtn" onClickfunc={() => addToast('live')}>Show live
                            toast</SpkButton>
                        <ToastContainer className="toast-container position-fixed top-0 end-0 p-3">
                            <Toast show={toasts['live'] || false} onClose={() => handleToasts('live')} className="toast show" role="alert" aria-live="assertive" aria-atomic="true" data-bs-autohide="false">
                                <Toast.Header>
                                    <Image fill src="../../../assets/images/brand-logos/fav.ico" alt="" className="me-2" height="18" />
                                    <strong className="me-auto">Velvet</strong>
                                    <small>11 mins ago</small>
                                </Toast.Header>
                                <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                            </Toast>
                        </ToastContainer>
                    </ShowCode>
                    <ShowCode title=" Color schemes" customCardClass="custom-card" customCardBodyClass="" reactCode={toast4} reusableCode={reusabletoast4}>
                        <Toast show={toasts["primary"]} onClose={() => handleToasts('primary')} className="toast show" role="alert" aria-live="assertive" aria-atomic="true" data-bs-autohide="false">
                            <Toast.Header>
                                <Image fill src="../../../assets/images/brand-logos/fav.ico" alt="" className="me-2" height="18" />
                                <strong className="me-auto">Velvet</strong>
                                <small>11 mins ago</small>
                            </Toast.Header>
                            <Toast.Body>Hello, world! This is the Primary toast message.</Toast.Body>
                        </Toast>
                        <Toast show={toasts["secondary"]} onClose={() => handleToasts('secondary')} className="toast show" role="alert" aria-live="assertive" aria-atomic="true" data-bs-autohide="false">
                            <Toast.Header>
                                <Image fill src="../../../assets/images/brand-logos/fav.ico" alt="" className="me-2" height="18" />
                                <strong className="me-auto">Velvet</strong>
                                <small>11 mins ago</small>
                            </Toast.Header>
                            <Toast.Body>Hello, world! This is the Secondary toast.</Toast.Body>
                        </Toast>
                        <Toast show={toasts["warning"]} onClose={() => handleToasts('warning')} className="toast show" role="alert" aria-live="assertive" aria-atomic="true" data-bs-autohide="false">
                            <Toast.Header>
                                <Image fill src="../../../assets/images/brand-logos/fav.ico" alt="" className="me-2" height="18" />
                                <strong className="me-auto">Velvet</strong>
                                <small>11 mins ago</small>
                            </Toast.Header>
                            <Toast.Body>Hello, world! This is the Success toast message.</Toast.Body>
                        </Toast>
                        <Toast show={toasts["info"]} onClose={() => handleToasts('info')} className="toast show" role="alert" aria-live="assertive" aria-atomic="true" data-bs-autohide="false">
                            <Toast.Header>
                                <Image fill src="../../../assets/images/brand-logos/fav.ico" alt="" className="me-2" height="18" />
                                <strong className="me-auto">Velvet</strong>
                                <small>11 mins ago</small>
                            </Toast.Header>
                            <Toast.Body>Hello, world! This is the Info toast message.</Toast.Body>
                        </Toast>
                    </ShowCode>
                </Col>
                <Col xl={12}>
                    <ShowCode title="Basic example" customCardClass="custom-card" customCardBodyClass="" reactCode={toast1} reusableCode={reusabletoast1}>
                        <Toast show={toasts['basic']} onClose={() => handleToasts('basic')} className="toast show" role="alert" aria-live="assertive" aria-atomic="true" data-bs-autohide="false">
                            <Toast.Header>
                                <Image fill src="../../../assets/images/brand-logos/fav.ico" alt="" className="me-2" height="18" />
                                <strong className="me-auto">Velvet</strong>
                                <small>11 mins ago</small>
                            </Toast.Header>
                            <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                        </Toast>
                    </ShowCode>
                    <ShowCode title="Stacking" customCardClass="custom-card" customCardBodyClass="" reactCode={toast3} reusableCode={reusabletoast3}>
                        <ToastContainer className="toast-container position-static">

                            <Toast show={toasts["stack"]} onClose={() => handleToasts('stack')} className="toast show" role="alert" aria-live="assertive" aria-atomic="true" data-bs-autohide="false">
                                <Toast.Header>
                                    <Image fill src="../../../assets/images/brand-logos/fav.ico" alt="" className="me-2" height="18" />
                                    <strong className="me-auto">Velvet</strong>
                                    <small>jsut now</small>
                                </Toast.Header>
                                <Toast.Body>See? Just like this.</Toast.Body>
                            </Toast>
                            <Toast show={toasts["stack1"]} onClose={() => handleToasts('stack1')} className="toast show" role="alert" aria-live="assertive" aria-atomic="true" data-bs-autohide="false">
                                <Toast.Header>
                                    <Image fill src="../../../assets/images/brand-logos/fav.ico" alt="" className="me-2" height="18" />
                                    <strong className="me-auto">Velvet</strong>
                                    <small>2 seconds ago</small>
                                </Toast.Header>
                                <Toast.Body> Heads up, toasts will stack automatically</Toast.Body>
                            </Toast>

                        </ToastContainer>
                    </ShowCode>
                </Col>
                <Col xl={12}>
                    <ShowCode title="Translucent" customCardClass="custom-card" customCardBodyClass="" reactCode={toast7} reusableCode={reusabletoast7}>
                        <Toast show={toasts['transColor']} onClose={() => handleToasts('transColor')} className="toast show" role="alert" aria-live="assertive" aria-atomic="true" data-bs-autohide="false">
                            <Toast.Header>
                                <Image fill src="../../../assets/images/brand-logos/fav.ico" alt="" className="me-2" height="18" />
                                <strong className="me-auto">Velvet</strong>
                                <small>11 mins ago</small>
                            </Toast.Header>
                            <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                        </Toast>
                    </ShowCode>
                    <ShowCode title="Custom content" customCardClass="custom-card" customCardBodyClass="" reactCode={toast8} reusableCode={reusabletoast8}>
                        <Toast show={toasts['customColor']} onClose={() => handleToasts('customColor')} className="toast show" role="alert" aria-live="assertive" aria-atomic="true" data-bs-autohide="false">
                            <Toast.Header>
                                <Image fill src="../../../assets/images/brand-logos/fav.ico" alt="" className="me-2" height="18" />
                                <strong className="me-auto">Velvet</strong>
                                <small>11 mins ago</small>
                            </Toast.Header>
                            <Toast.Body>Hello, world! This is Primary toast message.</Toast.Body>
                        </Toast>
                        <div>
                            <span className="my-4 text-muted">
                                Alternatively, you can also add additional controls and components to
                                toasts.
                            </span>
                        </div>
                        <Toast className="toast fade show mt-2" role="alert" aria-live="assertive" show={toasts['customsColor']}>
                            <Toast.Body>
                                Hello, world! This is a toast message.
                                <div className="mt-2 pt-2 border-top">
                                    <SpkButton Buttontype="button" Buttonvariant="primary" Size="sm" Customclass="me-2">Take
                                        action</SpkButton>
                                    <SpkButton Buttontype="button" Size="sm" Buttonvariant="secondary" onClickfunc={() => handleToasts('customsColor')} >Close</SpkButton>
                                </div>
                            </Toast.Body>
                        </Toast>
                    </ShowCode>
                </Col>
            </Row>

            {/* <!-- End:: row-1 --> */}

            {/* <!-- Start:: row-2 --> */}

            <Row>
                <Col xl={12}>
                    <ShowCode title="Color Variants Live" customCardClass="custom-card" customCardBodyClass="" reactCode={toast6} reusableCode={reusabletoast6}>
                        <div className="btn-list">
                            <SpkButton Buttontype="button" Buttonvariant='primary-light' Customclass="btn me-2" Id="primaryToastBtn" onClickfunc={() => addToast('PrimaryColor')}>Primary</SpkButton>
                            <SpkButton Buttonvariant='secondary-light' Buttontype="button" Customclass="btn me-2" Id="secondaryToastBtn" onClickfunc={() => addToast('SecondaryColor')}>secondary</SpkButton>
                            <SpkButton Buttonvariant='info-light' Buttontype="button" Customclass="btn  me-2" Id="infoToastBtn" onClickfunc={() => addToast('InfoColor')}>info</SpkButton>
                            <SpkButton Buttonvariant='success-light' Buttontype="button" Customclass="btn  me-2" Id="successToastBtn" onClickfunc={() => addToast('SuccessColor')}>success</SpkButton>
                            <SpkButton Buttonvariant='danger-light' Buttontype="button" Customclass="btn me-2" Id="dangerToastBtn" onClickfunc={() => addToast('DangerColor')}>danger</SpkButton>
                            <SpkButton Buttonvariant='warning-light' Buttontype="button" Customclass="btn  me-2" Id="warningToastBtn" onClickfunc={() => addToast('WarningColor')}>warning</SpkButton>
                        </div>
                        <ToastContainer className="toast-container position-fixed top-0 end-0 p-3">
                            <Toast show={toasts['PrimaryColor'] || false} onClose={() => handleToasts('PrimaryColor')} className="toast show" role="alert" aria-live="assertive" aria-atomic="true" data-bs-autohide="false">
                                <Toast.Header>
                                    <Image fill src="../../../assets/images/brand-logos/fav.ico" alt="" className="me-2" height="18" />
                                    <strong className="me-auto">Velvet</strong>
                                    <small>11 mins ago</small>
                                </Toast.Header>
                                <Toast.Body>Your toast message here.</Toast.Body>
                            </Toast>
                        </ToastContainer>
                    </ShowCode>
                </Col>
                <Col xl={12}>
                    <ShowCode title="Solid Background Toasts" customCardClass="custom-card" customCardBodyClass="" reactCode={toast5} reusableCode={reusabletoast5}>
                        <div className="btn-list">
                            <SpkButton Buttonvariant='primary' Buttontype="button" Customclass="me-2" Id="solidprimaryToastBtn" onClickfunc={() => addToast('solidPrimary')}>Primary</SpkButton>
                            <SpkButton Buttonvariant='secondary' Buttontype="button" Customclass="me-2" Id="solidsecondaryToastBtn" onClickfunc={() => addToast('solidSecondary')}>secondary</SpkButton>
                            <SpkButton Buttonvariant='info' Buttontype="button" Customclass="me-2" Id="solidinfoToastBtn" onClickfunc={() => addToast('solidInfo')}>info</SpkButton>
                            <SpkButton Buttonvariant='success' Buttontype="button" Customclass="me-2" Id="solidsuccessToastBtn" onClickfunc={() => addToast('solidSuccess')}>success</SpkButton>
                            <SpkButton Buttonvariant='danger' Buttontype="button" Customclass="me-2" Id="soliddangerToastBtn" onClickfunc={() => addToast('solidDanger')}>danger</SpkButton>
                            <SpkButton Buttonvariant='warning' Buttontype="button" Customclass="me-2" Id="solidwarningToastBtn" onClickfunc={() => addToast('solidWarning')}>warning</SpkButton>
                        </div>
                        <ToastContainer className="toast-container position-fixed top-0 end-0 p-3">
                            <Toast show={toasts['solidPrimary'] || false} onClose={() => handleToasts('solidPrimary')} className="toast show" role="alert" aria-live="assertive" aria-atomic="true" data-bs-autohide="false">
                                <Toast.Header>
                                    <Image fill src="../../../assets/images/brand-logos/fav.ico" alt="" className="me-2" height="18" />
                                    <strong className="me-auto">Velvet</strong>
                                    <small>11 mins ago</small>
                                </Toast.Header>
                                <Toast.Body>Your toast message here.</Toast.Body>
                            </Toast>
                        </ToastContainer>
                    </ShowCode>
                </Col>
            </Row>

            {/* <!-- End:: row-2 --> */}

            {/* <!-- Start:: row-3 --> */}

            <Row>
                <Col xl={12}>
                    <ShowCode title="Toast Placements" customCardClass="custom-card" customCardBodyClass="" reactCode={toast10} reusableCode={reusabletoast10}>
                        <div className="btn-list">
                            <SpkButton Buttonvariant='outline-primary' Buttontype="button" onClickfunc={() => addToast('topLeft')} Customclass="me-2" Id="topleftToastBtn">Top Left</SpkButton>
                            <SpkButton Buttonvariant='outline-primary' Buttontype="button" onClickfunc={() => addToast('topCenter')} Customclass="me-2" Id="topcenterToastBtn">Top Center</SpkButton>
                            <SpkButton Buttonvariant='outline-primary' Buttontype="button" onClickfunc={() => addToast('topRight')} Customclass="me-2" Id="toprightToastBtn">Top Right</SpkButton>
                            <SpkButton Buttonvariant='outline-primary' Buttontype="button" onClickfunc={() => addToast('middleLeft')} Customclass="me-2" Id="middleleftToastBtn">Middle Left</SpkButton>
                            <SpkButton Buttonvariant='outline-primary' Buttontype="button" onClickfunc={() => addToast('middleCenter')} Customclass="me-2" Id="middlecenterToastBtn">Middle Center</SpkButton>
                            <SpkButton Buttonvariant='outline-primary' Buttontype="button" onClickfunc={() => addToast('middleRight')} Customclass="me-2" Id="middlerightToastBtn">Middle Right</SpkButton>
                            <SpkButton Buttonvariant='outline-primary' Buttontype="button" onClickfunc={() => addToast('bottomLeft')} Customclass="me-2" Id="bottomleftToastBtn">Bottom Left</SpkButton>
                            <SpkButton Buttonvariant='outline-primary' Buttontype="button" onClickfunc={() => addToast('bottomCenter')} Customclass="me-2" Id="bottomcenterToastBtn">Bottom Center</SpkButton>
                            <SpkButton Buttonvariant='outline-primary' Buttontype="button" onClickfunc={() => addToast('bottomRight')} Customclass="me-2" Id="bottomrightToastBtn">Bottom Right</SpkButton>
                        </div>
                        <ToastContainer className="toast-container position-fixed top-0 start-0 p-3">
                            <Toast show={toasts['topLeft'] || false} onClose={() => handleToasts('topLeft')} className="toast show" role="alert" aria-live="assertive" aria-atomic="true" data-bs-autohide="false">
                                <Toast.Header>
                                    <Image fill src="../../../assets/images/brand-logos/fav.ico" alt="" className="me-2" height="18" />
                                    <strong className="me-auto">Velvet</strong>
                                    <small>11 mins ago</small>
                                </Toast.Header>
                                <Toast.Body>Your toast message here.</Toast.Body>
                            </Toast>
                        </ToastContainer>
                    </ShowCode>
                </Col>
            </Row>

            {/* <!-- End:: row-3 --> */}

            {/* <!-- Start:: row-4 --> */}

            <Row>
                <Col xl={6}>
                    <ShowCode title="Aligning Toast Using Flexbox" customCardClass="custom-card" customCardBodyClass="" reactCode={toast9} reusableCode={reusabletoast9}>
                        <div className="bd-example bg-light bd-example-toasts d-flex p-0 px-3">
                            <div aria-live="polite" aria-atomic="true"
                                className="d-flex justify-content-center align-items-center w-100">
                                <Toast show={toasts['alignColor']} onClose={() => handleToasts('alignColor')} className="toast show" role="alert" aria-live="assertive" aria-atomic="true" data-bs-autohide="false">
                                    <Toast.Header>
                                        <Image fill src="../../../assets/images/brand-logos/fav.ico" alt="" className="me-2" height="18" />
                                        <strong className="me-auto">Velvet</strong>
                                        <small>11 mins ago</small>
                                    </Toast.Header>
                                    <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                                </Toast>
                            </div>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                TOASTIFY JS
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <SpkButton Buttonvariant="primary" Id="toast-button" onClickfunc={notify}>Click For Live Toast</SpkButton>
                            <SpkToastify position="top-right" />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* <!-- End:: row-4 --> */}

        </Fragment>
    )
};

export default Toasts;