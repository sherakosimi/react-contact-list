import React from "react";
import { Table, Space, Button, Divider } from "antd";
import Context from "./Context";

const ContactList = ({ onAddNewClick }) => {
  const { contacts } = React.useContext(Context);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Phone Number",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "DOB",
      dataIndex:"DOB",
      render: (text, record, index)=> {
        return text.format('YYYY-MM-DD');
      }
    },
    {
       title :"Gender",
       dataIndex: "gender",
    },
    {
      title :"isRelative?",
      dataIndex: "isRelative",
      render: (value) => {
        if (value){
          return <div style = {{color:'red'}}>Yes</div>
        }
        else{
          return "No"
        }
      }
   }
  ];
    console.log(contacts)
  return (
    <>
      <Space>
        <Button type="primary" onClick={onAddNewClick}>
          Add new contact
        </Button>
      </Space>
      <Divider />
      <Table dataSource={contacts} columns={columns} />
    </>
  );
};

export default ContactList;
