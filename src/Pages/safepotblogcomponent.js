
import React,  { useEffect, useState } from 'react';
import { Layout, Spin } from "antd";
import { Form, Upload,Input, Button} from 'antd';
import { useAlert } from 'react-alert'
import { UploadOutlined } from '@ant-design/icons';
import axios from 'axios';
function Safepotblogcomponent() {


    const propertiesUpload = {
        name: 'image',
        action: 'http://localhost:8080/api/safepotblogcomponent/upload/card1-image',
        headers: {
          authorization: 'authorization-text',
        }
      }
    //variable initializing
    const [Record, setRecord] = useState([]);
    const [loading, setLoading] = useState(true);
    const [Photo, SetPhoto] = useState();
    //componentdidmount || function call when page reloads
    useEffect(() => {
        getall();
      console.log("hello world")
      },[]);
  //geting all data api
   const getall = async () => {
        try {
          const response = await axios.get('http://localhost:8080/api/safepotblogcomponent/all');
          const newResponce = [...response.data]
          console.log("record",newResponce[0])
          setRecord(newResponce[0])
          setLoading(false);
        } catch (error) {
          console.log(error.message);
        }
      };
      //on submit function define here ==>updating record
    const onFinish =  async (values) => {
    console.log("form data ==>",values)
    try {
    const responce = await axios.post('http://localhost:8080/api/safepotblogcomponent/update',values)
    if(responce)
    {    console.log("responce from update api",responce)
        alert('Data stored')

    } 
    }catch(error) {  console.log(error);  alert.error('Data not updated!')  }               
             };

  const onFinishFailed =  async (values) => {
          alert('Enter data of all fields') 
      };
   //Image-1 Uploading handler
   const  handleChange = async(e)=>{
    console.log('change',e);
    if(e.file.status == 'done'){
      // set the file url 
      alert('File Uploaded');
    }

  }

  //display area started here
  return (
    loading ? (
        <Spin size="large"
          style={{position: "absolute", top: "50%",right: "45%", transform: "translate(0, -50%)"}}
        />
      ) : (
          <React.Fragment>
    <p className='text-center bg-danger'>
    page title: {Record.title || "HELLO WOLRD"} <br/>
    card1_title: {Record.card1_title || "HELLO WOLRD"} <br/>
    card2_title: {Record.card2_title || "HELLO WOLRD"} <br/>
    card3_title: {Record.card3_title || "HELLO WOLRD"} <br/>
    card1_description: {Record.card1_description || "HELLO WOLRD"} <br/> 
    card2_description: {Record.card2_description || "HELLO WOLRD"} <br/>
    card3_description: {Record.card3_description || "HELLO WOLRD"} <br/>
    card1_image: {Record.card1_image || "HELLO WOLRD"} <br/>
    card2_image: {Record.card2_image || "HELLO WOLRD"} <br/>
    card3_image: {Record.card3_image || "HELLO WOLRD"} <br/> 
     </p>
     <div>
 <Form onFinish={onFinish} onFinishFailed={onFinishFailed} >
    <Form.Item  validateStatus="error" label="Page Title"   validateStatus="error" name="title"  >
    <Input defaultValue={Record.title} className="form-control form-control-user"/>
      </Form.Item>
    <Form.Item  validateStatus="error" label="card1_title"  validateStatus="error" name="card1_title"  >
    <Input  defaultValue={Record.card1_title}  className="form-control form-control-user"/>
      </Form.Item>
    <Form.Item  validateStatus="error" label="card2_title"  validateStatus="error" name="card2_title"  >
    <Input defaultValue={Record.card2_title} className="form-control form-control-user"/>
      </Form.Item>
    <Form.Item  validateStatus="error" label="card3_title"  validateStatus="error" name="card3_title"  >
    <Input defaultValue={Record.card3_title} className="form-control form-control-user"/>
    </Form.Item>
    <Form.Item  validateStatus="error" label="card1_description"  validateStatus="error" name="card1_description"  >
    <Input defaultValue={Record.card1_description} className="form-control form-control-user"/>
    </Form.Item>
    <Form.Item  validateStatus="error" label="card2_description"  validateStatus="error" name="card2_description" >
    <Input defaultValue={Record.card2_description} className="form-control form-control-user"/>
    </Form.Item>
    <Form.Item  validateStatus="error" label="card3_description"  validateStatus="error" name="card3_description"  >
    <Input defaultValue={Record.card3_description} className="form-control form-control-user"/>
    </Form.Item>

                   
    <Form.Item >
     <Button  className="btn btn-primary btn-user btn-block my-3" style={{padding:'5px 40px'}} type="primary" htmlType="submit">
    Upadate </Button>
    </Form.Item>      
</Form>
{/* uplading card-1 image */}

<Upload labelStyle={{color:"black"}} style={{color:"white"}} {...propertiesUpload} onChange={(e)=> handleChange(e)}
        data={{name:'testing'}}>
    <Button style={{color:"black"}} icon={<UploadOutlined />}>Upload Card-1 Photo</Button>
  </Upload>
     </div>
     </React.Fragment>
      )
  );
}

export default Safepotblogcomponent;
