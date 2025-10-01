'use client'
import { Fragment, useState } from 'react'
import { Card, Col, Row, Form, Dropdown } from 'react-bootstrap'
import SpkTables from '@/shared/@spk-reusable-components/reusable-tables/spk-tables'
import SpkBadge from '@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-badge'
import SpkButton from '@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-buttons'
import SpkDropdown from '@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-dropdown'

const OfferTags = () => {
  const [sortConfig, setSortConfig] = useState<{key: string, direction: 'asc' | 'desc'} | null>(null)

  const handleSort = (key: string) => {
    let direction: 'asc' | 'desc' = 'asc'
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc'
    }
    setSortConfig({ key, direction })
  }

  const offerTagsData = [
    { id: 1, tagName: 'Limited Time', description: 'Limited time offer', color: '#dc3545', status: 'Active', createdDate: '2024-01-15', updatedDate: '2024-01-15' },
    { id: 2, tagName: 'Best Deal', description: 'Best deal available', color: '#28a745', status: 'Active', createdDate: '2024-01-14', updatedDate: '2024-01-14' },
    { id: 3, tagName: 'Premium', description: 'Premium property offer', color: '#ffc107', status: 'Active', createdDate: '2024-01-13', updatedDate: '2024-01-13' },
    { id: 4, tagName: 'Exclusive', description: 'Exclusive offer for VIP clients', color: '#6f42c1', status: 'Inactive', createdDate: '2024-01-12', updatedDate: '2024-01-12' },
    { id: 5, tagName: 'New Launch', description: 'New property launch offer', color: '#17a2b8', status: 'Active', createdDate: '2024-01-11', updatedDate: '2024-01-11' }
  ]

  return (
    <Fragment>
      <div className="d-flex align-items-center justify-content-between mb-3 page-header-breadcrumb flex-wrap gap-2">
        <div>
          <h1 className="page-title fw-medium fs-20 mb-0">Offer Tags</h1>
        </div>
        <div className="d-flex align-items-center gap-2 flex-wrap">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item"><a href="#!">Masters</a></li>
              <li className="breadcrumb-item"><a href="#!">CRM & Leads</a></li>
              <li className="breadcrumb-item active">Offer Tags</li>
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
                    <Form.Control type="text" placeholder="Tag Name" className="form-control-sm" style={{ width: '200px' }} />
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
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('tagName')} style={{cursor: 'pointer'}}>Tag Name <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('description')} style={{cursor: 'pointer'}}>Description <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('color')} style={{cursor: 'pointer'}}>Color <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('status')} style={{cursor: 'pointer'}}>Status <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('createdDate')} style={{cursor: 'pointer'}}>Created Date <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: 'Actions' }
                  ]}
                >
                  {offerTagsData.map((tag, index) => (
                    <tr key={index}>
                      <td><input className="form-check-input" type="checkbox" /></td>
                      <td>
                        <SpkBadge variant="" Customclass="badge bg-warning-transparent">
                          {tag.tagName}
                        </SpkBadge>
                      </td>
                      <td>{tag.description}</td>
                      <td>
                        <div className="d-flex align-items-center gap-2">
                          <div style={{ width: '20px', height: '20px', backgroundColor: tag.color, borderRadius: '4px' }}></div>
                          <span>{tag.color}</span>
                        </div>
                      </td>
                      <td>
                        <SpkBadge variant="" Customclass={`badge bg-${tag.status === 'Active' ? 'success' : 'danger'}-transparent`}>
                          {tag.status}
                        </SpkBadge>
                      </td>
                      <td>{tag.createdDate}</td>
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

export default OfferTags