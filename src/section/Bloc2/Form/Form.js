import React, { useContext, useState } from "react";
import "./FormComponent.css"; 
import { AppContext } from "../../../context";
import { Editor } from "@tinymce/tinymce-react";

const FormComponent = () => {
  const { dataLanguage } = useContext(AppContext);
  const [content, setContent] = useState("");
  return (
    <div className="form-container">
      <form>
        <div className="form-group flex flex-nowrap items-center flex">
          <label htmlFor="name" className="mr-20">
            {dataLanguage?.[0]?.bloc_2_2?.btn_1[0]}:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder={dataLanguage?.[0]?.bloc_2_2?.btn_1[1]}
          />
        </div>

        <div className="form-group flex items-center flex">
          <label className="mr-20" htmlFor="email">
            {dataLanguage?.[0]?.bloc_2_2?.btn_2[0]}:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder={dataLanguage?.[0]?.bloc_2_2?.btn_2[1]}
          />
        </div>

        <div className="items-center flex">
          <label htmlFor="message" className="mr-16">
            {dataLanguage?.[0]?.bloc_2_2?.btn_3}:
          </label>
          <Editor
            id="message"
            apiKey="d3r9d38t80xd9q6yxpkgnz86l0ydrbk09nsmsoe5s4s8g8ch" // Đăng ký key miễn phí tại TinyMCE
            value={content}
            onEditorChange={(newValue) => setContent(newValue)}
            init={{
              width: "100%",
              height: 300,
              menubar: false,
              plugins: [
                "advlist autolink lists link image charmap print preview anchor",
                "searchreplace visualblocks code fullscreen",
                "insertdatetime media table paste code help wordcount",
              ],
              toolbar:
                "undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
              content_css: false, // Tắt CSS mặc định
              content_style: `
            .tox-tinymce { background-color: #fff5f5; }
            .tox-toolbar { background-color: #ffecec; border: 1px solid #ff9999; }
            .tox .tox-toolbar__group { border-right: 1px solid #ff9999; }
            .tox-toolbar__primary { color: #824242; font-size: 14px; }
            .tox .tox-button { color: #824242; background: transparent; }
            .tox .tox-button:hover { background-color: #ffc1c1; color: #ff3333; }
          `,
            }}
          />
        </div>

        <div className="form-group flex  items-center">
          <label htmlFor="file" className="mr-20 mt-5">
            {dataLanguage?.[0]?.bloc_2_2?.btn_4[0]}:
          </label>
          <div className="file-upload">
            <span className="file-icon">📎</span>
            <label className="file-text" htmlFor="file">
              {dataLanguage?.[0]?.bloc_2_2?.btn_4[1]}
            </label>
            <input type="file" id="file" name="file" accept="application/pdf" />
            <small>
              {" "}
              {`${dataLanguage?.[0]?.bloc_2_2?.btn_4[0]} (*fichiers pdf uniquement)`}
            </small>
          </div>
        </div>

        <div className="form-actions">
          <button type="reset" className="clear-button">
            Clear All
          </button>
          <button type="submit" className="submit-button">
            Envoyer
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
