import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import books from '../booksData';

const AddBookForm = () => {
  const navigate = useNavigate();
  const [formdata, setformdata] = useState({
    Title: '',
    Author: '',
    Description: '',
    Image: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    books.push({
      title: formdata.Title,
      author: formdata.Author,
      description: formdata.Description,
      coverImage: formdata.Image
    });

    setformdata({
    Title: '',
    Author: '',
    Description: '',
    Image: '',
    });

    navigate('/');

  };

  return (
    <div className="add-book-form-container">
      <form className="add-book-form" onSubmit={handleSubmit}>
        <h2>Add New Book</h2>
        <label>
          Title:
          <input
            value={formdata.Title}
            onChange={(e) =>
              setformdata({ ...formdata, Title: e.target.value })
            }
            type="text"
            placeholder="Enter book title"
            required
          />
        </label>
        <label>
          Author:
          <input
            value={formdata.Author}
            onChange={(e) =>
              setformdata({ ...formdata, Author: e.target.value })
            }
            type="text"
            placeholder="Enter author's name"
            required
          />
        </label>
        <label>
          Description:
          <textarea
            value={formdata.Description}
            onChange={(e) =>
              setformdata({ ...formdata, Description: e.target.value })
            }
            placeholder="Enter book description"
            required
          ></textarea>
        </label>
        <label>
          Cover Image URL:
          <input
            value={formdata.Image}
            onChange={(e) =>
              setformdata({ ...formdata, Image: e.target.value })
            }
            type="url"
            placeholder="Enter image URL"
            required
          />
        </label>
        <div className="form-buttons">
          <button type="submit" className="submit-button">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBookForm;
