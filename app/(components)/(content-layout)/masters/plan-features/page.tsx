'use client'
import { Fragment, useState } from 'react'
import { Card, Col, Row, Form, Dropdown } from 'react-bootstrap'
import SpkTables from '@/shared/@spk-reusable-components/reusable-tables/spk-tables'
import SpkBadge from '@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-badge'
import SpkButton from '@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-buttons'
import SpkDropdown from '@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-dropdown'

const PlanFeatures = () => {
  const [sortConfig, setSortConfig] = useState<{key: string, direction: 'asc' | 'desc'} | null>(null)

  const handleSort = (key: string) => {
    let direction: 'asc' | 'desc' = 'asc'
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc'
    }
    setSortConfig({ key, direction })
  }

  const planFeaturesData = [
    { id: 1, planName: 'Basic Plan', featureName: 'Lead Management', description: 'Basic lead tracking and management', isIncluded: true, limit: '100 leads', status: 'Active', createdDate: '2024-01-15' },
    { id: 2, planName: 'Standard Plan', featureName: 'Property Listings', description: 'Create and manage property listings', isIncluded: true, limit: '500 properties', status: 'Active', createdDate: '2024-01-14' },
    { id: 3, planName: 'Premium Plan', featureName: 'Advanced Analytics', description: 'Detailed reports and analytics', isIncluded: true, limit: 'Unlimited', status: 'Active', createdDate: '2024-01-13' },
    { id: 4, planName: 'Basic Plan', featureName: 'Email Marketing', description: 'Email campaign management', isIncluded: false, limit: 'Not Available', status: 'Inactive', createdDate: '2024-01-12' },
    { id: 5, planName: 'Enterprise Plan', featureName: 'API Access', description: 'Full API access for integrations', isIncluded: true, limit: 'Unlimited', status: 'Active', createdDate: '2024-01-11' }
  ]

  return (
    <Fragment>
      <div className="d-flex align-items-center justify-content-between mb-3 page-header-breadcrumb flex-wrap gap-2">
        <div>
          <h1 className="page-title fw-medium fs-20 mb-0">Plan Features Master</h1>
        </div>
        <div className="d-flex align-items-center gap-2 flex-wrap">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item"><a href="#!">Masters</a></li>
              <li className="breadcrumb-item"><a href="#!">System & Credits</a></li>
              <li className="breadcrumb-item active">Plan Features Master</li>
            </ol>
          </nav>
        </div>
      </div>

      <Row>
        <Col xl={12}>
          <Card className="custom-card">
            <Card.Header>
              <div className="d-flex align-items-center justify-content-between w-100">
                <div className="d-flex align-items-center gap-2">
                  <div className="d-flex flex-wrap gap-3 align-items-center">
                    <Form.Select className="form-select-sm" style={{ width: '180px' }}>
                      <option>Plan Name</option>
                      <option>Basic Plan</option>
                      <option>Standard Plan</option>
                      <option>Premium Plan</option>
                      <option>Enterprise Plan</option>
                    </Form.Select>
                    <Form.Control type="text" placeholder="Feature Name" className="form-control-sm" style={{ width: '200px' }} />
                  </div>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <SpkDropdown
                    Togglevariant=""
                    Toggletext="Export"
                    Arrowicon={true}
                    IconClass="ri-download-line me-1"
                    Customtoggleclass="btn btn-primary btn-sm"
                  >
                    <Dropdown.Item>CSV</Dropdown.Item>
                    <Dropdown.Item>Excel</Dropdown.Item>
                    <Dropdown.Item>PDF</Dropdown.Item>
                  </SpkDropdown>
                  <SpkButton Buttonvariant="success" Size="sm">
                    +
                  </SpkButton>
                </div>
              </div>
            </Card.Header>
            <Card.Body className="p-0">
              <div className="table-responsive">
                <SpkTables
                  tableClass="text-nowrap table-hover w-100"
                  showCheckbox={true}
                  header={[
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('planName')} style={{cursor: 'pointer'}}>Plan Name <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('featureName')} style={{cursor: 'pointer'}}>Feature Name <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('description')} style={{cursor: 'pointer'}}>Description <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('isIncluded')} style={{cursor: 'pointer'}}>Included <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('limit')} style={{cursor: 'pointer'}}>Limit <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('status')} style={{cursor: 'pointer'}}>Status <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: 'Actions' }
                  ]}
                >
                  {planFeaturesData.map((feature, index) => (
                    <tr key={index}>
                      <td><input className="form-check-input" type="checkbox" /></td>
                      <td>
                        <SpkBadge variant="" Customclass={`badge bg-${feature.planName.includes('Basic') ? 'secondary' : feature.planName.includes('Standard') ? 'primary' : feature.planName.includes('Premium') ? 'warning' : 'success'}-transparent`}>
                          {feature.planName}
                        </SpkBadge>
                      </td>
                      <td className="fw-semibold">{feature.featureName}</td>
                      <td>{feature.description}</td>
                      <td>
                        <SpkBadge variant="" Customclass={`badge bg-${feature.isIncluded ? 'success' : 'danger'}-transparent`}>
                          {feature.isIncluded ? 'Yes' : 'No'}
                        </SpkBadge>
                      </td>
                      <td className="text-info fw-semibold">{feature.limit}</td>
                      <td>
                        <SpkBadge variant="" Customclass={`badge bg-${feature.status === 'Active' ? 'success' : 'danger'}-transparent`}>
                          {feature.status}
                        </SpkBadge>
                      </td>
                      <td>
                        <div className="btn-group">
                          <SpkButton Buttonvariant="info" Size="sm"><i className="ri-eye-line"></i></SpkButton>
                          <SpkButton Buttonvariant="warning" Size="sm"><i className="ri-edit-line"></i></SpkButton>
                          <SpkButton Buttonvariant="danger" Size="sm"><i className="ri-delete-bin-line"></i></SpkButton>
                        </div>
                      </td>
                    </tr>
                  ))}
                </SpkTables>
              </div>
            </Card.Body>
            <Card.Footer>
              <div className="d-flex align-items-center justify-content-between">
                <div>Showing 1 to 5 of 100 entries <i className="bi bi-arrow-right ms-2"></i></div>
                <div>
                  <nav>
                    <ul className="pagination pagination-sm mb-0">
                      <li className="page-item disabled"><a className="page-link">Previous</a></li>
                      <li className="page-item active"><a className="page-link">1</a></li>
                      <li className="page-item"><a className="page-link">2</a></li>
                      <li className="page-item"><a className="page-link">3</a></li>
                      <li className="page-item"><a className="page-link">Next</a></li>
                    </ul>
                  </nav>
                </div>
              </div>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}

export default PlanFeatures