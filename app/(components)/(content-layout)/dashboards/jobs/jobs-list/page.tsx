"use client"

import SpkBadge from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-badge";
import SpkDropdown from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-dropdown";
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";
import { JobsListData } from "@/shared/data/dashboards/jobs/joblistdata";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";
import { Card, Col, Dropdown, Form, Pagination, Row } from "react-bootstrap";

interface JobsListProps { }

const JobsList: React.FC<JobsListProps> = () => {

    return (
        <Fragment>

            {/* <!-- Page Header --> */}

            <Seo title="Jobs-Job List" />

            <Pageheader title="Dashboards" subtitle="Jobs" currentpage="Job List" activepage="Job List" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}

            <Row>
                <Col xl={12}>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                All Jobs List
                            </div>
                            <div className="d-flex flex-wrap gap-2">
                                <Link scroll={false} href="/dashboards/jobs/job-post" className="btn btn-primary btn-wave">
                                    <i className="ri-add-line me-1 align-middle"></i>Post Job
                                </Link>
                                <div>
                                    <Form.Control className="" type="text" placeholder="Search Here" aria-label=".form-control-sm example" />
                                </div>
                                <SpkDropdown Customtoggleclass="btn btn-primary btn-wave no-caret" Toggletext="Sort By" Arrowicon={true}>
                                    <Dropdown.Item as='li' href="#!">Posted Date</Dropdown.Item>
                                    <Dropdown.Item href="#!">Status</Dropdown.Item>
                                    <Dropdown.Item href="#!">Department</Dropdown.Item>
                                    <Dropdown.Item href="#!">Job Type</Dropdown.Item>
                                    <Dropdown.Item href="#!">Newest</Dropdown.Item>
                                    <Dropdown.Item href="#!">Oldest</Dropdown.Item>
                                </SpkDropdown>
                            </div>
                        </Card.Header>
                        <Card.Body className="p-0">
                            <div className="table-responsive">
                                <SpkTables tableClass="table-hover text-nowrap" showCheckbox={true} Customcheckclass="ps-4" header={[{ title: 'Job Title' }, { title: 'Company' }, { title: 'Department' }, { title: 'Applications' }, { title: 'Vacancies' }, { title: 'Status' }, { title: 'Job Type' }, { title: 'Posted Date' }, { title: 'Action' }]}>
                                    {JobsListData.map((job, index) => (
                                        <tr key={index}>
                                            <td className="ps-4">
                                                <input className="form-check-input" type="checkbox" id={`checkboxNoLabel${job.id}`} defaultChecked={job.id == 2 || job.id == 3 || job.id == 6 || job.id == 7} />
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="lh-1">
                                                        <span className={`avatar avatar-md avatar-rounded bg-${job.svgClass}-transparent svg-${job.svgClass}`}>
                                                            {job.svgIcon}
                                                        </span>
                                                    </div>
                                                    <div className="ms-2">
                                                        <p className="fw-medium mb-0 d-flex align-items-center">
                                                            <Link scroll={false} href="/dashboards/jobs/job-details">{job.title}</Link>
                                                        </p>
                                                        <p className="fs-12 text-muted mb-0">{job.location}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span className="avatar avatar-md me-1 avatar-rounded">
                                                        <Image width={40} height={40} src={job.imgSrc} alt={job.company} />
                                                    </span>
                                                    <Link scroll={false} href="#!" className="fw-medium mb-0">
                                                        {job.company}
                                                    </Link>
                                                </div>
                                            </td>
                                            <td>{job.department}</td>
                                            <td>{job.applicants}</td>
                                            <td>{job.interviews}</td>
                                            <td>
                                                <SpkBadge variant="" Customclass={`rounded-pill bg-${job.color}-transparent`}>
                                                    {job.status}
                                                </SpkBadge>
                                            </td>
                                            <td>{job.employmentType}</td>
                                            <td>{job.postedDate}</td>
                                            <td>
                                                <Link scroll={false} href="/dashboards/jobs/job-details" className="btn btn-icon btn-sm btn-primary-light btn-wave waves-effect waves-light me-1">
                                                    <i className="ri-eye-line"></i>
                                                </Link>
                                                <Link href="#!" scroll={false} className="btn btn-icon btn-sm btn-info-light btn-wave waves-effect waves-light me-1">
                                                    <i className="ri-edit-line"></i>
                                                </Link>
                                                <Link href="#!" scroll={false} className="btn btn-icon btn-sm btn-danger-light btn-wave waves-effect waves-light">
                                                    <i className="ri-delete-bin-line"></i>
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </SpkTables>
                            </div>
                        </Card.Body>
                        <Card.Footer className="border-top-0">
                            <div className="d-flex align-items-center flex-wrap overflow-auto">
                                <div className="mb-2 mb-sm-0">
                                    Showing <b>1</b> to <b>8</b> of <b>100</b> entries <i className="bi bi-arrow-right ms-2 fw-medium"></i>
                                </div>
                                <div className="ms-auto">
                                    <Pagination className="mb-0 overflow-auto">
                                        <Pagination.Prev disabled>Previous</Pagination.Prev>
                                        <Pagination.Item active>{1}</Pagination.Item>
                                        <Pagination.Item>{2}</Pagination.Item>
                                        <Pagination.Item>{3}</Pagination.Item>
                                        <Pagination.Item>{4}</Pagination.Item>
                                        <Pagination.Item>{5}</Pagination.Item>
                                        <Pagination.Next>Next</Pagination.Next>
                                    </Pagination>
                                </div>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>

            {/* <!--End::row-1 --> */}

        </Fragment>
    )
};

export default JobsList;