import React from "react";
import { Form, Input, Button, Space, DatePicker, Select, Switch, message } from "antd";
import Context from "./Context";
import moment from 'moment';


const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
const { Option } = Select;
const CreateContact = ({ onCancelClick }) => {
  const [form] = Form.useForm();
  const { addNewContact } = React.useContext(Context);

  const onFormFinish = (values) => {
    console.log(values)
    addNewContact(values);
    onCancelClick();
  };

  const success =()=>{
    message.success('You have successfully added a new contact to your list!')
  }

  return (
    <Form form={form} onFinish={onFormFinish} initialValues={{
      DOB: moment("01/01/2015", dateFormatList[0] 
      ),
      name: 'Sher',
      isRelative: false
    }}>
      <Form.Item
        name="name"
        label="Name"
        rules={[
          {
            required: true,
            message: "Please input contact name",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[
          {
            required: true,
            message: "Please input phone number",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item  
        name="DOB"
        label="Birthday Date"
        rules={[
          {
            required: false,
            message: "Please input BOD",
          },
        ]}
        >
          <DatePicker  
          />
      </Form.Item>
      <Form.Item  
        name="gender"
        label="Gender"
        >
       <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Select a person"
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="Male">Male</Option>
            <Option value="Female">Female</Option>
          </Select>
      </Form.Item>
      <Form.Item
          name="isRelative"
          label="Is Relative?">
          <Switch/>
      </Form.Item>
      <Form.Item>
        
          <Button type="primary" htmlType="submit" onClick ={success}>
            Add Contact
          </Button>
          <Button type="primary" danger onClick={onCancelClick}>
            Cancel
          </Button>
        
      </Form.Item>
    </Form>
  );
};

export default CreateContact;
