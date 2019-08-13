import React from 'react';
import { Modal, Button, Result } from 'antd';
import { SmileTwoTone, Search as IconSearch } from '@ant-design/icons';

import styles from './index.css';

function confirm() {
  Modal.confirm({
    title: 'Confirm',
    content: 'Bla bla ...',
    okText: '确认',
    cancelText: '取消',
  });
}

class ModalDemo extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  hideModal = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Modal
        </Button>
        <Modal
          title="Modal"
          visible={this.state.visible}
          onOk={this.hideModal}
          onCancel={this.hideModal}
          okText="确认"
          cancelText="取消"
        >
          <p>Bla bla ...</p>
          <p>Bla bla ...</p>
          <p>Bla bla ...</p>
        </Modal>
      </div>
    );
  }
}

export default function() {
  return (
    <div>
      <ModalDemo />
      <br />
      <Button onClick={confirm}>Confirm</Button>
      <br />
      <Button type="primary" shape="circle" icon={<IconSearch />} />
      <Button type="primary" icon={<IconSearch />}>
        Search
      </Button>
      <Button shape="circle" icon={<IconSearch />} />
      <Button icon={<IconSearch />}>Search</Button>
      <br />
      <Button shape="circle" icon={<IconSearch />} />
      <Button icon={<IconSearch />}>Search</Button>
      <Button type="dashed" shape="circle" icon={<IconSearch />} />
      <Button type="dashed" icon={<IconSearch />}>
        Search
      </Button>
      <br />
      <Result
        icon={<SmileTwoTone />}
        title="Great, we have done all the operations!"
        extra={<Button type="primary">Next</Button>}
      />
    </div>
  );
}
