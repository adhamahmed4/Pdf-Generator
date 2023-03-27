import React from "react";
import style from "./UserForm.module.css";
import { Button, Form, Input, Card } from 'antd';
import { useNavigate } from 'react-router-dom';

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
  },
  string: {
    max: '${label} must be at most ${max} characters long!',
  },
};

const validateBio = (_, value) => {
  if (value && value.length > 400) {
    return Promise.reject(new Error('Bio must be at most 400 characters long!'));
  }
  return Promise.resolve();
};


const UserForm = () => {

  // const [userData, setUserData] = useState({});

  const navigate = useNavigate();

  const onFinish = async (values) => {
    navigate('/pdf', { state: { userData: values } });
  };

  return (
    <div className={style.container}>
      <Card
        title="Contact Information"
        bordered={true}
        className={style.card}
      >
        <Form
          name="nest-messages"
          onFinish={onFinish}
          style={{
            width: '100%',
          }}
          validateMessages={validateMessages}
        >
          <Form.Item
            name={['user', 'name']}
            label="Name"
            rules={[{ required: true, }, {
              pattern: /^[a-zA-Z\s]*$/,
              message: 'Name must contain letters only!',
            },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={['user', 'email']}
            label="Email"
            rules={[
              {
                type: 'email',
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={['user', 'mobileNumber']}
            label="Mobile Number"
            rules={[{ required: true, }, {
              pattern: /^[0-9]*$/,
              message: 'Mobile number must contain digits only!',
            },
            ]}>
            <Input />
          </Form.Item>
          <Form.Item
            name={['user', 'bio']}
            label="Bio"
            rules={[
              {
                required: true,
                message: 'Please enter your bio!',
              },
              {
                validator: validateBio,
              },
            ]}
          >
            <Input.TextArea rows={6} style={{
              height: 120,
              resize: 'none',
            }} />
          </Form.Item>
          <Form.Item
            style={{ textAlign: "center" }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default UserForm;