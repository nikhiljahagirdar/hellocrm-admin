'use client'
import { Fragment, useState } from 'react'
import { Card, Col, Row, Form, Dropdown } from 'react-bootstrap'
import SpkTables from '@/shared/@spk-reusable-components/reusable-tables/spk-tables'
import SpkBadge from '@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-badge'
import SpkButton from '@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-buttons'
import SpkDropdown from '@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-dropdown'

const PlanAddons = () => {
  const [sortConfig, setSortConfig] = useState<{key: string, direction: 'asc' | 'desc'} | null>(null)

  const handleSort = (key: string) => {
    let direction: 'asc' | 'desc' = 'asc'
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc'
    }
    setSortConfig({ key, direction })
  }

  const planAddonsData = [
    { id: 1, planName: 'Basic Plan', addonName: 'Extra Storage', description: 'Additional 10GB storage space', price: '₹500', validity: '1 Month', status: 'Active', createdDate: '2024-01-15' },
    { id: 2, planName: 'Standard Plan', addonName: 'SMS Credits', description: 'Additional 1000 SMS credits', price: '₹300', validity: '1 Month', status: 'Active', createdDate: '2024-01-14' },
    { id: 3, planName: 'Premium Plan', addonName: 'WhatsApp Integration', description: 'WhatsApp business API integration', price: '₹1500', validity: '3 Months', status: 'Active', createdDate: '2024-01-13' },
    { id: 4, planName: 'Basic Plan', addonName: 'Advanced Reports', description: 'Detailed analytics and reporting', price: '₹800', validity: '1 Month', status: 'Inactive', createdDate: '2024-01-12' },
    { id: 5, planName: 'Enterprise Plan', addonName: 'Priority Support', description: '24/7 priority customer support', price: '₹2000', validity: '1 Year', status: 'Active', createdDate: '2024-01-11' }
  ]

  return (
    <Fragment>
      <div className="d-flex align-items-center justify-content-between mb-3 page-header-breadcrumb flex-wrap gap-2">
        <div>
          <h1 className="page-title fw-medium fs-20 mb-0">Plan Addons Master</h1>
        </div>
        <div className="d-flex align-items-center gap-2 flex-wrap">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item"><a href="#!">Masters</a></li>
              <li className="breadcrumb-item"><a href="#!">System & Credits</a></li>
              <li className="breadcrumb-item active">Plan Addons Master</li>
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
                    <Form.Control type="text" placeholder="Addon Name" className="form-control-sm" style={{ width: '200px' }} />
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
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('addonName')} style={{cursor: 'pointer'}}>Addon Name <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('description')} style={{cursor: 'pointer'}}>Description <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('price')} style={{cursor: 'pointer'}}>Price <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('validity')} style={{cursor: 'pointer'}}>Validity <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('status')} style={{cursor: 'pointer'}}>Status <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: 'Actions' }
                  ]}
                >
                  {planAddonsData.map((addon, index) => (
                    <tr key={index}>
                      <td><input className="form-check-input" type="checkbox" /></td>
                      <td>
                        <SpkBadge variant="" Customclass={`badge bg-${addon.planName.includes('Basic') ? 'secondary' : addon.planName.includes('Standard') ? 'primary' : addon.planName.includes('Premium') ? 'warning' : 'success'}-transparent`}>
                          {addon.planName}
                        </SpkBadge>
                      </td>
                      <td className="fw-semibold">{addon.addonName}</td>
                      <td>{addon.description}</td>
                      <td className="text-success fw-semibold">{addon.price}</td>
                      <td className="text-muted">{addon.validity}</td>
                      <td>
                        <SpkBadge variant="" Customclass={`badge bg-${addon.status === 'Active' ? 'success' : 'danger'}-transparent`}>
                          {addon.status}
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

export default PlanAddons