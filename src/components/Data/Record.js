import moment from 'moment'
import { Dropdown, Icon, Label, Table } from 'semantic-ui-react'

import Edit from './Edit'
import Delete from './Delete'

const Record = ({ id, title, amount, type, categories, createdAt }) => {
  return (
    <Table.Row>
      <Table.Cell collapsing textAlign="center">
        {id}
      </Table.Cell>
      <Table.Cell title={title}>{title}</Table.Cell>
      <Table.Cell title={`$${amount}`} collapsing>
        ${amount}
      </Table.Cell>
      <Table.Cell collapsing>
        <Label title={type} basic color={type === 'income' ? 'green' : 'red'}>
          {type}
        </Label>
      </Table.Cell>
      <Table.Cell collapsing>
        {categories.map(category => (
          <Label basic key={category.id} title={category.name} color={category.color}>
            {category.name}
          </Label>
        ))}
      </Table.Cell>
      <Table.Cell collapsing>
        <time dateTime={createdAt} title={createdAt}>
          {moment(createdAt).format('ll')}
        </time>
      </Table.Cell>
      <Table.Cell collapsing>
        <Dropdown
          pointing="top right"
          trigger={
            <div>
              <Icon color="grey" name="ellipsis vertical" />
            </div>
          }
          icon={null}
        >
          <Dropdown.Menu>
            <Edit id={id} />
            <Delete id={id} title={title} />
          </Dropdown.Menu>
        </Dropdown>
      </Table.Cell>
    </Table.Row>
  )
}

export default Record
