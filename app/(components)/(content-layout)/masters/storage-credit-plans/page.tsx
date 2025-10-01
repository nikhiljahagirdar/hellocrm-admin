'use client'
import { Fragment, useState } from 'react'
import { Card, Col, Row, Form, Dropdown } from 'react-bootstrap'
import SpkTables from '@/shared/@spk-reusable-components/reusable-tables/spk-tables'
import SpkBadge from '@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-badge'
import SpkButton from '@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-buttons'
import SpkDropdown from '@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-dropdown'

const StorageCreditPlans = () => {
  const [sortConfig, setSortConfig] = useState<{key: string, direction: 'asc' | 'desc'} | null>(null)
  const [capacityRange, setCapacityRange] = useState([0, 1000])

  const handleSort = (key: string) => {
    let direction: 'asc' | 'desc' = 'asc'
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc'
    }
    setSortConfig({ key, direction })
  }

  const storagePlansData = [
    { id: 1, planName: 'Basic Storage', capacity: '10 GB', price: '₹500', validity: '1 Year', description: 'Basic storage plan', status: 'Active', createdDate: '2024-01-15' },
    { id: 2, planName: 'Standard Storage', capacity: '50 GB', price: '₹2000', validity: '1 Year', description: 'Standard storage plan', status: 'Active', createdDate: '2024-01-14' },
    { id: 3, planName: 'Premium Storage', capacity: '100 GB', price: '₹3500', validity: '1 Year', description: 'Premium storage plan', status: 'Active', createdDate: '2024-01-13' },
    { id: 4, planName: 'Enterprise Storage', capacity: '500 GB', price: '₹15000', validity: '1 Year', description: 'Enterprise storage plan', status: 'Inactive', createdDate: '2024-01-12' },
    { id: 5, planName: 'Unlimited Storage', capacity: '1000 GB', price: '₹25000', validity: '1 Year', description: 'Unlimited storage plan', status: 'Active', createdDate: '2024-01-11' }
  ]

  return (
    <Fragment>
      <div className="d-flex align-items-center justify-content-between mb-3 page-header-breadcrumb flex-wrap gap-2">
        <div>
          <h1 className="page-title fw-medium fs-20 mb-0">Storage Credit Plans</h1>
        </div>
        <div className="d-flex align-items-center gap-2 flex-wrap">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item"><a href="#!">Masters</a></li>
              <li className="breadcrumb-item"><a href="#!">System & Credits</a></li>
              <li className="breadcrumb-item active">Storage Credit Plans</li>
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
                      <option>Basic Storage</option>
                      <option>Standard Storage</option>
                      <option>Premium Storage</option>
                      <option>Enterprise Storage</option>
                      <option>Unlimited Storage</option>
                    </Form.Select>
                    <div className="d-flex align-items-center gap-2">
                      <label className="form-label mb-0 text-nowrap">Capacity:</label>
                      <input 
                        type="range" 
                        className="form-range" 
                        min="0" 
                        max="1000" 
                        value={capacityRange[1]} 
                        onChange={(e) => setCapacityRange([capacityRange[0], parseInt(e.target.value)])}
                        style={{ width: '150px' }}
                      />
                      <span className="text-muted small">{capacityRange[0]} - {capacityRange[1]} GB</span>
                    </div>
                    <Form.Select className="form-select-sm" style={{ width: '150px' }}>
                      <option>Status</option>
                      <option>Active</option>
                      <option>Inactive</option>
                    </Form.Select>
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
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('capacity')} style={{cursor: 'pointer'}}>Capacity <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('price')} style={{cursor: 'pointer'}}>Price <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('validity')} style={{cursor: 'pointer'}}>Validity <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('status')} style={{cursor: 'pointer'}}>Status <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: 'Actions' }
                  ]}
                >
                  {storagePlansData.map((plan, index) => (
                    <tr key={index}>
                      <td><input className="form-check-input" type="checkbox" /></td>
                      <td className="fw-semibold">{plan.planName}</td>
                      <td className="text-info fw-semibold">{plan.capacity}</td>
                      <td className="text-success fw-semibold">{plan.price}</td>
                      <td className="text-muted">{plan.validity}</td>
                      <td>
                        <SpkBadge variant="" Customclass={`badge bg-${plan.status === 'Active' ? 'success' : 'danger'}-transparent`}>
                          {plan.status}
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

export default StorageCreditPlans