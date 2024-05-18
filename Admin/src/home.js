import logo from "./logo.svg";
import DataTable from 'react-data-table-component';
import React, { useEffect, useState } from "react";
import axios from "axios";
function Home() {
  const [open, setOpen] = useState(false);
  const [openpd, setOpenpd] = useState(false);
  const [openpg, setOpenpg] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    offerPrice: "",
    videoLink: "",
  });

  const [formErrors, setFormErrors] = useState({
    email: "",
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" });
  };

  const handleSubmit = async () => {
    try {
      const config = {
        url: "/course/addcourse",
        baseURL: "https://abhishad.onrender.com/api",
        method: "post",
        header: { "Content-type": "application/json" },
        data: {
          title: formData.title,
          price: formData.price,
          offerPrice: formData.offerPrice,
          videoLink: formData.videoLink,
        },
      };

      let response = await axios(config);
      if (response.status === 200) {
        alert("Course added Succesfully");
      }
    } catch (error) {
      console.error("error", error);
    }
  };
  const handleUpdate = async () => {
    try {
      const config = {
        url: `https://abhishad.onrender.com/api/course/update/${Editdata._id}`,
       
        method: "put",
        header: { "Content-type": "application/json" },
        data: {
          title: formData.title,
          price: formData.price,
          offerPrice: formData.offerPrice,
          videoLink: formData.videoLink,
        },
      };

      let response = await axios(config);
      if (response.status === 200) {
        alert("Course udpated Succesfully");
        window.location.reload()
      }
    } catch (error) {
      console.error("error", error);
    }
  };
  const [CourseData, setCourseData] = useState([])
  useEffect(() => { getAllCourse() }, [])
  const getAllCourse = async () => {
    try {
      let response = await axios.get("https://abhishad.onrender.com/api/course/getdata");
      if (response.status === 200) {
        setCourseData(response.data)
      }
    } catch (error) {
      console.error("error", error);
    }
  };

  const customStyles = {
    rows: {
      style: {
        fontSize: '16px',
        fontWeight: 'normal' // Change the font size for the rows
      },
    },
    headCells: {
      style: {
        fontSize: '18px', // Change the font size for the header cells
        fontWeight: 'bold'
      },
    },
    cells: {
      style: {
        fontSize: '16px',
        fontWeight: 'normal' // Change the font size for the cells
      },
    },
  };

  const columns = [
    {
      name: 'Title',
      selector: row => row.title,
    },
    {
      name: 'Price',
      selector: row => row.price,
    },
    {
      name: 'Offer Price',
      selector: row => row.offerPrice,
    },
    {
      name: 'Action',
      selector: row =>
        <>
          <div className="row">
            <button className="p-4 my-2 bg-success text-light" onClick={() => handleEdit(row)}>Edit</button >
            <button className="p-4 my-2 bg-danger text-light" onClick={() => handleDelete(row._id)}>Delete</button >
          </div>
        </>,
    },
  ];
  const [Editdata, setEditdata] = useState()
  const [Edit, setEdit] = useState()
  const handleEdit = (row) => {
    setEditdata(row)
    setAdd(true)
    setEdit(true)
  }


  const handleDelete = async (id) => {
    try {
      let response = await
        axios.post(`https://abhishad.onrender.com/api/course/trash/${id}`);

      if (response.status === 200) {
        alert("Deleted succesfully")
        window.location.reload()
      }
    } catch (error) {
      console.error("error", error);
    }
  }
  const [Add, setAdd] = useState(false)
  return (
    <>
      {!Add ? (
        <>
          <button className="submit-btn col-md-2 me-2 mt-4 float-end" onClick={() => setAdd(true)}>Add Course</button>
          <DataTable
            columns={columns}
            data={CourseData}
            pagination={CourseData.length > 9 ? true : false}
            customStyles={customStyles}
          /> </>
      ) : (
        <div className="row m-auto">
          <div className="row m-auto">
            <button className="submit-btn col-md-2 m-auto me-2 mt-4 float-end" onClick={() => setAdd(false)}>View Course</button>
          </div>
          <div className="row m-auto">
            <div className="form-container col-md-6 mt-4">

              <div className="form-input">
                <label htmlFor="title">Course Title</label>
                <input
                  id="title"
                  name="title"
                  type="text"
                  autoComplete="off"
                  required
                  defaultValue={Edit ? Editdata.title : formData.title}
                  onChange={handleInputChange}
                />
                {formErrors.title && (
                  <p className="error-message">{formErrors.title}</p>
                )}
              </div>

              <div className="form-input">
                <label htmlFor="price">Price</label>
                <input
                  id="price"
                  name="price"
                  type="number"
                  autoComplete="off"
                  required
                  defaultValue={Edit ? Editdata.price : formData.price}
                 
                  onChange={handleInputChange}
                />
                {formErrors.price && (
                  <p className="error-message">{formErrors.price}</p>
                )}
              </div>

              <div className="form-input">
                <label htmlFor="offerPrice">Offer Price</label>
                <input
                  id="offerPrice"
                  name="offerPrice"
                  type="number"
                  autoComplete="off"
                  required
                  defaultValue={Edit ? Editdata.offerPrice : formData.offerPrice}
                
                  onChange={handleInputChange}
                />
                {formErrors.offerPrice && (
                  <p className="error-message">{formErrors.offerPrice}</p>
                )}
              </div>

              <div className="form-input">
                <label htmlFor="videoLink">Video Link</label>
                <input
                  id="videoLink"
                  name="videoLink"
                  type="url"
                  autoComplete="off"
                  required
                 
                  defaultValue={Edit ? Editdata.videoLink : formData.videoLink}
                  onChange={handleInputChange}
                />
                {formErrors.videoLink && (
                  <p className="error-message">{formErrors.videoLink}</p>
                )}
              </div>

            {!Edit ? (
                <button onClick={handleSubmit} className="submit-btn">
                Submit
              </button>
            ):
            <button onClick={handleUpdate} className="submit-btn">
            Update
          </button>}

              
            </div>
          </div>
        </div>
      )}

    </>
  );
}

export default Home;
