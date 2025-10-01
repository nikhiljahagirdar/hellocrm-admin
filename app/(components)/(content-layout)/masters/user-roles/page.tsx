'use client'
import { Fragment, useState } from 'react'
import { Card, Col, Row, Form, Dropdown } from 'react-bootstrap'
import SpkTables from '@/shared/@spk-reusable-components/reusable-tables/spk-tables'
import SpkBadge from '@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-badge'
import SpkButton from '@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-buttons'
import SpkDropdown from '@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-dropdown'

const UserRoles = () => {
  const [sortConfig, setSortConfig] = useState<{key: string, direction: 'asc' | 'desc'} | null>(null)

  const handleSort = (key: string) => {
    let direction: 'asc' | 'desc' = 'asc'
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc'
    }
    setSortConfig({ key, direction })
  }

  const userRolesData = [
    { id: 1, roleName: 'Super Admin', description: 'Full system access', accessLevel: 'Full', permissions: 'All', status: 'Active', createdDate: '2024-01-15', updatedDate: '2024-01-15' },
    { id: 2, roleName: 'Admin', description: 'Business administration', accessLevel: 'High', permissions: 'Business Management', status: 'Active', createdDate: '2024-01-14', updatedDate: '2024-01-14' },
    { id: 3, roleName: 'Manager', description: 'Team management', accessLevel: 'Medium', permissions: 'Team & Leads', status: 'Active', createdDate: '2024-01-13', updatedDate: '2024-01-13' },
    { id: 4, roleName: 'Sales Executive', description: 'Sales operations', accessLevel: 'Limited', permissions: 'Leads & Properties', status: 'Inactive', createdDate: '2024-01-12', updatedDate: '2024-01-12' },
    { id: 5, roleName: 'Viewer', description: 'Read-only access', accessLevel: 'View Only', permissions: 'View Reports', status: 'Active', createdDate: '2024-01-11', updatedDate: '2024-01-11' }
  ]

  return (
    <Fragment>
      <div className="d-flex align-items-center justify-content-between mb-3 page-header-breadcrumb flex-wrap gap-2">
        <div>
          <h1 className="page-title fw-medium fs-20 mb-0">User Roles</h1>
        </div>
        <div className="d-flex align-items-center gap-2 flex-wrap">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item"><a href="#!">Masters</a></li>
              <li className="breadcrumb-item"><a href="#!">Media & User</a></li>
              <li className="breadcrumb-item active">User Roles</li>
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
                    <Form.Control type="text" placeholder="Role Name" className="form-control-sm" style={{ width: '200px' }} />
                    <Form.Select className="form-select-sm" style={{ width: '150px' }}>
                      <option>Access Level</option>
                      <option>Full</option>
                      <option>High</option>
                      <option>Medium</option>
                      <option>Limited</option>
                      <option>View Only</option>
                    </Form.Select>
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
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('roleName')} style={{cursor: 'pointer'}}>Role Name <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('description')} style={{cursor: 'pointer'}}>Description <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('accessLevel')} style={{cursor: 'pointer'}}>Access Level <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('permissions')} style={{cursor: 'pointer'}}>Permissions <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('status')} style={{cursor: 'pointer'}}>Status <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: 'Actions' }
                  ]}
                >
                  {userRolesData.map((role, index) => (
                    <tr key={index}>
                      <td><input className="form-check-input" type="checkbox" /></td>
                      <td className="fw-semibold">{role.roleName}</td>
                      <td>{role.description}</td>
                      <td>
                        <SpkBadge variant="" Customclass={`badge bg-${role.accessLevel === 'Full' ? 'danger' : role.accessLevel === 'High' ? 'warning' : role.accessLevel === 'Medium' ? 'info' : role.accessLevel === 'Limited' ? 'primary' : 'secondary'}-transparent`}>
                          {role.accessLevel}
                        </SpkBadge>
                      </td>
                      <td className="text-muted">{role.permissions}</td>
                      <td>
                        <SpkBadge variant="" Customclass={`badge bg-${role.status === 'Active' ? 'success' : 'danger'}-transparent`}>
                          {role.status}
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

export default UserRoles